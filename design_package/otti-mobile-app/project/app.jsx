// Otti — full set of mobile UI mockups
// Composes all screens into a design canvas with section headers.

const PHONE_W = 390;
const PHONE_H = 844;

function App() {
  return (
    <DesignCanvas>

      <DCSection id="intro" title="Otti · Mobile UI" subtitle="A gentle companion for cochlear implant families · v1 mockups for SJID review">
        <DCArtboard id="brief" label="The brief in one card" width={520} height={PHONE_H}>
          <BriefCard />
        </DCArtboard>
        <DCArtboard id="system" label="Design system" width={520} height={PHONE_H}>
          <SystemCard />
        </DCArtboard>
      </DCSection>

      <DCSection id="auth" title="Auth & Onboarding" subtitle="Signed-in via SJID approved list · invite-only">
        <DCArtboard id="splash" label="01 · Splash" width={PHONE_W} height={PHONE_H}><ScreenSplash /></DCArtboard>
        <DCArtboard id="signin" label="02 · Sign in" width={PHONE_W} height={PHONE_H}><ScreenSignIn /></DCArtboard>
        <DCArtboard id="blocked" label="03 · Blocked login (not approved)" width={PHONE_W} height={PHONE_H}><ScreenBlocked /></DCArtboard>
        <DCArtboard id="child" label="04 · Child profile setup" width={PHONE_W} height={PHONE_H}><ScreenChildProfile /></DCArtboard>
        <DCArtboard id="invite" label="05 · Invite second parent" width={PHONE_W} height={PHONE_H}><ScreenInvitePartner /></DCArtboard>
      </DCSection>

      <DCSection id="daily" title="Core daily use" subtitle="The screens parents open every day, often tired, often one-handed">
        <DCArtboard id="home" label="06 · Home / Today" width={PHONE_W} height={PHONE_H}><ScreenHome /></DCArtboard>
        <DCArtboard id="log" label="07 · Log session" width={PHONE_W} height={PHONE_H}><ScreenLogSession /></DCArtboard>
        <DCArtboard id="hist" label="08 · History" width={PHONE_W} height={PHONE_H}><ScreenHistory /></DCArtboard>
        <DCArtboard id="edit" label="09 · Edit entry" width={PHONE_W} height={PHONE_H}><ScreenEditEntry /></DCArtboard>
      </DCSection>

      <DCSection id="reminders" title="Reminders" subtitle="Permission, then preferences. Always under parent control.">
        <DCArtboard id="perm" label="10 · Notification permission" width={PHONE_W} height={PHONE_H}><ScreenNotifPermission /></DCArtboard>
        <DCArtboard id="reminders" label="11 · Reminder settings" width={PHONE_W} height={PHONE_H}><ScreenReminderSettings /></DCArtboard>
      </DCSection>

      <DCSection id="community" title="Community forum" subtitle="A private space for SJID parents to share, vent and learn from each other.">
        <DCArtboard id="forum" label="12 · Forum landing" width={PHONE_W} height={PHONE_H}><ScreenForum /></DCArtboard>
        <DCArtboard id="thread" label="13 · Thread view" width={PHONE_W} height={PHONE_H}><ScreenThread /></DCArtboard>
        <DCArtboard id="newpost" label="14 · New post" width={PHONE_W} height={PHONE_H}><ScreenNewPost /></DCArtboard>
      </DCSection>

      <DCSection id="articles" title="Articles" subtitle="Specialist-vetted reading, gently sequenced for Mia's age.">
        <DCArtboard id="alist" label="15 · Article list" width={PHONE_W} height={PHONE_H}><ScreenArticleList /></DCArtboard>
        <DCArtboard id="adetail" label="16 · Article detail" width={PHONE_W} height={PHONE_H}><ScreenArticleDetail /></DCArtboard>
      </DCSection>

      <DCSection id="account" title="Account & Settings" subtitle="Profile, privacy, co-parent. Boring on purpose — except when the mascot drops by.">
        <DCArtboard id="profile" label="17 · Profile & settings" width={PHONE_W} height={PHONE_H}><ScreenProfile /></DCArtboard>
        <DCArtboard id="np" label="18 · Notification prefs" width={PHONE_W} height={PHONE_H}><ScreenNotifPrefs /></DCArtboard>
        <DCArtboard id="priv" label="19 · Privacy & consent" width={PHONE_W} height={PHONE_H}><ScreenPrivacy /></DCArtboard>
        <DCArtboard id="cop" label="20 · Manage co-parent" width={PHONE_W} height={PHONE_H}><ScreenManageParent /></DCArtboard>
        <DCArtboard id="about" label="21 · About / version" width={PHONE_W} height={PHONE_H}><ScreenAbout /></DCArtboard>
        <DCArtboard id="signout" label="22 · Sign out" width={PHONE_W} height={PHONE_H}><ScreenSignOut /></DCArtboard>
      </DCSection>

      <DCSection id="mascot" title="Mascot-led moments" subtitle="Where Otti shows up biggest — first-time empty states, daily wins, milestones.">
        <DCArtboard id="empty" label="23 · Empty history (first run)" width={PHONE_W} height={PHONE_H}><ScreenEmptyHistory /></DCArtboard>
        <DCArtboard id="met"   label="24 · Daily target met" width={PHONE_W} height={PHONE_H}><ScreenTargetMet /></DCArtboard>
        <DCArtboard id="streak"label="25 · First-week streak" width={PHONE_W} height={PHONE_H}><ScreenStreak /></DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

// ─────────────────────────────────────────────────────────────
// Intro cards (not phone mockups — design-rationale cards)
// ─────────────────────────────────────────────────────────────
function BriefCard() {
  return (
    <div style={{
      width: '100%', height: '100%', background: OTTI.navy, color: '#fff',
      padding: 36, fontFamily: SANS, boxSizing: 'border-box',
      position: 'relative', overflow: 'hidden', borderRadius: 24,
    }}>
      <div style={{ position: 'absolute', right: -40, bottom: -40, opacity: 0.4 }}>
        <Mascot size={320} />
      </div>
      <div style={{ position: 'relative' }}>
        <Wordmark height={48} light />
        <div style={{ marginTop: 30, fontSize: 11, fontWeight: 700, color: OTTI.green, letterSpacing: 1.2, textTransform: 'uppercase' }}>
          The brief, in one card
        </div>
        <div style={{ marginTop: 14, fontSize: 28, fontWeight: 800, lineHeight: 1.2, letterSpacing: -0.6, maxWidth: 380 }}>
          Help SJID parents keep their child's implants on — without ever feeling clinical.
        </div>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 400 }}>
          {[
            ['Audience', 'Young parents of young children, often tired, often one-handed.'],
            ['Job',      'Log wear time daily, see progress against an age-appropriate goal, get gentle reminders, learn, share.'],
            ['Tone',     'Family, warm, encouraging — never medical, never deficit-framed.'],
            ['Mascot',   'The visual heart of the product. Present at emotional moments, never overused.'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', gap: 14 }}>
              <div style={{ width: 80, fontSize: 11, fontWeight: 700, color: OTTI.green, letterSpacing: 0.8, textTransform: 'uppercase', paddingTop: 3, flexShrink: 0 }}>{k}</div>
              <div style={{ flex: 1, fontSize: 14, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)' }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.55)', maxWidth: 380, lineHeight: 1.5 }}>
          Sample family used throughout: <strong style={{ color: '#fff' }}>Sam & Alex Harper</strong> with <strong style={{ color: '#fff' }}>Mia (4, bilateral, since 2023)</strong>.
        </div>
      </div>
    </div>
  );
}

function SystemCard() {
  const swatches = [
    { name: 'Otti Navy',     hex: OTTI.navy,      bg: OTTI.navy,     fg: '#fff' },
    { name: 'Navy Deep',     hex: OTTI.navyDeep,  bg: OTTI.navyDeep, fg: '#fff' },
    { name: 'Otti Green',    hex: OTTI.green,     bg: OTTI.green,    fg: OTTI.navyDeep },
    { name: 'Coral',         hex: OTTI.coral,     bg: OTTI.coral,    fg: '#fff' },
    { name: 'Sun',           hex: OTTI.sun,       bg: OTTI.sun,      fg: OTTI.navyDeep },
    { name: 'Cream',         hex: OTTI.cream,     bg: OTTI.cream,    fg: OTTI.ink },
  ];
  return (
    <div style={{
      width: '100%', height: '100%', background: OTTI.cream, color: OTTI.ink,
      padding: 32, fontFamily: SANS, boxSizing: 'border-box', borderRadius: 24,
      display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.navy, letterSpacing: 1, textTransform: 'uppercase' }}>Design system</div>
        <div style={{ marginTop: 4, fontSize: 26, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>
          Built around the mascot's colors.
        </div>
        <div style={{ marginTop: 4, fontSize: 13, color: OTTI.ink2 }}>
          Navy + green from the logo. Cream, coral and sun added for warmth.
        </div>
      </div>

      {/* swatches */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Palette</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {swatches.map(s => (
            <div key={s.name} style={{ background: s.bg, color: s.fg, borderRadius: 12, padding: '12px 12px', minHeight: 70, border: s.name === 'Cream' ? `1px solid ${OTTI.lineSolid}` : 'none' }}>
              <div style={{ fontSize: 12, fontWeight: 700 }}>{s.name}</div>
              <div style={{ fontSize: 11, opacity: 0.75, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{s.hex}</div>
            </div>
          ))}
        </div>
      </div>

      {/* type */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Type — Plus Jakarta Sans</div>
        <div style={{ background: '#fff', borderRadius: 14, padding: '14px 16px', border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.15 }}>Display 800 · −0.5</div>
          <div style={{ fontSize: 16, fontWeight: 700, color: OTTI.ink, marginTop: 4 }}>Heading 700</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: OTTI.ink2, marginTop: 4 }}>Body 500 · 1.5 line-height for tired-eye reading.</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 6 }}>Meta · UPPER 700</div>
        </div>
      </div>

      {/* principles */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Principles</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            ['1', 'Mascot is rare. It earns its presence at onboarding, achievements and empty states.'],
            ['2', 'WCAG AA at minimum. Information is never carried by color alone.'],
            ['3', 'Large hit areas (44pt+). The phone is being held with one hand at 7am.'],
            ['4', 'Achievements feel like a child\'s win, not a productivity badge.'],
          ].map(([n, t]) => (
            <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: OTTI.navy, color: '#fff', fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</div>
              <div style={{ flex: 1, fontSize: 13, color: OTTI.ink, lineHeight: 1.45 }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
