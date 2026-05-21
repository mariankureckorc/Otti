// Otti — export-sheet field persistence
// Keeps the user's last-selected range/format/email so reopening the
// sheet within the same session feels stateful.

const exportPrefs = {
  state: {
    rangePreset: 'last30',  // 'last7' | 'last30' | 'last90' | 'allTime' | 'custom'
    format: 'csv',           // 'csv' | 'pdf'
    email: '',               // '' means "pre-fill from currentUser on first open"
  },
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach(fn => fn()); },
  set(patch) { this.state = { ...this.state, ...patch }; this.emit(); },
};

function useExportPrefs() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => exportPrefs.subscribe(force), []);
  return {
    prefs: exportPrefs.state,
    set: (patch) => exportPrefs.set(patch),
  };
}

Object.assign(window, { exportPrefs, useExportPrefs });
