// Otti — clickable prototype.
// Single phone frame, state-driven navigation between 23 screens.
// Community is a single handoff page; no in-app forum or post composer.

const SCREEN_REGISTRY = [
  { id: 'splash',           label: '01 · Splash',                 group: 'Auth & onboarding',  C: ScreenSplash },
  { id: 'signIn',           label: '02 · Sign in',                group: 'Auth & onboarding',  C: ScreenSignIn },
  { id: 'blocked',          label: '03 · Blocked login',          group: 'Auth & onboarding',  C: ScreenBlocked },
  { id: 'signupStep1',      label: '04 · Sign up — Step 1',       group: 'Auth & onboarding',  C: ScreenSignupStep1 },
  { id: 'signupStep2',      label: '05 · Sign up — Step 2',       group: 'Auth & onboarding',  C: ScreenSignupStep2 },
  { id: 'verifyWaiting',    label: '06 · Verifying account',      group: 'Auth & onboarding',  C: ScreenVerifyWaiting },
  { id: 'childProfile',     label: '07 · Child profile (legacy)', group: 'Auth & onboarding',  C: ScreenChildProfile },
  { id: 'invite',           label: '08 · Invite second parent',   group: 'Auth & onboarding',  C: ScreenInvitePartner },

  { id: 'home',             label: '06 · Home / Today',           group: 'Daily use',          C: ScreenHome },
  { id: 'logSession',       label: '07 · Log session',            group: 'Daily use',          C: ScreenLogSession },
  { id: 'history',          label: '08 · History',                group: 'Daily use',          C: ScreenHistory },
  { id: 'editEntry',        label: '09 · Edit entry',             group: 'Daily use',          C: ScreenEditEntry },

  { id: 'notifPermission',  label: '10 · Notification permission', group: 'Reminders',         C: ScreenNotifPermission },
  { id: 'reminderSettings', label: '11 · Reminder settings',      group: 'Reminders',          C: ScreenReminderSettings },

  { id: 'forum',            label: '12 · Community (Hearing First)', group: 'Community',       C: ScreenForum },

  { id: 'articleList',      label: '13 · Article list',           group: 'Articles',           C: ScreenArticleList },
  { id: 'articleDetail',    label: '14 · Article detail',         group: 'Articles',           C: ScreenArticleDetail },

  { id: 'profile',            label: '15 · Profile & settings',     group: 'Account',            C: ScreenProfile },
  { id: 'notifications',      label: '16 · Notifications (feed)',   group: 'Account',            C: ScreenNotifications },
  { id: 'notificationDetail', label: '17 · Notification detail',    group: 'Account',            C: ScreenNotificationDetail },
  { id: 'privacy',            label: '18 · Privacy & consent',      group: 'Account',            C: ScreenPrivacy },
  { id: 'manageParent',       label: '19 · Manage co-parent',       group: 'Account',            C: ScreenManageParent },
  { id: 'about',              label: '20 · About / version',        group: 'Account',            C: ScreenAbout },
  { id: 'signOut',            label: '21 · Sign out',               group: 'Account',            C: ScreenSignOut },

  { id: 'emptyHistory',       label: '22 · Empty history',          group: 'Mascot moments',     C: ScreenEmptyHistory },
  { id: 'targetMet',          label: '23 · Daily target met',       group: 'Mascot moments',     C: ScreenTargetMet },
  { id: 'streak',             label: '24 · First-week streak',      group: 'Mascot moments',     C: ScreenStreak },
];

const SCREEN_MAP = Object.fromEntries(SCREEN_REGISTRY.map(s => [s.id, s]));
const GROUPS = Array.from(new Set(SCREEN_REGISTRY.map(s => s.group)));

function App() {
  const [screen, setScreen] = React.useState('splash');
  const [history, setHistory] = React.useState(['splash']);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const nav = (target) => {
    if (!SCREEN_MAP[target]) return;
    setScreen(target);
    setHistory(h => [...h, target]);
    setDrawerOpen(false);
  };

  const goBack = () => {
    setHistory(h => {
      if (h.length < 2) return h;
      const next = h.slice(0, -1);
      setScreen(next[next.length - 1]);
      return next;
    });
  };

  const reset = () => {
    setScreen('splash');
    setHistory(['splash']);
    setDrawerOpen(false);
  };

  const current = SCREEN_MAP[screen];
  const ScreenComponent = current.C;

  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px', boxSizing: 'border-box',
      background: `radial-gradient(120% 80% at 50% 0%, #F6F2E8 0%, #ECE9E2 60%, #DDD9D0 100%)`,
    }}>
      <TopBar
        screen={current}
        onMenu={() => setDrawerOpen(true)}
        onBack={history.length > 1 ? goBack : null}
        onReset={reset}
      />

      <div style={{ position: 'relative' }}>
        <ScreenComponent nav={nav} />
      </div>

      <ScreenDrawer
        open={drawerOpen}
        current={screen}
        onClose={() => setDrawerOpen(false)}
        onPick={nav}
      />

      <BottomCredit />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Top toolbar (outside the phone) — menu + breadcrumb + reset
