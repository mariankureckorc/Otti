/* Auth & onboarding screens */

// ─────────────────────────────────────────────────────────────
// 01 — Splash / Welcome
// ─────────────────────────────────────────────────────────────
function ScreenSplash() {
  return (
    <Phone bg={OTTI.navy} dark>
      {/* soft radial highlight */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(120% 80% at 50% 35%, ${OTTI.navyMid} 0%, ${OTTI.navy} 55%, ${OTTI.navyDeep} 100%)`,
      }} />
      {/* floating notes / sound waves around mascot */}
      <div style={{ position: 'absolute', top: 130, left: 38, width: 28, height: 28, borderRadius: 14, background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', top: 270, right: 30, width: 18, height: 18, borderRadius: 9, background: OTTI.green, opacity: 0.7 }} />
      <div style={{ position: 'absolute', top: 220, left: 24, width: 8, height: 8, borderRadius: 4, background: OTTI.coral }} />
      <div style={{ position: 'absolute', top: 360, right: 56, width: 10, height: 10, borderRadius: 5, background: 'rgba(255,255,255,0.4)' }} />

      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 32px', zIndex: 2 }}>
        <Mascot size={220} />
        <div style={{ marginTop: 22 }}><Wordmark height={56} light /></div>
        <div style={{ marginTop: 18, color: 'rgba(255,255,255,0.78)', fontSize: 17, lineHeight: 1.45, textAlign: 'center', maxWidth: 280 }}>
          A gentle companion for cochlear implant families.
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 64, left: 24, right: 24, zIndex: 2 }}>
        <Btn kind="accent">Get started</Btn>
        <div style={{ textAlign: 'center', marginTop: 14, color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>
          Already with us? <span style={{ color: '#fff', fontWeight: 700 }}>Sign in</span>
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 02 — Sign in
// ─────────────────────────────────────────────────────────────
function ScreenSignIn() {
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 70, paddingLeft: 28, paddingRight: 28 }}>
        <Wordmark height={36} />
        <div style={{ marginTop: 32, fontFamily: SANS, fontSize: 30, fontWeight: 800, letterSpacing: -0.6, lineHeight: 1.15, color: OTTI.navyDeep }}>
          Welcome back.<br/>Good to see you.
        </div>
        <div style={{ marginTop: 10, color: OTTI.ink2, fontSize: 15, lineHeight: 1.45 }}>
          Sign in to continue Mia's listening journey.
        </div>

        {/* Email field */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 8 }}>Email</div>
          <div style={{ height: 56, borderRadius: 16, background: '#fff', border: `1.5px solid ${OTTI.navy}`, display: 'flex', alignItems: 'center', padding: '0 18px', fontSize: 16, color: OTTI.ink, fontWeight: 500 }}>
            sam.harper@gmail.com
          </div>
        </div>

        {/* Password */}
        <div style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2 }}>Password</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.navy }}>Forgot?</div>
          </div>
          <div style={{ height: 56, borderRadius: 16, background: '#fff', border: `1.5px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', padding: '0 18px', fontSize: 18, color: OTTI.ink3, letterSpacing: 4 }}>
            ••••••••••
          </div>
        </div>

        <div style={{ marginTop: 22 }}>
          <Btn>Sign in</Btn>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
          <div style={{ flex: 1, height: 1, background: OTTI.lineSolid }} />
          <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600, letterSpacing: 0.4 }}>OR</div>
          <div style={{ flex: 1, height: 1, background: OTTI.lineSolid }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn kind="secondary" icon={Icon.google(20)}>Continue with Google</Btn>
          <Btn kind="secondary" icon={Icon.apple(20)}>Continue with Apple</Btn>
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 03 — Blocked login (not on approved list)
// ─────────────────────────────────────────────────────────────
function ScreenBlocked() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Sign in" />
      <div style={{ padding: '12px 28px 0' }}>
        {/* Sealed envelope-ish illustration via cards */}
        <div style={{
          marginTop: 8, background: OTTI.coralSoft, borderRadius: 28, padding: '28px 24px 22px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: 70, background: '#fff', opacity: 0.45 }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, background: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(180, 80, 60, 0.18)',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18v12H3z" stroke={OTTI.coral} strokeWidth="2"/>
                <path d="M3 6l9 7 9-7" stroke={OTTI.coral} strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.coral, letterSpacing: 1, textTransform: 'uppercase' }}>Invite needed</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: OTTI.navyDeep, marginTop: 2 }}>We can't find your invite</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 22, fontSize: 22, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.4, lineHeight: 1.25 }}>
          Otti is given to families by their SJID team.
        </div>
        <div style={{ marginTop: 12, color: OTTI.ink2, fontSize: 15, lineHeight: 1.55 }}>
          The email <strong style={{ color: OTTI.ink }}>sam.harper@gmail.com</strong> isn't on your team's list yet. If you think this is a mix-up, your AVT or audiologist can add you in a minute.
        </div>

        <div style={{
          marginTop: 22, background: '#fff', borderRadius: 18,
          padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
          border: `1px solid ${OTTI.lineSolid}`,
        }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: OTTI.greenSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 8a3 3 0 013-3h8a3 3 0 013 3v7a3 3 0 01-3 3h-3l-4 3v-3H8a3 3 0 01-3-3V8z" stroke={OTTI.greenDark} strokeWidth="2" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>Need help?</div>
            <div style={{ fontSize: 13, color: OTTI.ink3, marginTop: 1 }}>Most teams respond within a day</div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 38, left: 28, right: 28 }}>
          <Btn>Contact SJID</Btn>
          <div style={{ marginTop: 10 }}>
            <Btn kind="ghost">Try a different email</Btn>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 04 — First-run onboarding: child profile
