// Print-only renderer — renders all screens in a paged layout
// (no DesignCanvas pan/zoom chrome; pages sized for print).

function PrintApp() {
  const sections = [
    { id: 'auth', title: 'Auth & Onboarding', sub: 'Signed-in via SJID approved list · invite-only',
      screens: [
        ['01 · Splash',                ScreenSplash],
        ['02 · Sign in',               ScreenSignIn],
        ['03 · Blocked login',         ScreenBlocked],
        ['04 · Child profile setup',   ScreenChildProfile],
        ['05 · Invite second parent',  ScreenInvitePartner],
      ]
    },
    { id: 'daily', title: 'Core daily use', sub: 'The screens parents open every day, often tired, often one-handed',
      screens: [
        ['06 · Home / Today',          ScreenHome],
        ['07 · Log session',           ScreenLogSession],
        ['08 · History',               ScreenHistory],
        ['09 · Edit entry',            ScreenEditEntry],
      ]
    },
    { id: 'reminders', title: 'Reminders', sub: 'Permission, then preferences. Always under parent control.',
      screens: [
        ['10 · Notification permission', ScreenNotifPermission],
        ['11 · Reminder settings',       ScreenReminderSettings],
      ]
    },
    { id: 'community', title: 'Community forum', sub: 'A private space for SJID parents.',
      screens: [
        ['12 · Forum landing',         ScreenForum],
        ['13 · Thread view',           ScreenThread],
        ['14 · New post',              ScreenNewPost],
      ]
    },
    { id: 'articles', title: 'Articles', sub: 'Specialist-vetted reading, gently sequenced for Mia\u2019s age.',
      screens: [
        ['15 · Article list',          ScreenArticleList],
        ['16 · Article detail',        ScreenArticleDetail],
      ]
    },
    { id: 'account', title: 'Account & Settings', sub: 'Profile, privacy, co-parent.',
      screens: [
        ['17 · Profile & settings',    ScreenProfile],
        ['18 · Notification prefs',    ScreenNotifPrefs],
        ['19 · Privacy & consent',     ScreenPrivacy],
        ['20 · Manage co-parent',      ScreenManageParent],
        ['21 · About / version',       ScreenAbout],
        ['22 · Sign out',              ScreenSignOut],
      ]
    },
    { id: 'mascot', title: 'Mascot-led moments', sub: 'First-time empty states, daily wins, milestones.',
      screens: [
        ['23 · Empty history',         ScreenEmptyHistory],
        ['24 · Daily target met',      ScreenTargetMet],
        ['25 · First-week streak',     ScreenStreak],
      ]
    },
  ];

  return (
    <div className="doc">
      {/* Cover page */}
      <div className="page page-cover">
        <div className="cover-inner">
          <Mascot size={260} />
          <div className="cover-wordmark"><Wordmark height={72} /></div>
          <div className="cover-sub">A gentle companion for cochlear implant families.</div>
          <div className="cover-meta">
            <div><strong>Mobile UI mockups · v1</strong></div>
            <div>Prepared for SJID review · May 2026</div>
          </div>
          <div className="cover-fam">
            Sample family used throughout: Sam &amp; Alex Harper · Mia, 4, bilateral.
          </div>
        </div>
      </div>

      {/* System overview page */}
      <div className="page page-system">
        <div className="page-head">
          <div className="kicker">Design system</div>
          <h1>Built around the mascot's colors.</h1>
        </div>
        <div className="sys-grid">
          <div className="sys-card sys-pal">
            <div className="sys-label">Palette</div>
            <div className="sys-swatches">
              {[
                ['Otti Navy',  OTTI.navy,     '#fff'],
                ['Navy Deep',  OTTI.navyDeep, '#fff'],
                ['Otti Green', OTTI.green,    OTTI.navyDeep],
                ['Coral',      OTTI.coral,    '#fff'],
                ['Sun',        OTTI.sun,      OTTI.navyDeep],
                ['Cream',      OTTI.cream,    OTTI.ink],
              ].map(([n, bg, fg]) => (
                <div key={n} className="sw" style={{ background: bg, color: fg, border: n === 'Cream' ? `1px solid ${OTTI.lineSolid}` : 'none' }}>
                  <div className="sw-name">{n}</div>
                  <div className="sw-hex">{bg}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="sys-card sys-type">
            <div className="sys-label">Type · Plus Jakarta Sans</div>
            <div style={{ fontSize: 30, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.15 }}>Display 800</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: OTTI.ink, marginTop: 6 }}>Heading 700</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: OTTI.ink2, marginTop: 6, lineHeight: 1.5 }}>Body 500 · 1.5 line-height for tired-eye reading at 6 a.m.</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 10 }}>Meta · upper 700</div>
          </div>
          <div className="sys-card sys-prin">
            <div className="sys-label">Principles</div>
            {[
              ['1', 'Mascot is rare. It earns its presence at onboarding, achievements and empty states.'],
              ['2', 'WCAG AA at minimum. Information is never carried by color alone.'],
              ['3', 'Large hit areas (44pt+). The phone is being held with one hand at 7 a.m.'],
              ['4', 'Achievements feel like a child\'s win, not a productivity badge.'],
            ].map(([n, t]) => (
              <div key={n} className="prin">
                <div className="prin-n">{n}</div>
                <div className="prin-t">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {sections.map(sec => (
        <SectionPages key={sec.id} sec={sec} />
      ))}
    </div>
  );
}

// 4 phones per page (2x2 grid). Splits long sections across pages.
function SectionPages({ sec }) {
  const perPage = 4;
  const pages = [];
  for (let i = 0; i < sec.screens.length; i += perPage) {
    pages.push(sec.screens.slice(i, i + perPage));
  }
  return (
    <>
      {pages.map((chunk, pIdx) => (
        <div key={pIdx} className="page page-section">
          <div className="page-head">
            <div className="kicker">{sec.title}{pages.length > 1 ? ` · ${pIdx + 1} of ${pages.length}` : ''}</div>
            <h1>{sec.sub}</h1>
          </div>
          <div className="grid">
            {chunk.map(([label, Comp]) => (
              <div key={label} className="cell">
                <div className="cell-frame">
                  <Comp />
                </div>
                <div className="cell-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

const printRoot = ReactDOM.createRoot(document.getElementById('root'));
printRoot.render(<PrintApp />);

// Auto-print once fonts + first paint settle
(async () => {
  try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch {}
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  await new Promise(r => setTimeout(r, 1200));
  window.print();
})();
