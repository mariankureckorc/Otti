// Otti — children store
// Module-level singleton with subscribe pattern. Same shape as a tiny
// observable: components subscribe via the useChildren() hook and
// re-render when the active child changes or a new one is added.

const CHILDREN_INITIAL = [
  { id: 'mia', name: 'Mia', age: 4, implantSide: 'both',  since: '2023', goalMinutes: 780 },
  { id: 'leo', name: 'Leo', age: 2, implantSide: 'left',  since: '2025', goalMinutes: 600 },
];

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
    const child = {
      id,
      name: data.name,
      age: data.age,
      implantSide: data.implantSide,
      since: data.since || String(new Date().getFullYear()),
      goalMinutes: data.goalMinutes || (data.age < 3 ? 600 : 780),
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

Object.assign(window, { childrenStore, useChildren, implantSideLabel });
