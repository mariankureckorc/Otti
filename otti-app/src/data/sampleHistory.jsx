// Otti — sample history data
// Single source of truth for the History screen. Both the charts AND the
// headline metrics in screens-daily.jsx must read from this module — no
// numbers should be hard-coded inside the screen components.

// Pediatric guideline for a 3-year-old. Used as the daily wear target
// across Day, Week and Month views.
const DAILY_TARGET_MIN = 780; // 13h

// — Day tab ————————————————————————————————————————————————
// Today's sessions. Times are 24h "HH:MM". `label` is shown in the
// session list under the timeline chart.
const DAY_SESSIONS = [
  { start: '08:30', end: '12:15', label: 'Nursery & morning' },
  { start: '13:00', end: '16:30', label: 'Park & lunch' },
  { start: '17:00', end: '19:00', label: 'Home & wind-down' },
];

// Visible window for the horizontal timeline.
const DAY_WINDOW = { start: '06:00', end: '22:00' };

// — Week tab ————————————————————————————————————————————————
// Minutes per day, oldest → newest. The last value is "today".
const WEEK_MINUTES = [720, 540, 690, 420, 780, 660, 495];

// Reported change vs prior week, shown as a pill next to the headline.
// Sample value — no prior-week dataset is modeled here.
const WEEK_VS_LAST_PCT = 12;

// — Month tab ————————————————————————————————————————————————
// 30 days, oldest → newest. The last 7 entries match WEEK_MINUTES so
// the two views stay consistent. The earlier 23 days were designed
// to produce a realistic spread: a solid first week, one missed day,
// a patchy stretch, and a strong run before this week's dip.
const MONTH_MINUTES = [
  // Days 1–7 — solid start of the month
  800, 820, 790, 800, 810, 830, 800,
  // Days 8–14 — one missed day, then catches up
  0, 820, 810, 790, 850, 820, 810,
  // Days 15–21 — mixed week, two slips
  800, 720, 820, 790, 810, 540, 800,
  // Days 22–23 — strong run before current week
  820, 820,
  // Days 24–30 — current week (mirrors WEEK_MINUTES)
  ...WEEK_MINUTES,
];

// — Helpers ————————————————————————————————————————————————

// "HH:MM" → minutes since 00:00
function hhmmToMin(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

// minutes → "Xh Ym"
function fmtHm(mins) {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
}

const WEEKDAY_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Last 7 weekday short names ending today (today is last).
function weekLabelsEndingToday(today = new Date()) {
  const todayIdx = (today.getDay() + 6) % 7; // Mon=0 … Sun=6
  const out = [];
  for (let i = 6; i >= 0; i--) {
    out.push(WEEKDAY_SHORT[(todayIdx - i + 7) % 7]);
  }
  return out;
}

// Date label for N days ago, e.g. "17 May".
function dateLabelDaysAgo(daysAgo, today = new Date()) {
  const d = new Date(today);
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

Object.assign(window, {
  DAILY_TARGET_MIN,
  DAY_SESSIONS, DAY_WINDOW,
  WEEK_MINUTES, WEEK_VS_LAST_PCT,
  MONTH_MINUTES,
  hhmmToMin, fmtHm, weekLabelsEndingToday, dateLabelDaysAgo,
});
