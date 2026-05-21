/* Account & Settings — clickable */

function SetRow({ icon, title, detail, value, isLast, dotBg = OTTI.navyTint, danger, onClick, readOnly = false }) {
  // readOnly rows are static — no chevron, no tap handler, no pointer cursor.
  // The underlying element stays a plain <div> with no role/aria-pressed,
  // so assistive tech announces it as a static text row rather than a button.
  const interactive = !readOnly && typeof onClick === 'function';
  return (
    <div
      onClick={interactive ? onClick : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 16px',
        borderBottom: isLast ? 'none' : `1px solid ${OTTI.lineSolid}`,
        cursor: interactive ? 'pointer' : 'default',
      }}
    >
      <div style={{ width: 34, height: 34, borderRadius: 10, background: dotBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: danger ? OTTI.coral : OTTI.ink }}>{title}</div>
        {detail && <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>{detail}</div>}
      </div>
      {value && <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink3 }}>{value}</div>}
      {!danger && !readOnly && Icon.chev(OTTI.ink4)}
    </div>
  );
}

function SetSection({ header, children }) {
  return (
    <div style={{ marginTop: 18 }}>
      {header && <div style={{ fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 8px 8px' }}>{header}</div>}
      <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}`, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

const settingsIcons = {
  child: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke={OTTI.navy} strokeWidth="2"/><path d="M5 20c1-3 3.5-5 7-5s6 2 7 5" stroke={OTTI.navy} strokeWidth="2" strokeLinecap="round"/></svg>,
  goal:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={OTTI.greenDark} strokeWidth="2"/><circle cx="12" cy="12" r="3" fill={OTTI.greenDark}/></svg>,
  bell:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 17h12l-1.5-2V11a4.5 4.5 0 00-9 0v4L6 17zM10 20a2 2 0 004 0" stroke="#A67B14" strokeWidth="2" strokeLinejoin="round"/></svg>,
  lock:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke={OTTI.navy} strokeWidth="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke={OTTI.navy} strokeWidth="2"/></svg>,
  parent:<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="9" r="3" stroke={OTTI.coral} strokeWidth="2"/><circle cx="16" cy="9" r="3" stroke={OTTI.coral} strokeWidth="2"/><path d="M3 19c0-2.5 2-4 5-4M21 19c0-2.5-2-4-5-4" stroke={OTTI.coral} strokeWidth="2" strokeLinecap="round"/></svg>,
  info:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={OTTI.navy} strokeWidth="2"/><path d="M12 11v6M12 8.5v.5" stroke={OTTI.navy} strokeWidth="2" strokeLinecap="round"/></svg>,
  signout: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3M10 8l-4 4 4 4M6 12h11" stroke={OTTI.coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  reminder: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 17h12l-1.5-2V11a4.5 4.5 0 00-9 0v4L6 17zM10 20a2 2 0 004 0" stroke={OTTI.navy} strokeWidth="2" strokeLinejoin="round"/></svg>,
};

// 17 — Profile / settings hub
function ScreenProfile({ nav }) {
  const { children, active, setActive, addChild } = useChildren();
  const [addOpen, setAddOpen] = React.useState(false);

  return (
    <Phone bg={OTTI.cream}>
      {/* Internal scroll wrapper — Profile content exceeds the 844px phone
          height, so it needs its own scroll context. Sibling AddChildSheet
          stays positioned against Phone outer, so it remains pinned. */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'auto' }}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>
            You & {active.name}
          </div>
          <button onClick={() => nav('home')} style={{
            width: 40, height: 40, borderRadius: 20, background: '#fff', border: `1px solid ${OTTI.lineSolid}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.more(OTTI.navy)}</button>
        </div>

        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '16px 14px', border: `1px solid ${OTTI.lineSolid}` }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: OTTI.sunSoft, color: OTTI.navyDeep, fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>S</div>
            <div style={{ marginTop: 12, fontSize: 15, fontWeight: 700, color: OTTI.ink }}>Sam Harper</div>
            <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 2 }}>sam.harper@gmail.com</div>
            <div style={{ marginTop: 10, padding: '4px 10px', background: OTTI.navyTint, borderRadius: 8, fontSize: 11, fontWeight: 700, color: OTTI.navy, display: 'inline-block' }}>Primary parent</div>
          </div>
          <div onClick={() => nav('childProfile')} style={{ flex: 1, background: OTTI.navy, borderRadius: 20, padding: '16px 14px', color: '#fff', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ position: 'absolute', right: -16, bottom: -10, opacity: 0.55 }}><Mascot size={88} /></div>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: 'rgba(255,255,255,0.18)', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{active.name[0]}</div>
            <div style={{ marginTop: 12, fontSize: 15, fontWeight: 700, position: 'relative' }}>{active.name}, {active.age}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2, position: 'relative' }}>{implantSideLabel(active.implantSide)} · since {active.since}</div>
            <div style={{ marginTop: 10, padding: '4px 10px', background: OTTI.green, borderRadius: 8, fontSize: 11, fontWeight: 700, color: OTTI.navyDeep, display: 'inline-block', position: 'relative' }}>{fmtHm(active.goalMinutes)} daily goal</div>
          </div>
        </div>

        {/* Child switcher — horizontal scroll tile row + Add child tile */}
        <div style={{
          marginTop: 14, fontSize: 12, fontWeight: 700, color: OTTI.ink3,
          letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 4px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span>Children · {children.length}</span>
          {children.length > 1 && (
            <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 500, color: OTTI.ink3 }}>
              Tap to switch
            </span>
          )}
        </div>
        <div style={{
          marginTop: 8, display: 'flex', gap: 8, overflowX: 'auto',
          paddingBottom: 4, marginLeft: -20, marginRight: -20, padding: '0 20px 4px',
          scrollbarWidth: 'none',
        }}>
          {children.map(c => {
            const isActive = c.id === active.id;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                aria-pressed={isActive}
                style={{
                  flexShrink: 0, width: 112, padding: '12px 12px', borderRadius: 16,
                  background: isActive ? OTTI.navy : '#fff',
                  color: isActive ? '#fff' : OTTI.ink,
                  border: isActive ? `1.5px solid ${OTTI.navy}` : `1px solid ${OTTI.lineSolid}`,
                  textAlign: 'left', fontFamily: SANS, cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 16,
                    background: isActive ? 'rgba(255,255,255,0.18)' : OTTI.sunSoft,
                    color: isActive ? '#fff' : OTTI.navyDeep,
                    fontWeight: 700, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{c.name[0]}</div>
                  {isActive && (
                    <div style={{
                      width: 8, height: 8, borderRadius: 4, background: OTTI.green,
                    }} />
                  )}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{c.name}</div>
                <div style={{ fontSize: 11, opacity: isActive ? 0.8 : 1, color: isActive ? 'rgba(255,255,255,0.85)' : OTTI.ink3 }}>
                  {c.age}yo · {implantSideLabel(c.implantSide)}
                </div>
              </button>
            );
          })}
          <button
            onClick={() => setAddOpen(true)}
            style={{
              flexShrink: 0, width: 112, padding: 12, borderRadius: 16,
              background: 'transparent', border: `1.5px dashed ${OTTI.ink4}`,
              color: OTTI.navy, fontFamily: SANS, cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 4, minHeight: 96,
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 16, background: OTTI.navyTint,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{Icon.plus(OTTI.navy, 18)}</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Add child</div>
          </button>
        </div>

        <SetSection header={`${active.name}'s profile`}>
          <SetRow icon={settingsIcons.child} title={`Edit ${active.name}'s details`} detail="Name, age, implant side" onClick={() => nav('childProfile')} />
          {/* Daily wear goal is derived from the child's age — read-only. */}
          <SetRow icon={settingsIcons.goal}  title="Daily wear goal"   value={fmtHm(active.goalMinutes)} isLast readOnly />
        </SetSection>

        <SetSection header="App">
          <SetRow icon={settingsIcons.reminder} title="Reminders"         detail="Reminder times, achievements, quiet hours" onClick={() => nav('reminderSettings')} />
          <SetRow icon={settingsIcons.parent}   title="Manage co-parent"  detail="Alex Harper · pending invite"              onClick={() => nav('manageParent')} />
          <SetRow icon={settingsIcons.lock}     title="Privacy & consent" detail="Data sharing with SJID"                    onClick={() => nav('privacy')} />
          <SetRow icon={settingsIcons.info}     title="About Otti"        value="v1.4.0" isLast                              onClick={() => nav('about')} />
        </SetSection>

        <div style={{ marginTop: 18, background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}` }}>
          <SetRow icon={settingsIcons.signout} title="Sign out" isLast danger onClick={() => nav('signOut')} />
        </div>
      </div>
      <div style={{ height: 80 }} />
      </div>{/* /scroll wrapper */}

      {addOpen && (
        <AddChildSheet
          onClose={() => setAddOpen(false)}
          onSubmit={(data) => { addChild(data); setAddOpen(false); }}
        />
      )}
    </Phone>
  );
}

// Add-child sheet — overlay within the Profile screen.
function AddChildSheet({ onClose, onSubmit }) {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(3);
  const [side, setSide] = React.useState('both');

  const canSubmit = name.trim().length > 0 && age >= 0 && age <= 18;

  return (
    <>
      {/* Scrim */}
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0, background: 'rgba(12,33,80,0.45)',
        backdropFilter: 'blur(2px)', zIndex: 30, cursor: 'pointer',
      }} />
      {/* Sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#fff', borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '20px 24px 32px', zIndex: 40, fontFamily: SANS,
        boxShadow: '0 -20px 40px rgba(0,0,0,0.1)',
      }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: OTTI.lineSolid, margin: '0 auto 16px' }} />
        <div style={{ fontSize: 22, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.3 }}>Add a child</div>
        <div style={{ marginTop: 4, fontSize: 13, color: OTTI.ink2 }}>
          You'll log wear time separately for each child.
        </div>

        {/* Name */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>Name</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Theo"
            autoFocus
            style={{
              width: '100%', height: 50, borderRadius: 14,
              background: '#fff', border: `1.5px solid ${name ? OTTI.navy : OTTI.lineSolid}`,
              padding: '0 16px', fontSize: 16, fontWeight: 500, color: OTTI.ink,
              fontFamily: SANS, outline: 'none', boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Age — stepper */}
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>Age</div>
          <div style={{
            height: 50, borderRadius: 14, background: '#fff',
            border: `1px solid ${OTTI.lineSolid}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 6px',
          }}>
            <button
              onClick={() => setAge(a => Math.max(0, a - 1))}
              style={{
                width: 38, height: 38, borderRadius: 10, border: 'none', cursor: 'pointer',
                background: OTTI.navyTint, color: OTTI.navy, fontSize: 22, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >−</button>
            <div style={{ fontSize: 17, fontWeight: 700, color: OTTI.ink, fontVariantNumeric: 'tabular-nums' }}>
              {age} {age === 1 ? 'year' : 'years'}
            </div>
            <button
              onClick={() => setAge(a => Math.min(18, a + 1))}
              style={{
                width: 38, height: 38, borderRadius: 10, border: 'none', cursor: 'pointer',
                background: OTTI.navyTint, color: OTTI.navy, fontSize: 22, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >+</button>
          </div>
        </div>

        {/* Implant side */}
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>Implant side</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[{ id: 'left', label: 'Left' }, { id: 'right', label: 'Right' }, { id: 'both', label: 'Both' }].map(opt => {
              const sel = opt.id === side;
              return (
                <button key={opt.id} onClick={() => setSide(opt.id)} style={{
                  flex: 1, height: 50, borderRadius: 14, cursor: 'pointer',
                  background: sel ? OTTI.navy : '#fff',
                  color: sel ? '#fff' : OTTI.ink,
                  border: sel ? 'none' : `1px solid ${OTTI.lineSolid}`,
                  fontWeight: 700, fontSize: 14, fontFamily: SANS,
                }}>{opt.label}</button>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn
            onClick={() => canSubmit && onSubmit({ name: name.trim(), age, implantSide: side })}
            style={{ opacity: canSubmit ? 1 : 0.45, cursor: canSubmit ? 'pointer' : 'not-allowed' }}
          >
            Add child
          </Btn>
          <Btn kind="ghost" onClick={onClose}>Cancel</Btn>
        </div>
      </div>
    </>
  );
}

// 18 — Notifications (feed)
// Recent notifications, newest first. Tap a card to open the detail view.
const NOTIF_TYPE_META = {
  reminder:    { bg: OTTI.navyTint,  fg: OTTI.navy,         icon: 'bell',     label: 'Reminder' },
  achievement: { bg: OTTI.greenSoft, fg: OTTI.greenDark,    icon: 'trophy',   label: 'Achievement' },
  milestone:   { bg: OTTI.sunSoft,   fg: '#A67B14',         icon: 'medal',    label: 'Milestone' },
  summary:     { bg: OTTI.lavender,  fg: OTTI.lavenderDark, icon: 'calendar', label: 'Weekly summary' },
};

function ScreenNotifications({ nav }) {
  const { list, open } = useNotifications();

  function handleOpen(id) {
    open(id);
    nav('notificationDetail');
  }

  return (
    <Phone bg={OTTI.cream}>
      <Header title="Notifications" onBack={() => nav('home')} />
      <div style={{ position: 'absolute', top: 96, bottom: 0, left: 0, right: 0, overflow: 'auto' }}>
        <div style={{ padding: '0 20px 40px' }}>
          {list.length === 0 ? (
            <div style={{ marginTop: 40, textAlign: 'center', color: OTTI.ink3, fontSize: 14 }}>
              No notifications yet.
            </div>
          ) : (
            list.map(n => <NotificationCard key={n.id} n={n} onClick={() => handleOpen(n.id)} />)
          )}
        </div>
      </div>
    </Phone>
  );
}

function NotificationCard({ n, onClick }) {
  const meta = NOTIF_TYPE_META[n.type] || NOTIF_TYPE_META.reminder;
  const iconFn = Icon[meta.icon] || Icon.bell;
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 12,
        padding: '14px 14px', background: '#fff',
        border: `1px solid ${n.read ? OTTI.lineSolid : OTTI.navyTint}`,
        borderRadius: 16, marginBottom: 10, cursor: 'pointer',
      }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: 21, background: meta.bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {iconFn(meta.fg, 20)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 14, fontWeight: n.read ? 600 : 800,
          color: OTTI.ink, lineHeight: 1.3,
        }}>{n.title}</div>
        <div style={{
          marginTop: 4, fontSize: 13, color: OTTI.ink3, lineHeight: 1.4,
          overflow: 'hidden', textOverflow: 'ellipsis',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        }}>{n.snippet}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: OTTI.ink3, fontWeight: 500, whiteSpace: 'nowrap' }}>
          {relativeTime(n.timestamp)}
        </div>
        {!n.read && (
          <div aria-label="Unread" style={{ width: 8, height: 8, borderRadius: 4, background: OTTI.coral }} />
        )}
      </div>
    </div>
  );
}

function ScreenNotificationDetail({ nav }) {
  const { activeNotification: n, clearActive } = useNotifications();

  // Fallback if there's no active notification (deep link, refresh, etc.) —
  // route the user back to the list.
  React.useEffect(() => {
    if (!n) nav('notifications');
  }, [n, nav]);

  if (!n) return null;

  const meta = NOTIF_TYPE_META[n.type] || NOTIF_TYPE_META.reminder;
  const iconFn = Icon[meta.icon] || Icon.bell;

  function handleBack() {
    clearActive();
    nav('notifications');
  }

  function handleAction() {
    if (n.action && n.action.target) {
      clearActive();
      nav(n.action.target);
    }
  }

  return (
    <Phone bg={OTTI.cream}>
      <Header title="" onBack={handleBack} />
      <div style={{ position: 'absolute', top: 96, bottom: 0, left: 0, right: 0, overflow: 'auto' }}>
        <div style={{ padding: '0 24px 40px' }}>
          {/* Large icon */}
          <div style={{
            width: 72, height: 72, borderRadius: 36, background: meta.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 4,
          }}>
            {iconFn(meta.fg, 32)}
          </div>

          {/* Type label */}
          <div style={{
            marginTop: 16, fontSize: 11, fontWeight: 700,
            color: meta.fg, letterSpacing: 0.6, textTransform: 'uppercase',
          }}>{meta.label}</div>

          {/* Title */}
          <div style={{
            marginTop: 4, fontSize: 24, fontWeight: 800, color: OTTI.navyDeep,
            letterSpacing: -0.3, lineHeight: 1.25,
          }}>{n.title}</div>

          {/* Absolute timestamp */}
          <div style={{ marginTop: 6, fontSize: 12, color: OTTI.ink3, fontWeight: 500 }}>
            {absoluteTime(n.timestamp)}
          </div>

          {/* Body */}
          <div style={{ marginTop: 18, fontSize: 15, color: OTTI.ink, lineHeight: 1.6 }}>
            {n.body}
          </div>

          {/* Optional action */}
          {n.action && (
            <div style={{ marginTop: 28 }}>
              <Btn onClick={handleAction}>{n.action.label}</Btn>
            </div>
          )}
        </div>
      </div>
    </Phone>
  );
}


// 19 — Privacy & consent
function ScreenPrivacy({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Privacy & consent" onBack={() => nav('profile')} />
      <div style={{ padding: '0 20px' }}>
        <div style={{ background: OTTI.navy, borderRadius: 22, padding: '18px 18px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: -20, top: -20, opacity: 0.45 }}><Mascot size={120} /></div>
          <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.green, letterSpacing: 0.6, textTransform: 'uppercase' }}>Your control</div>
          <div style={{ marginTop: 6, fontSize: 18, fontWeight: 800, letterSpacing: -0.3, lineHeight: 1.25, maxWidth: 240 }}>
            Mia's data stays Mia's.
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color: 'rgba(255,255,255,0.8)', maxWidth: 230, lineHeight: 1.4 }}>
            You decide what's shared with her SJID team — and you can change your mind any time.
          </div>
        </div>

        <SetSection header="Share with SJID">
          {[
            { l: 'Daily wear-time totals', d: 'Helps your team adapt therapy', on: true },
            { l: 'Session-level data',     d: 'Tags, times of day, gaps',     on: true },
            { l: 'Forum posts you write',  d: 'Already visible to SJID',      on: true, locked: true },
            { l: 'Anonymous research',     d: 'Pooled, no names attached',    on: false },
          ].map((r, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none', gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{r.l}</div>
                <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>{r.d}</div>
              </div>
              {r.locked ? (
                <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, background: OTTI.navyTint, padding: '4px 8px', borderRadius: 6 }}>Required</div>
              ) : <Toggle on={r.on} />}
            </div>
          ))}
        </SetSection>

        <SetSection header="Your data">
          <SetRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l4-4m-4 4l-4-4M5 20h14" stroke={OTTI.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="Download my data" detail="JSON of every session" />
          <SetRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 7h14M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M6 7v12a2 2 0 002 2h8a2 2 0 002-2V7" stroke={OTTI.coral} strokeWidth="2" strokeLinecap="round"/></svg>} title="Delete my account" detail="We'll remove everything within 30 days" isLast />
        </SetSection>

        <div style={{ marginTop: 16, padding: '0 8px', fontSize: 12, color: OTTI.ink3, lineHeight: 1.55 }}>
          Read the full <span style={{ color: OTTI.navy, fontWeight: 600 }}>Privacy notice</span> and <span style={{ color: OTTI.navy, fontWeight: 600 }}>Terms</span>.
        </div>
      </div>
      <div style={{ height: 40 }} />
    </Phone>
  );
}