// ─────────────────────────────────────────────────────────────
function ScreenChildProfile() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Step 1 of 3" sub="About your child" />
      <div style={{ padding: '14px 24px 0' }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.2 }}>
          Let's set up your child's profile.
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: OTTI.ink2 }}>
          Otti uses age to suggest a daily wear-time target. You can change anything later.
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 8 }}>Name</div>
          <div style={{ height: 54, borderRadius: 14, background: '#fff', border: `1.5px solid ${OTTI.navy}`, display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 17, fontWeight: 600, color: OTTI.ink }}>
            Mia
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 8 }}>Age</div>
          <div style={{ height: 54, borderRadius: 14, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px 0 16px', fontSize: 16, color: OTTI.ink }}>
            <span style={{ fontWeight: 600 }}>4 years</span>
            {Icon.chevDown()}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 10 }}>Implant side</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { id: 'left', label: 'Left' },
              { id: 'right', label: 'Right' },
              { id: 'both', label: 'Both' },
            ].map(opt => {
              const sel = opt.id === 'both';
              return (
                <div key={opt.id} style={{
                  flex: 1, height: 78, borderRadius: 16,
                  background: sel ? OTTI.navy : '#fff',
                  color: sel ? '#fff' : OTTI.ink,
                  border: sel ? 'none' : `1px solid ${OTTI.lineSolid}`,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
                  fontWeight: 700, fontSize: 14,
                }}>
                  {/* ear icons */}
                  <div style={{ display: 'flex', gap: 4 }}>
                    {opt.id !== 'right' && Icon.ear(sel ? '#fff' : OTTI.navy, 20)}
                    {opt.id !== 'left'  && <div style={{ transform: 'scaleX(-1)' }}>{Icon.ear(sel ? '#fff' : OTTI.navy, 20)}</div>}
                  </div>
                  {opt.label}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          marginTop: 20, background: OTTI.greenSoft, borderRadius: 16,
          padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <Mascot size={48} />
          <div style={{ fontSize: 13, color: OTTI.navyDeep, lineHeight: 1.4 }}>
            For a 4-year-old, we'll suggest <strong>10 hours</strong> of wear a day.
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, display: 'flex', gap: 6 }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i === 1 ? OTTI.navy : OTTI.navyTint }} />
          ))}
        </div>
        <button style={{ height: 54, padding: '0 28px', borderRadius: 27, background: OTTI.navy, color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, fontFamily: SANS }}>Next</button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 05 — First-run onboarding: invite second parent
// ─────────────────────────────────────────────────────────────
function ScreenInvitePartner() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Step 3 of 3" sub="Bring in a partner" />
      <div style={{ padding: '14px 24px 0' }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.2 }}>
          Invite the other grown-up.
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: OTTI.ink2, lineHeight: 1.5 }}>
          You'll both see the same wear-time, history and reminders. Either of you can log sessions.
        </div>

        {/* Two-avatar illustration */}
        <div style={{
          marginTop: 22, height: 150, borderRadius: 24, background: '#fff',
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${OTTI.lineSolid}`,
        }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${OTTI.navyWash} 0%, transparent 70%)`, borderRadius: 24 }} />
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: -12 }}>
            <div style={{ width: 72, height: 72, borderRadius: 36, background: OTTI.sunSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 24, color: OTTI.navyDeep, border: '4px solid #fff', zIndex: 2 }}>S</div>
            <div style={{ width: 56, height: 56, borderRadius: 28, marginLeft: -16, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #fff', zIndex: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <Mascot size={56} />
            </div>
            <div style={{ width: 72, height: 72, borderRadius: 36, marginLeft: -16, background: OTTI.coralSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 24, color: OTTI.navyDeep, border: '4px solid #fff', zIndex: 1 }}>A</div>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 8 }}>Their email</div>
          <div style={{ height: 56, borderRadius: 16, background: '#fff', border: `1.5px solid ${OTTI.navy}`, display: 'flex', alignItems: 'center', padding: '0 18px', fontSize: 16, color: OTTI.ink, fontWeight: 500 }}>
            alex.harper@gmail.com
          </div>
        </div>

        <div style={{ marginTop: 14, fontSize: 13, color: OTTI.ink3, lineHeight: 1.5 }}>
          They'll receive an invite from SJID. Their account stays linked to Mia's profile.
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: 24, right: 24 }}>
        <Btn>Send invite</Btn>
        <div style={{ marginTop: 10 }}>
          <Btn kind="ghost">Skip for now</Btn>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenSplash, ScreenSignIn, ScreenBlocked, ScreenChildProfile, ScreenInvitePartner });