// ─────────────────────────────────────────────────────────────
function TopBar({ screen, onMenu, onBack, onReset }) {
  return (
    <div style={{
      position: 'fixed', top: 16, left: 16, right: 16, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      pointerEvents: 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, pointerEvents: 'auto' }}>
        <button onClick={onMenu} style={{
          height: 44, padding: '0 16px', borderRadius: 22,
          background: '#fff', border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 8, fontFamily: SANS, fontWeight: 700, fontSize: 13,
          color: OTTI.navyDeep, boxShadow: '0 4px 12px rgba(12,33,80,0.06)',
        }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M1 1h14M1 6h14M1 11h14" stroke={OTTI.navyDeep} strokeWidth="2" strokeLinecap="round"/>
          </svg>
          All screens
        </button>
        {onBack && (
          <button onClick={onBack} style={{
            height: 44, width: 44, borderRadius: 22,
            background: '#fff', border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(12,33,80,0.06)',
          }}>{Icon.back(OTTI.navyDeep, 18)}</button>
        )}
      </div>

      <div style={{
        pointerEvents: 'auto',
        display: 'flex', alignItems: 'center', gap: 8,
        height: 44, padding: '0 16px', borderRadius: 22,
        background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
        border: `1px solid ${OTTI.lineSolid}`,
        fontFamily: SANS, fontSize: 12, color: OTTI.ink2,
      }}>
        <span style={{ color: OTTI.ink3, fontWeight: 600 }}>{screen.group}</span>
        <span style={{ color: OTTI.ink4 }}>·</span>
        <span style={{ fontWeight: 700, color: OTTI.navyDeep }}>{screen.label}</span>
      </div>

      <div style={{ pointerEvents: 'auto' }}>
        <button onClick={onReset} style={{
          height: 44, padding: '0 16px', borderRadius: 22,
          background: OTTI.navy, color: '#fff', border: 'none', cursor: 'pointer',
          fontFamily: SANS, fontWeight: 700, fontSize: 13,
          boxShadow: '0 4px 12px rgba(22,58,120,0.18)',
        }}>
          Restart
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Screen drawer — left-side panel with all 25 screens
// ─────────────────────────────────────────────────────────────
function ScreenDrawer({ open, current, onClose, onPick }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(12,33,80,0.35)',
          opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.18s ease', zIndex: 200,
          backdropFilter: 'blur(2px)',
        }}
      />
      <div style={{
        position: 'fixed', top: 0, bottom: 0, left: 0,
        width: 340, maxWidth: '92vw',
        background: '#fff', zIndex: 201,
        boxShadow: '0 0 40px rgba(0,0,0,0.18)',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.22s ease',
        display: 'flex', flexDirection: 'column',
        fontFamily: SANS,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 22px 14px', borderBottom: `1px solid ${OTTI.lineSolid}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Wordmark height={26} />
            <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>
              All screens
            </div>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 16, border: 'none', cursor: 'pointer',
            background: OTTI.navyTint, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.close(OTTI.navy, 16)}</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '6px 12px 24px' }}>
          {GROUPS.map(group => (
            <div key={group} style={{ marginTop: 14 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: OTTI.ink3,
                letterSpacing: 0.6, textTransform: 'uppercase',
                padding: '4px 10px 6px',
              }}>{group}</div>
              {SCREEN_REGISTRY.filter(s => s.group === group).map(s => {
                const active = s.id === current;
                return (
                  <button key={s.id} onClick={() => onPick(s.id)} style={{
                    width: '100%', textAlign: 'left',
                    padding: '10px 12px', borderRadius: 10, marginBottom: 2,
                    border: 'none', cursor: 'pointer',
                    background: active ? OTTI.navyTint : 'transparent',
                    color: active ? OTTI.navyDeep : OTTI.ink,
                    fontFamily: SANS, fontSize: 14, fontWeight: active ? 700 : 500,
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    {active && <div style={{ width: 6, height: 6, borderRadius: 3, background: OTTI.green }} />}
                    {!active && <div style={{ width: 6 }} />}
                    {s.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{
          padding: '14px 22px', borderTop: `1px solid ${OTTI.lineSolid}`,
          fontSize: 12, color: OTTI.ink3, lineHeight: 1.5,
        }}>
          <strong style={{ color: OTTI.ink2 }}>Otti</strong> — a gentle companion for cochlear implant families. Clickable v1 prototype for SJID review.
        </div>
      </div>
    </>
  );
}

function BottomCredit() {
  return (
    <div style={{
      position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)',
      fontFamily: SANS, fontSize: 11, color: OTTI.ink3, fontWeight: 500,
      background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(8px)',
      padding: '6px 14px', borderRadius: 12, border: `1px solid ${OTTI.lineSolid}`,
      zIndex: 90,
    }}>
      Tap inside the phone to navigate · Use <strong style={{ color: OTTI.navyDeep }}>All screens</strong> to jump anywhere
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
