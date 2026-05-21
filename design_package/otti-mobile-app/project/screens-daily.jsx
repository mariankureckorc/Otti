/* Daily use + mascot-led moments */

// ─────────────────────────────────────────────────────────────
// Reusable progress ring (semicircle/full)
// ─────────────────────────────────────────────────────────────
function Ring({ size = 240, stroke = 18, pct = 72, color = OTTI.green, track = OTTI.navyTint }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - pct / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
              strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
              transform={`rotate(-90 ${size/2} ${size/2})`} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// 06 — Home / Today
// ─────────────────────────────────────────────────────────────
function ScreenHome() {
  const pct = 72;
  return (
    <Phone bg={OTTI.cream}>
      {/* Top: avatar + greeting */}
      <div style={{ paddingTop: 64, padding: '64px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: OTTI.sunSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: OTTI.navyDeep }}>M</div>
            <div>
              <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 500 }}>Good morning, Sam</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: OTTI.navyDeep, marginTop: -1 }}>Mia · Thursday</div>
            </div>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${OTTI.lineSolid}`, position: 'relative' }}>
            {Icon.bell(OTTI.navy, 20)}
            <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: OTTI.coral, border: '2px solid #fff' }} />
          </div>
        </div>

        {/* Progress ring + mascot */}
        <div style={{ position: 'relative', height: 280, marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ring size={264} stroke={20} pct={pct} color={OTTI.green} track={OTTI.navyTint} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>Today</div>
            <div style={{ fontSize: 56, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -2, lineHeight: 1, marginTop: 4 }}>
              7<span style={{ fontSize: 28, fontWeight: 700 }}>h</span> 12<span style={{ fontSize: 28, fontWeight: 700 }}>m</span>
            </div>
            <div style={{ fontSize: 13, color: OTTI.ink3, marginTop: 4 }}>of 10h goal · <span style={{ color: OTTI.greenDark, fontWeight: 700 }}>{pct}%</span></div>
          </div>
          {/* Mascot pinned to ring */}
          <div style={{ position: 'absolute', right: 24, top: 4 }}>
            <Mascot size={86} />
          </div>
        </div>

        {/* Mascot message */}
        <div style={{ marginTop: 4, background: '#fff', borderRadius: 20, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: OTTI.green, flexShrink: 0 }} />
          <div style={{ flex: 1, fontSize: 14, color: OTTI.ink, fontWeight: 500, lineHeight: 1.4 }}>
            <strong>Almost there.</strong> Just under 3 hours to hit Mia's goal today.
          </div>
        </div>

        {/* Quick log + sessions */}
        <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
          <button style={{
            flex: 1, height: 68, borderRadius: 20, background: OTTI.navy, color: '#fff', border: 'none',
            display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px', fontFamily: SANS,
          }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: OTTI.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.play(OTTI.navyDeep, 18)}</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 500 }}>Start a</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: -1 }}>Live session</div>
            </div>
          </button>
          <button style={{
            width: 68, height: 68, borderRadius: 20, background: '#fff', border: `1px solid ${OTTI.lineSolid}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {Icon.plus(OTTI.navy, 26)}
          </button>
        </div>

        {/* Today's sessions */}
        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: OTTI.navyDeep }}>Today's sessions</div>
          <div style={{ fontSize: 13, color: OTTI.navy, fontWeight: 600 }}>3</div>
        </div>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { time: '07:10 – 08:55', dur: '1h 45m', tag: 'Breakfast & nursery' },
            { time: '12:30 – 15:05', dur: '2h 35m', tag: 'Park, lunch' },
            { time: '16:00 – 18:52', dur: '2h 52m', tag: 'Home' },
          ].map((s,i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 14, padding: '10px 14px', border: `1px solid ${OTTI.lineSolid}` }}>
              <div style={{ width: 4, height: 34, borderRadius: 2, background: OTTI.green, marginRight: 12 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{s.time}</div>
                <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>{s.tag}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: OTTI.navyDeep }}>{s.dur}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 100 }} />
      <TabBar active="home" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 07 — Log session (timer + total-minutes)