// 20 — Manage co-parent
function ScreenManageParent({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Co-parent" onBack={() => nav('profile')} />
      <div style={{ padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: 22, padding: '18px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: OTTI.coralSoft, color: OTTI.navyDeep, fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>A</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: OTTI.ink }}>Alex Harper</div>
              <div style={{ fontSize: 13, color: OTTI.ink3, marginTop: 1 }}>alex.harper@gmail.com</div>
              <div style={{ marginTop: 6, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 9px', background: OTTI.sunSoft, color: '#A67B14', borderRadius: 8, fontSize: 11, fontWeight: 700 }}>
                <div style={{ width: 6, height: 6, borderRadius: 3, background: OTTI.sun }} />
                Invite pending
              </div>
            </div>
          </div>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <button style={{ flex: 1, height: 44, borderRadius: 22, background: OTTI.navyTint, color: OTTI.navy, border: 'none', cursor: 'pointer', fontWeight: 700, fontFamily: SANS, fontSize: 13 }}>Resend invite</button>
            <button style={{ flex: 1, height: 44, borderRadius: 22, background: 'transparent', color: OTTI.coral, border: `1.5px solid ${OTTI.coralSoft}`, cursor: 'pointer', fontWeight: 700, fontFamily: SANS, fontSize: 13 }}>Remove</button>
          </div>
        </div>

        <SetSection header="Permissions for Alex">
          {[
            { l: "See Mia's wear-time",  on: true,  locked: true },
            { l: 'Log and edit sessions', on: true },
            { l: "Edit Mia's profile",    on: false },
            { l: 'Manage reminders',      on: true },
          ].map((r, i, arr) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none', gap: 12 }}>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{r.l}</div>
              {r.locked ? <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3 }}>Required</div> : <Toggle on={r.on} />}
            </div>
          ))}
        </SetSection>

        <div style={{ marginTop: 20, background: OTTI.greenSoft, borderRadius: 18, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Mascot size={44} />
          <div style={{ flex: 1, fontSize: 13, color: OTTI.navyDeep, lineHeight: 1.4 }}>
            Want to add a grandparent or carer? <strong>Talk to your SJID team</strong> — they can add up to four people.
          </div>
        </div>
      </div>
    </Phone>
  );
}

// 21 — About
function ScreenAbout({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="About Otti" onBack={() => nav('profile')} />
      <div style={{ padding: '8px 20px 0', textAlign: 'center' }}>
        <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center' }}>
          <Mascot size={140} />
        </div>
        <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}><Wordmark height={40} /></div>
        <div style={{ marginTop: 8, fontSize: 13, color: OTTI.ink3, fontWeight: 500 }}>
          Version 1.4.0 (build 2026.05.14)
        </div>

        <div style={{
          marginTop: 22, background: '#fff', borderRadius: 22, padding: '20px 20px',
          border: `1px solid ${OTTI.lineSolid}`, textAlign: 'left',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase' }}>Built with care</div>
          <div style={{ marginTop: 8, fontSize: 15, color: OTTI.ink, lineHeight: 1.55 }}>
            Otti was made by the team at <strong>SJID</strong>, working with cochlear implant families. Every screen has been shaped by parents who use it daily.
          </div>
        </div>

        <SetSection header="">
          <SetRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5 11-11" stroke={OTTI.green} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="What's new" detail="Streaks, weekly summary, dark mode" />
          <SetRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={OTTI.navy} strokeWidth="2"/><path d="M12 8.5v4.5" stroke={OTTI.navy} strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill={OTTI.navy}/></svg>} title="Help & FAQs" />
          <SetRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zM3 9l9 5 9-5" stroke={OTTI.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>} title="Contact SJID" />
          <SetRow icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 4-3.5 8-8 10-4.5-2-8-6-8-10V6l8-4z" stroke={OTTI.navy} strokeWidth="2" strokeLinejoin="round"/></svg>} title="Terms & privacy" isLast />
        </SetSection>

        <div style={{ marginTop: 22, fontSize: 12, color: OTTI.ink3, lineHeight: 1.5 }}>
          Made in the UK · © SJID 2026
        </div>
      </div>
      <div style={{ height: 40 }} />
    </Phone>
  );
}

// 22 — Sign out (modal sheet)
function ScreenSignOut({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0', opacity: 0.5 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>You & Mia</div>
        <div style={{ marginTop: 18, height: 110, background: '#fff', borderRadius: 20, border: `1px solid ${OTTI.lineSolid}` }} />
        <div style={{ marginTop: 18, height: 80, background: '#fff', borderRadius: 20, border: `1px solid ${OTTI.lineSolid}` }} />
        <div style={{ marginTop: 12, height: 80, background: '#fff', borderRadius: 20, border: `1px solid ${OTTI.lineSolid}` }} />
      </div>
      <div onClick={() => nav('profile')} style={{ position: 'absolute', inset: 0, background: 'rgba(12,33,80,0.45)', backdropFilter: 'blur(2px)', zIndex: 30, cursor: 'pointer' }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#fff', borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '24px 24px 36px', zIndex: 40, textAlign: 'center',
      }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: OTTI.lineSolid, margin: '0 auto 18px' }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}><Mascot size={88} /></div>
        <div style={{ marginTop: 14, fontSize: 22, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.3 }}>
          Sign out of Otti?
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: OTTI.ink2, lineHeight: 1.5 }}>
          Your sessions stay safe with SJID. You can sign back in any time with the same email.
        </div>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn kind="coral" onClick={() => nav('splash')}>Yes, sign out</Btn>
          <Btn kind="ghost" onClick={() => nav('profile')}>Stay signed in</Btn>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, {
  ScreenProfile,
  ScreenNotifications, ScreenNotificationDetail,
  ScreenPrivacy, ScreenManageParent, ScreenAbout, ScreenSignOut,
});
