// Otti — parent notification preferences
// Singleton + subscribe pattern. Reminder entries are stored as an array
// on the parent record so they survive navigation away and back. Adding,
// editing, toggling, or removing a reminder saves immediately.

const MAX_REMINDERS = 3;

const PARENT_PREFS_INITIAL = {
  masterEnabled: true,
  reminders: [
    { id: 'r-morning', time: '08:00', label: 'Morning', enabled: true },
    { id: 'r-evening', time: '18:00', label: 'Evening', enabled: true },
  ],
  achievements: {
    goalMet: true,
    weeklyMilestones: true,
    weeklySummary: true,
  },
  quietHours: { from: '20:00', to: '07:00' },
};

const parentPrefs = {
  state: {
    masterEnabled: PARENT_PREFS_INITIAL.masterEnabled,
    reminders: PARENT_PREFS_INITIAL.reminders.map(r => ({ ...r })),
    achievements: { ...PARENT_PREFS_INITIAL.achievements },
    quietHours: { ...PARENT_PREFS_INITIAL.quietHours },
  },
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach(fn => fn()); },

  setMasterEnabled(v) {
    this.state.masterEnabled = !!v;
    this.emit();
  },
  setAchievement(key, v) {
    this.state.achievements = { ...this.state.achievements, [key]: !!v };
    this.emit();
  },
  setQuietHours(patch) {
    this.state.quietHours = { ...this.state.quietHours, ...patch };
    this.emit();
  },

  // Pick a sensible default time for a newly added reminder that doesn't
  // collide with anything already configured.
  findNextAvailableTime() {
    const taken = new Set(this.state.reminders.map(r => r.time));
    const candidates = ['12:00', '15:00', '21:00', '10:00', '14:00', '20:00', '07:00', '19:00', '22:00'];
    for (const c of candidates) if (!taken.has(c)) return c;
    return '12:00';
  },

  add() {
    if (this.state.reminders.length >= MAX_REMINDERS) return null;
    const time = this.findNextAvailableTime();
    const reminder = {
      id: `r-${Date.now().toString(36)}`,
      time,
      label: `Reminder ${this.state.reminders.length + 1}`,
      enabled: true,
    };
    this.state.reminders = [...this.state.reminders, reminder];
    this.emit();
    return reminder;
  },

  // Returns { ok: true } on success, or { ok: false, error: 'duplicate' }
  // if the new time would collide with another reminder.
  update(id, patch) {
    if (patch.time != null) {
      const dup = this.state.reminders.find(r => r.id !== id && r.time === patch.time);
      if (dup) return { ok: false, error: 'duplicate' };
    }
    this.state.reminders = this.state.reminders.map(r =>
      r.id === id ? { ...r, ...patch } : r
    );
    this.emit();
    return { ok: true };
  },

  remove(id) {
    if (this.state.reminders.length <= 0) return;
    this.state.reminders = this.state.reminders.filter(r => r.id !== id);
    this.emit();
  },
};

function useParentPrefs() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => parentPrefs.subscribe(force), []);
  return {
    // master
    masterEnabled: parentPrefs.state.masterEnabled,
    setMasterEnabled: (v) => parentPrefs.setMasterEnabled(v),
    // reminders
    reminders: parentPrefs.state.reminders,
    addReminder: () => parentPrefs.add(),
    updateReminder: (id, patch) => parentPrefs.update(id, patch),
    removeReminder: (id) => parentPrefs.remove(id),
    canAddMore: parentPrefs.state.reminders.length < MAX_REMINDERS,
    // achievements
    achievements: parentPrefs.state.achievements,
    setAchievement: (key, v) => parentPrefs.setAchievement(key, v),
    // quiet hours
    quietHours: parentPrefs.state.quietHours,
    setQuietHours: (patch) => parentPrefs.setQuietHours(patch),
  };
}

Object.assign(window, { parentPrefs, useParentPrefs, MAX_REMINDERS });
