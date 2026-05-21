/* Account & Settings */

// Reusable settings row
function SetRow({ icon, title, detail, value, isLast, dotBg = OTTI.navyTint, dotFg = OTTI.navy, danger }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderBottom: isLast ? 'none' : `1px solid ${OTTI.lineSolid}` }}>
      <div style={{ width: 34, height: 34, borderRadius: 10, background: dotBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: danger ? OTTI.coral : OTTI.ink }}>{title}</div>
        {detail && <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>{detail}</div>}
      </div>
      {value && <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink3 }}>{value}</div>}
      {!danger && Icon.chev(OTTI.ink4)}
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
};

// ─────────────────────────────────────────────────────────────
// 20 — Profile + Settings hub
// ─────────────────────────────────────────────────────────────
function ScreenProfile() {
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>You & Mia</div>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.more(OTTI.navy)}</div>
        </div>

        {/* Top profile cards */}
        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          {/* You */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 20, padding: '16px 14px', border: `1px solid ${OTTI.lineSolid}` }}>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: OTTI.sunSoft, color: OTTI.navyDeep, fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>S</div>
            <div style={{ marginTop: 12, fontSize: 15, fontWeight: 700, color: OTTI.ink }}>Sam Harper</div>
            <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 2 }}>sam.harper@gmail.com</div>
            <div style={{ marginTop: 10, padding: '4px 10px', background: OTTI.navyTint, borderRadius: 8, fontSize: 11, fontWeight: 700, color: OTTI.navy, display: 'inline-block' }}>Primary parent</div>
          </div>
          {/* Mia */}
          <div style={{ flex: 1, background: OTTI.navy, borderRadius: 20, padding: '16px 14px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -16, bottom: -10, opacity: 0.55 }}><Mascot size={88} /></div>
            <div style={{ width: 56, height: 56, borderRadius: 28, background: 'rgba(255,255,255,0.18)', color: '#fff', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>M</div>
            <div style={{ marginTop: 12, fontSize: 15, fontWeight: 700, position: 'relative' }}>Mia, 4</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2, position: 'relative' }}>Bilateral · since 2023</div>
            <div style={{ marginTop: 10, padding: '4px 10px', background: OTTI.green, borderRadius: 8, fontSize: 11, fontWeight: 700, color: OTTI.navyDeep, display: 'inline-block', position: 'relative' }}>10h daily goal</div>
          </div>
        </div>

        <SetSection header="Mia's profile">
          <SetRow icon={settingsIcons.child} title="Edit Mia's details" detail="Name, age, implant side" />
          <SetRow icon={settingsIcons.goal}  title="Daily wear goal"   value="10h 0m" isLast />
        </SetSection>

        <SetSection header="App">
          <SetRow icon={settingsIcons.bell}   title="Notifications"     detail="Reminders, achievements, replies" />
          <SetRow icon={settingsIcons.parent} title="Manage co-parent"  detail="Alex Harper · pending invite" />
          <SetRow icon={settingsIcons.lock}   title="Privacy & consent" detail="Data sharing with SJID" />
          <SetRow icon={settingsIcons.info}   title="About Otti"        value="v1.4.0" isLast />
        </SetSection>

        <div style={{ marginTop: 18, background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}` }}>
          <SetRow icon={settingsIcons.signout} title="Sign out" isLast danger />
        </div>
      </div>
      <div style={{ height: 80 }} />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 21 — Notification preferences
// ─────────────────────────────────────────────────────────────
function ScreenNotifPrefs() {
  const rows = [
    { sec: 'Otti reminders', items: [
      { l: 'Daily wear-time nudges', d: 'When the day is slipping behind', on: true },
      { l: 'Morning hello',          d: 'A quick start-of-day prompt', on: false },
    ]},
    { sec: 'Achievements', items: [
      { l: 'Daily goal met',         d: 'Mascot celebrates with you', on: true },
      { l: 'Weekly milestones',      d: 'First week, longest streak, etc.', on: true },
      { l: 'Weekly summary',         d: 'Sundays at 7pm', on: true },
    ]},
    { sec: 'Community', items: [
      { l: 'Replies to your posts',  d: '', on: true },
      { l: 'New SJID announcements', d: '', on: true },
      { l: 'Trending threads',       d: '', on: false },
    ]},
  ];
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Notifications" />
      <div style={{ padding: '0 20px' }}>
        {rows.map(grp => (
          <div key={grp.sec} style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 8px 8px' }}>{grp.sec}</div>
            <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}`, overflow: 'hidden' }}>
              {grp.items.map((r, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none', gap: 12 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{r.l}</div>
                    {r.d && <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 2 }}>{r.d}</div>}
                  </div>
                  <Toggle on={r.on} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ marginTop: 6, padding: '0 8px', fontSize: 12, color: OTTI.ink3, lineHeight: 1.5 }}>
          We'll respect your iOS quiet hours and silent mode. You can change permissions anytime in iOS Settings.
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 22 — Privacy & consent
// ─────────────────────────────────────────────────────────────
function ScreenPrivacy() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Privacy & consent" />
      <div style={{ padding: '0 20px' }}>
        {/* Hero */}
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

