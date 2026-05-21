// Otti — children store
// Module-level singleton with subscribe pattern. Same shape as a tiny
// observable: components subscribe via the useChildren() hook and
// re-render when the active child changes or a new one is added.

const CHILDREN_INITIAL = [
  {
    id: 'mia', name: 'Mia', age: 4, implantSide: 'both', since: '2023', goalMinutes: 780,
    dob: '2022-03-14', hospital: 'St. Joseph Institute for the Deaf',
    leftEar: 'cochlear-implant', rightEar: 'cochlear-implant',
  },
  {
    id: 'leo', name: 'Leo', age: 2, implantSide: 'left', since: '2025', goalMinutes: 600,
    dob: '2024-01-20', hospital: 'St. Joseph Institute for the Deaf',
    leftEar: 'cochlear-implant', rightEar: 'none',
  },
];

// — Derivation helpers — keep age/implantSide consistent with the
// richer DOB / per-ear-device fields captured in the signup wizard.
function ageFromDob(dob) {
  if (!dob) return null;
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return null;
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) years--;
  return Math.max(0, years);
}

function implantSideFromEars(left, right) {
  const l = left && left !== 'none';
  const r = right && right !== 'none';
  if (l && r) return 'both';
  if (l) return 'left';
  if (r) return 'right';
  return 'none';
}

const childrenStore = {
  list: [...CHILDREN_INITIAL],
  activeId: CHILDREN_INITIAL[0].id,
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach(fn => fn()); },
  setActive(id) {
    if (this.list.some(c => c.id === id) && id !== this.activeId) {
      this.activeId = id;
      this.emit();
    }
  },
  add(data) {
    const slug = String(data.name || 'child').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const id = `${slug || 'child'}-${Date.now().toString(36)}`;

    // Derive legacy fields from richer inputs when present.
    const dob = data.dob || null;
    const age = dob ? ageFromDob(dob) : (data.age != null ? data.age : 0);
    const implantSide = (data.leftEar || data.rightEar)
      ? implantSideFromEars(data.leftEar || 'none', data.rightEar || 'none')
      : (data.implantSide || 'both');
    const since = dob
      ? new Date(dob).getFullYear().toString()
      : (data.since || new Date().getFullYear().toString());

    const child = {
      id,
      name: data.name,
      age,
      implantSide,
      since,
      goalMinutes: data.goalMinutes || (age < 3 ? 600 : 780),
      dob,
      hospital: data.hospital || null,
      leftEar:  data.leftEar  || (implantSide === 'right' ? 'none' : 'cochlear-implant'),
      rightEar: data.rightEar || (implantSide === 'left'  ? 'none' : 'cochlear-implant'),
    };
    this.list.push(child);
    this.activeId = id;
    this.emit();
    return child;
  },
};

function useChildren() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => childrenStore.subscribe(force), []);
  return {
    children: childrenStore.list,
    active: childrenStore.list.find(c => c.id === childrenStore.activeId) || childrenStore.list[0],
    setActive: (id) => childrenStore.setActive(id),
    addChild: (data) => childrenStore.add(data),
  };
}

function implantSideLabel(side) {
  if (side === 'both') return 'Bilateral';
  if (side === 'left') return 'Left ear';
  if (side === 'right') return 'Right ear';
  return '';
}

Object.assign(window, {
  childrenStore, useChildren, implantSideLabel,
  ageFromDob, implantSideFromEars,
});
