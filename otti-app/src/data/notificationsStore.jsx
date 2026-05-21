// Otti — notifications feed store
// Singleton + subscribe pattern. The screen subscribes via the
// useNotifications hook and re-renders when read state changes or a
// notification is opened (selected for the detail view).

function makeAgo(amount, unit) {
  const d = new Date();
  if (unit === 'minutes') d.setMinutes(d.getMinutes() - amount);
  if (unit === 'hours')   d.setHours(d.getHours() - amount);
  if (unit === 'days')    d.setDate(d.getDate() - amount);
  return d;
}

// Seed notifications, newest first.
const NOTIFICATIONS_INITIAL = [
  {
    id: 'n-1',
    type: 'reminder',
    title: "Time for Mia's afternoon check-in",
    snippet: "Mia is at 4h 12m today — a quick re-fit could keep her on track.",
    body: "Mia is at 4h 12m today. A quick re-fit could keep her on track.",
    timestamp: makeAgo(2, 'hours'),
    read: false,
  },
  {
    id: 'n-2',
    type: 'achievement',
    title: "You hit Mia's daily goal!",
    snippet: "Mia spent 10h 32m with her device today. Great work.",
    body: "Mia spent 10h 32m with her device today. Great work — that's every minute of sound her brain has been soaking up.",
    timestamp: makeAgo(28, 'hours'),
    read: true,
  },
  {
    id: 'n-3',
    type: 'reminder',
    title: "Time for Mia's morning check-in",
    snippet: "Hope your morning is going well — check that Mia's device is on and ready for the day.",
    body: "Hope your morning is going well — check that Mia's device is on and ready for the day.",
    timestamp: makeAgo(36, 'hours'),
    read: true,
  },
  {
    id: 'n-4',
    type: 'milestone',
    title: '3-day streak!',
    snippet: 'Mia has hit her daily goal three days in a row.',
    body: "Mia has hit her daily goal three days in a row. Streaks build habit — open History for the full picture.",
    timestamp: makeAgo(2, 'days'),
    read: true,
    action: { label: 'Open History', target: 'history' },
  },
  {
    id: 'n-5',
    type: 'summary',
    title: 'Your week with Mia',
    snippet: 'Average wear time this week was 8h 41m, up 12% from last week.',
    body: 'Average wear time this week was 8h 41m, up 12% from last week. Open History for the full picture.',
    timestamp: makeAgo(4, 'days'),
    read: true,
    action: { label: 'View summary', target: 'history' },
  },
];

const notificationsStore = {
  list: NOTIFICATIONS_INITIAL.map(n => ({ ...n })),
  activeId: null,
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach(fn => fn()); },
  markAsRead(id) {
    let changed = false;
    this.list = this.list.map(n => {
      if (n.id === id && !n.read) { changed = true; return { ...n, read: true }; }
      return n;
    });
    if (changed) this.emit();
  },
  open(id) {
    this.activeId = id;
    this.markAsRead(id); // implicit emit
    if (this.list.every(n => n.id !== id || n.read)) this.emit(); // ensure emit even if already read
  },
  clearActive() {
    if (this.activeId == null) return;
    this.activeId = null;
    this.emit();
  },
};

function useNotifications() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => notificationsStore.subscribe(force), []);
  const list = notificationsStore.list;
  const activeId = notificationsStore.activeId;
  return {
    list,
    activeId,
    activeNotification: list.find(n => n.id === activeId) || null,
    open: (id) => notificationsStore.open(id),
    clearActive: () => notificationsStore.clearActive(),
    markAsRead: (id) => notificationsStore.markAsRead(id),
    unreadCount: list.reduce((acc, n) => acc + (n.read ? 0 : 1), 0),
  };
}

// — Time formatters —

function relativeTime(date) {
  const now = Date.now();
  const diff = Math.max(0, (now - date.getTime()) / 1000); // seconds
  if (diff < 60)     return 'Just now';
  if (diff < 3600)   return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400)  return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 172800) return 'Yesterday';
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' }).format(date);
}

function absoluteTime(date) {
  const dayMonth = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', month: 'long', day: 'numeric',
  }).format(date);
  const hm = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).format(date);
  return `${dayMonth} at ${hm}`;
}

Object.assign(window, {
  notificationsStore, useNotifications,
  relativeTime, absoluteTime,
});