// ─────────────────────────────────────────────────────────────
// 23 — Manage second parent
// ─────────────────────────────────────────────────────────────
function ScreenManageParent() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Co-parent" />
      <div style={{ padding: '0 20px' }}>
        {/* Current co-parent */}
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
            <button style={{ flex: 1, height: 44, borderRadius: 22, background: OTTI.navyTint, color: OTTI.navy, border: 'none', fontWeight: 700, fontFamily: SANS, fontSize: 13 }}>Resend invite</button>
            <button style={{ flex: 1, height: 44, borderRadius: 22, background: 'transparent', color: OTTI.coral, border: `1.5px solid ${OTTI.coralSoft}`, fontWeight: 700, fontFamily: SANS, fontSize: 13 }}>Remove</button>
          </div>
        </div>

        <SetSection header="Permissions for Alex">
          {[
            { l: 'See Mia\'s wear-time',  on: true,  locked: true },
            { l: 'Log and edit sessions', on: true },
            { l: 'Edit Mia\'s profile',   on: false },
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

// ─────────────────────────────────────────────────────────────
// 24 — About / Version
// ─────────────────────────────────────────────────────────────
function ScreenAbout() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="About Otti" />
      <div style={{ padding: '8px 20px 0', textAlign: 'center' }}>
        <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center' }}>
          <Mascot size={140} />
        </div>
        <div style={{ marginTop: 12 }}><Wordmark height={40} /></div>
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

// ─────────────────────────────────────────────────────────────
// 25 — Sign out (confirmation)
// ─────────────────────────────────────────────────────────────
function ScreenSignOut() {
  return (
    <Phone bg={OTTI.cream}>
      {/* dim previous screen */}
      <div style={{ paddingTop: 60, padding: '60px 20px 0', opacity: 0.5 }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>You & Mia</div>
        <div style={{ marginTop: 18, height: 110, background: '#fff', borderRadius: 20, border: `1px solid ${OTTI.lineSolid}` }} />
        <div style={{ marginTop: 18, height: 80, background: '#fff', borderRadius: 20, border: `1px solid ${OTTI.lineSolid}` }} />
        <div style={{ marginTop: 12, height: 80, background: '#fff', borderRadius: 20, border: `1px solid ${OTTI.lineSolid}` }} />
      </div>
      {/* scrim */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,33,80,0.45)', backdropFilter: 'blur(2px)', zIndex: 30 }} />
      {/* Sheet */}
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
          <Btn kind="coral">Yes, sign out</Btn>
          <Btn kind="ghost">Stay signed in</Btn>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenProfile, ScreenNotifPrefs, ScreenPrivacy, ScreenManageParent, ScreenAbout, ScreenSignOut, SetRow, SetSection });