// ─────────────────────────────────────────────────────────────
function ScreenLogSession() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Log a session" close back={false} trailing={<div style={{ fontSize: 14, fontWeight: 700, color: OTTI.navy }}>Save</div>} />
      <div style={{ padding: '8px 20px 0' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', background: OTTI.navyTint, borderRadius: 14, padding: 4, gap: 4 }}>
          {['Live timer', 'Enter minutes'].map((t, i) => (
            <div key={t} style={{
              flex: 1, height: 40, borderRadius: 10,
              background: i === 0 ? '#fff' : 'transparent',
              boxShadow: i === 0 ? '0 1px 3px rgba(12,33,80,0.08)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 13, color: i === 0 ? OTTI.navyDeep : OTTI.ink3,
            }}>{t}</div>
          ))}
        </div>

        {/* Timer ring */}
        <div style={{ position: 'relative', marginTop: 28, height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Ring size={260} stroke={6} pct={28} color={OTTI.coral} track={OTTI.creamDeep} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: OTTI.coral, letterSpacing: 1, textTransform: 'uppercase' }}>● Recording</div>
            <div style={{ fontSize: 56, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -2, marginTop: 6, fontFamily: SANS, fontVariantNumeric: 'tabular-nums' }}>
              00:42:18
            </div>
            <div style={{ fontSize: 13, color: OTTI.ink3, marginTop: 6 }}>Started 8:24 AM</div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 8 }}>
          <button style={{ width: 56, height: 56, borderRadius: 28, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" fill={OTTI.coral}/></svg>
          </button>
          <button style={{ width: 78, height: 78, borderRadius: 39, background: OTTI.navy, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(22,58,120,0.3)' }}>
            {Icon.pause('#fff', 32)}
          </button>
          <button style={{ width: 56, height: 56, borderRadius: 28, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: OTTI.navy, fontFamily: SANS, fontWeight: 700, fontSize: 14 }}>
            +5m
          </button>
        </div>

        {/* Tag */}
        <div style={{ marginTop: 22, fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 8 }}>Add a tag (optional)</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            { l: 'Nursery', sel: true },
            { l: 'Play', sel: false },
            { l: 'Mealtime', sel: false },
            { l: 'Therapy', sel: false },
            { l: 'Outdoors', sel: false },
          ].map(t => (
            <div key={t.l} style={{
              height: 36, borderRadius: 18, padding: '0 14px',
              background: t.sel ? OTTI.navy : '#fff',
              color: t.sel ? '#fff' : OTTI.ink2,
              border: t.sel ? 'none' : `1px solid ${OTTI.lineSolid}`,
              display: 'flex', alignItems: 'center', fontSize: 13, fontWeight: 600,
            }}>{t.l}</div>
          ))}
        </div>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 08 — History
// ─────────────────────────────────────────────────────────────
function ScreenHistory() {
  // 7 days of data with target 10h
  const days = [
    { d: 'Fri', h: 8.2 },
    { d: 'Sat', h: 9.4 },
    { d: 'Sun', h: 6.1 },
    { d: 'Mon', h: 10.2, met: true },
    { d: 'Tue', h: 9.8 },
    { d: 'Wed', h: 10.5, met: true },
    { d: 'Thu', h: 7.2, today: true },
  ];
  const maxH = 12;
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>History</div>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.more(OTTI.navy)}</div>
        </div>

        {/* segmented */}
        <div style={{ marginTop: 16, display: 'flex', background: OTTI.navyTint, borderRadius: 12, padding: 4, gap: 4 }}>
          {['Day', 'Week', 'Month'].map((t, i) => (
            <div key={t} style={{
              flex: 1, height: 36, borderRadius: 9,
              background: i === 1 ? '#fff' : 'transparent',
              boxShadow: i === 1 ? '0 1px 3px rgba(12,33,80,0.08)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 13, color: i === 1 ? OTTI.navyDeep : OTTI.ink3,
            }}>{t}</div>
          ))}
        </div>

        {/* Week summary card */}
        <div style={{ marginTop: 18, background: '#fff', borderRadius: 24, padding: '20px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600 }}>This week's average</div>
              <div style={{ fontSize: 34, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1, marginTop: 2 }}>
                8<span style={{ fontSize: 18, fontWeight: 700 }}>h</span> 47<span style={{ fontSize: 18, fontWeight: 700 }}>m</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: OTTI.greenDark, background: OTTI.greenSoft, padding: '4px 10px', borderRadius: 12 }}>
              ↑ 12% vs last
            </div>
          </div>

          {/* Bar chart */}
          <div style={{ marginTop: 22, display: 'flex', gap: 6, alignItems: 'flex-end', height: 140 }}>
            {days.map((d, i) => {
              const pct = (d.h / maxH) * 100;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ flex: 1, width: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{
                      width: '100%', height: `${pct}%`, borderRadius: 8,
                      background: d.today ? OTTI.coral : (d.met ? OTTI.green : OTTI.navyTint),
                      position: 'relative',
                    }}>
                      {d.met && (
                        <div style={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)', width: 18, height: 18, borderRadius: 9, background: OTTI.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {Icon.check('#fff', 12)}
                        </div>
                      )}
                    </div>
                    {/* target line */}
                    <div style={{ position: 'absolute', left: '-3px', right: '-3px', bottom: `${(10/maxH)*100}%`, borderTop: `2px dashed ${OTTI.navy}`, opacity: 0.3 }} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: d.today ? OTTI.coral : OTTI.ink3 }}>{d.d}</div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 14, display: 'flex', gap: 16, fontSize: 11, color: OTTI.ink3, fontWeight: 500 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.green }} />Goal met</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.coral }} />Today</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 12, borderTop: `1.5px dashed ${OTTI.navy}`, opacity: 0.5 }} />10h target</div>
          </div>
        </div>

        {/* Streak strip */}
        <div style={{ marginTop: 14, background: OTTI.sunSoft, borderRadius: 18, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 24 }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill={OTTI.sun}><path d="M12 2c1 4 4 6 4 10a4 4 0 11-8 0c0-1.5 1-2.5 1-4-1 0-2-1-2-3 2-1 4-2 5-3z"/></svg>
          </div>
          <div style={{ flex: 1, fontSize: 14, color: OTTI.navyDeep, lineHeight: 1.4 }}>
            <strong>3-day streak</strong> of hitting Mia's daily goal.
          </div>
          {Icon.chev(OTTI.navy)}
        </div>
      </div>
      <div style={{ height: 100 }} />
      <TabBar active="history" />
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// 09 — Edit / Correct entry
// ─────────────────────────────────────────────────────────────
function ScreenEditEntry() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Edit session" close back={false} trailing={<div style={{ fontSize: 14, fontWeight: 700, color: OTTI.navy }}>Save</div>} />
      <div style={{ padding: '8px 20px 0' }}>
        <div style={{ fontSize: 13, color: OTTI.ink3, fontWeight: 500 }}>Thursday, 14 May</div>

        {/* Duration card */}
        <div style={{ marginTop: 14, background: '#fff', borderRadius: 22, padding: '20px 18px', border: `1px solid ${OTTI.lineSolid}`, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: OTTI.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>Duration</div>
          <div style={{ marginTop: 6, fontSize: 46, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1.5, fontVariantNumeric: 'tabular-nums' }}>
            <span style={{ background: OTTI.navyTint, padding: '0 14px', borderRadius: 12 }}>2</span>
            <span style={{ fontSize: 24, color: OTTI.ink3, padding: '0 6px' }}>h</span>
            <span style={{ background: OTTI.navyTint, padding: '0 14px', borderRadius: 12 }}>35</span>
            <span style={{ fontSize: 24, color: OTTI.ink3, padding: '0 6px' }}>m</span>
          </div>
        </div>

        {/* Time range */}
        <div style={{ marginTop: 14, background: '#fff', borderRadius: 22, padding: '4px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
          {[
            { l: 'Start', v: '12:30 PM' },
            { l: 'End', v: '3:05 PM' },
            { l: 'Tag', v: 'Park, lunch' },
          ].map((row, i, arr) => (
            <div key={row.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 54, borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: OTTI.ink }}>{row.l}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: OTTI.navy, fontWeight: 600, fontSize: 15 }}>{row.v}{Icon.chev(OTTI.ink4)}</div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div style={{ marginTop: 14, background: '#fff', borderRadius: 22, padding: '14px 16px', border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600, marginBottom: 6 }}>Note (optional)</div>
          <div style={{ fontSize: 15, color: OTTI.ink, lineHeight: 1.45 }}>
            Took processor off briefly during the slide — clipped it back on after.
          </div>
        </div>

        {/* Delete */}
        <button style={{
          marginTop: 18, height: 52, width: '100%', borderRadius: 26, background: 'transparent',
          border: `1.5px solid ${OTTI.coralSoft}`, color: OTTI.coral, fontWeight: 700, fontSize: 15, fontFamily: SANS,
        }}>
          Delete this session
        </button>
      </div>
    </Phone>
  );
}

// ─────────────────────────────────────────────────────────────
// MASCOT MOMENTS
// ─────────────────────────────────────────────────────────────

// First-time empty history state
function ScreenEmptyHistory() {
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0' }}>
        <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>History</div>
        <div style={{ marginTop: 16, display: 'flex', background: OTTI.navyTint, borderRadius: 12, padding: 4, gap: 4 }}>
          {['Day', 'Week', 'Month'].map((t, i) => (
            <div key={t} style={{
              flex: 1, height: 36, borderRadius: 9,
              background: i === 1 ? '#fff' : 'transparent',
              boxShadow: i === 1 ? '0 1px 3px rgba(12,33,80,0.08)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 13, color: i === 1 ? OTTI.navyDeep : OTTI.ink3,
            }}>{t}</div>
          ))}
        </div>

        <div style={{
          marginTop: 50, display: 'flex', flexDirection: 'column',
          alignItems: 'center', textAlign: 'center', padding: '0 20px',
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -28, borderRadius: '50%', background: OTTI.greenSoft, opacity: 0.5 }} />
            <div style={{ position: 'relative' }}><Mascot size={160} /></div>
          </div>
          <div style={{ marginTop: 28, fontSize: 22, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.4, lineHeight: 1.25, maxWidth: 280 }}>
            Mia's listening story starts here.
          </div>
          <div style={{ marginTop: 12, fontSize: 15, color: OTTI.ink2, lineHeight: 1.55, maxWidth: 290 }}>
            Once you log your first session, this is where you'll see Mia's days, weeks and months take shape.
          </div>

          <div style={{ marginTop: 26, width: '100%' }}>
            <Btn>Log Mia's first session</Btn>
          </div>
          <div style={{ marginTop: 8 }}>
            <Btn kind="ghost" size="md">Or set up a reminder</Btn>
          </div>
        </div>
      </div>
      <TabBar active="history" />
    </Phone>
  );
}

// Daily target met
function ScreenTargetMet() {
  return (
    <Phone bg={OTTI.green} dark>
      {/* confetti dots */}
      {[...Array(20)].map((_, i) => {
        const colors = [OTTI.sun, OTTI.coral, '#fff', OTTI.navyDeep];
        const top = (i * 37) % 700 + 80;
        const left = (i * 53) % 350 + 10;
        const size = 6 + (i % 3) * 3;
        return <div key={i} style={{
          position: 'absolute', top, left, width: size, height: size, borderRadius: i % 2 === 0 ? size/2 : 2,
          background: colors[i % 4], transform: `rotate(${i * 27}deg)`, opacity: 0.85, zIndex: 1,
        }} />;
      })}

      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px', zIndex: 2 }}>
        <div style={{
          position: 'relative', width: 240, height: 240, borderRadius: 120,
          background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 20, borderRadius: 100, background: 'rgba(255,255,255,0.25)' }} />
          <Mascot size={200} style={{ position: 'relative', zIndex: 2 }} />
          <div style={{ position: 'absolute', top: -10, right: 6, width: 64, height: 64, borderRadius: 32, background: OTTI.navyDeep, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 22, border: '4px solid #fff', transform: 'rotate(10deg)', boxShadow: '0 8px 16px rgba(0,0,0,0.15)' }}>
            10h
          </div>
        </div>

        <div style={{ marginTop: 32, fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: 1.5, textTransform: 'uppercase' }}>
          Target met
        </div>
        <div style={{ marginTop: 6, fontSize: 36, fontWeight: 800, color: '#fff', textAlign: 'center', letterSpacing: -0.8, lineHeight: 1.15, maxWidth: 320 }}>
          Wow, Mia!<br/>Full 10 hours today.
        </div>
        <div style={{ marginTop: 14, fontSize: 16, color: 'rgba(255,255,255,0.85)', textAlign: 'center', lineHeight: 1.5, maxWidth: 300 }}>
          That's every minute of sound her brain has been soaking up. Beautiful work, Sam.
        </div>

        <div style={{ position: 'absolute', bottom: 60, left: 28, right: 28 }}>
          <Btn kind="dark">Share with Alex</Btn>
          <div style={{ marginTop: 8 }}>
            <button style={{ width: '100%', height: 52, border: 'none', background: 'transparent', color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: SANS }}>Back to today</button>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// Streak / first week milestone
function ScreenStreak() {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="" close back={false} />
      <div style={{ padding: '0 24px', textAlign: 'center' }}>
        {/* Trophy-ish stack */}
        <div style={{
          position: 'relative', marginTop: 16, height: 280, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        }}>
          {/* radial sun rays */}
          <svg width="320" height="320" viewBox="0 0 320 320" style={{ position: 'absolute', top: -20 }}>
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) * Math.PI / 180;
              const x1 = 160 + Math.cos(angle) * 70;
              const y1 = 160 + Math.sin(angle) * 70;
              const x2 = 160 + Math.cos(angle) * 110;
              const y2 = 160 + Math.sin(angle) * 110;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={OTTI.sun} strokeWidth="6" strokeLinecap="round" opacity={0.6} />;
            })}
          </svg>
          <div style={{
            position: 'relative', width: 180, height: 180, borderRadius: 90,
            background: `linear-gradient(180deg, ${OTTI.sunSoft} 0%, ${OTTI.sun} 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(245, 197, 87, 0.5)',
          }}>
            <Mascot size={150} />
          </div>
        </div>

        <div style={{ marginTop: 26, fontSize: 11, fontWeight: 700, color: OTTI.sun, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          Milestone unlocked
        </div>
        <div style={{ marginTop: 8, fontSize: 30, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.6, lineHeight: 1.15 }}>
          Mia's first full week.
        </div>
        <div style={{ marginTop: 12, fontSize: 15, color: OTTI.ink2, lineHeight: 1.55, maxWidth: 320, margin: '12px auto 0' }}>
          Seven days in a row of consistent wear time. That kind of steadiness is exactly what helps her brain build sound habits.
        </div>

        {/* 7-day strip */}
        <div style={{ marginTop: 24, display: 'flex', gap: 6, justifyContent: 'center' }}>
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <div key={i} style={{ width: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 36, height: 36, borderRadius: 18, background: OTTI.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {Icon.check('#fff', 18)}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3 }}>{d}</div>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 50, left: 24, right: 24 }}>
          <Btn kind="accent">See Mia's week</Btn>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, { ScreenHome, ScreenLogSession, ScreenHistory, ScreenEditEntry, ScreenEmptyHistory, ScreenTargetMet, ScreenStreak, Ring });
