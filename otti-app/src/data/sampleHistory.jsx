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

// ─────────────────────────────────────────────────────────────
// Long-tail dataset for Custom range view.
// Generates 150 days of pseudo-deterministic variety and prepends
// to MONTH_MINUTES so ALL_MINUTES is 180 days total, oldest -> newest.
// The last 30 still match MONTH_MINUTES; the last 7 still match WEEK_MINUTES.
// ─────────────────────────────────────────────────────────────
function generateHistoryPrefix(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const seed = (i * 17 + 41) % 100;
    let val;
    if (seed < 5)        val = 0;                                      // missed day
    else if (seed < 22)  val = 400 + ((seed * 13) % 250);              // patchy
    else if (seed < 58)  val = 600 + ((seed * 11) % 200);              // medium
    else if (seed < 92)  val = 780 + ((seed * 7)  % 120);              // good (at/above goal)
    else                  val = 900 + ((seed * 3)  % 80);              // exceptional
    out.push(val);
  }
  return out;
}

const HISTORY_PREFIX_DAYS = 150;
const ALL_MINUTES = [...generateHistoryPrefix(HISTORY_PREFIX_DAYS), ...MONTH_MINUTES];
const TOTAL_HISTORY_DAYS = ALL_MINUTES.length;

// ─────────────────────────────────────────────────────────────
// Date helpers — used by the Custom range view and the export sheet.
// ─────────────────────────────────────────────────────────────
function isoDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseIsoDate(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function daysAgo(date, today = new Date()) {
  return Math.round((startOfDay(today).getTime() - startOfDay(date).getTime()) / 86400000);
}

// Returns array of { date, minutes } oldest -> newest for the given range.
// Days outside the available dataset are clipped to 0 minutes.
function getDailyForRange(startIso, endIso) {
  const today = startOfDay(new Date());
  const start = startOfDay(parseIsoDate(startIso));
  const end   = startOfDay(parseIsoDate(endIso));
  const out = [];
  const cur = new Date(start);
  while (cur <= end) {
    const ago = Math.round((today.getTime() - startOfDay(cur).getTime()) / 86400000);
    const idx = ALL_MINUTES.length - 1 - ago;
    const minutes = (idx >= 0 && idx < ALL_MINUTES.length) ? ALL_MINUTES[idx] : 0;
    out.push({ date: new Date(cur), minutes });
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}

function getDailyForLastN(n) {
  const today = startOfDay(new Date());
  const start = new Date(today);
  start.setDate(start.getDate() - (n - 1));
  return getDailyForRange(isoDate(start), isoDate(today));
}

function getAllDaily() {
  return getDailyForLastN(TOTAL_HISTORY_DAYS);
}

// Group daily entries into weekly buckets (oldest -> newest).
// Each bucket exposes avgMinutes (per-day average within the week so the
// daily target line stays comparable) plus totals.
function groupByWeek(daily) {
  const weeks = [];
  for (let i = 0; i < daily.length; i += 7) {
    const chunk = daily.slice(i, Math.min(i + 7, daily.length));
    if (chunk.length === 0) continue;
    const total = chunk.reduce((s, x) => s + x.minutes, 0);
    weeks.push({
      start: chunk[0].date,
      end: chunk[chunk.length - 1].date,
      avgMinutes: Math.round(total / chunk.length),
      totalMinutes: total,
      daysAtGoal: chunk.filter(x => x.minutes >= DAILY_TARGET_MIN).length,
      count: chunk.length,
    });
  }
  return weeks;
}

function formatRange(fromIso, toIso) {
  if (!fromIso || !toIso) return '';
  const from = parseIsoDate(fromIso);
  const to   = parseIsoDate(toIso);
  const sameYear  = from.getFullYear() === to.getFullYear();
  const fmtShort  = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' });
  const fmtFull   = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  if (sameYear) return `${fmtShort.format(from)} – ${fmtFull.format(to)}`;
  return `${fmtFull.format(from)} – ${fmtFull.format(to)}`;
}

// ─────────────────────────────────────────────────────────────
// Custom-range store — persists the last picked range within a session.
// ─────────────────────────────────────────────────────────────
const customRangeStore = {
  range: null,
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  emit() { this.listeners.forEach(fn => fn()); },
  set(range) { this.range = range; this.emit(); },
  clear() { this.range = null; this.emit(); },
};

function useCustomRange() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => customRangeStore.subscribe(force), []);
  return {
    range: customRangeStore.range,
    setRange: (r) => customRangeStore.set(r),
    clearRange: () => customRangeStore.clear(),
  };
}

Object.assign(window, {
  DAILY_TARGET_MIN,
  DAY_SESSIONS, DAY_WINDOW,
  WEEK_MINUTES, WEEK_VS_LAST_PCT,
  MONTH_MINUTES,
  ALL_MINUTES, TOTAL_HISTORY_DAYS,
  hhmmToMin, fmtHm, weekLabelsEndingToday, dateLabelDaysAgo,
  isoDate, parseIsoDate, daysAgo, startOfDay,
  getDailyForRange, getDailyForLastN, getAllDaily, groupByWeek,
  formatRange,
  customRangeStore, useCustomRange,
});
