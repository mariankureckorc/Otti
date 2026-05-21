/* Daily use + mascot moments — clickable */

// 06 — Home / Today
function ScreenHome({ nav }) {
  const { active } = useChildren();
  // Sample wear-time for today, in minutes. Single source of truth for
  // both the hero percentage and the secondary elapsed-time line — they
  // can never drift out of sync.
  const TODAY_ELAPSED_MIN = 432;
  const goalMin = Math.max(1, active.goalMinutes || 0);
  const pct = Math.max(0, Math.round((TODAY_ELAPSED_MIN / goalMin) * 100));
  const weekday = new Date().toLocaleDateString('en-GB', { weekday: 'long' });
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 64, padding: '64px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div onClick={() => nav('profile')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
            <div style={{ width: 44, height: 44, borderRadius: 22, background: OTTI.sunSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: OTTI.navyDeep }}>{active.name[0]}</div>
            <div>
              <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 500 }}>Good morning, Sam</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: OTTI.navyDeep, marginTop: -1 }}>{active.name} · {weekday}</div>
            </div>
          </div>
          <button onClick={() => nav('notifications')} style={{
            width: 40, height: 40, borderRadius: 20, background: '#fff', border: `1px solid ${OTTI.lineSolid}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          }}>
            {Icon.bell(OTTI.navy, 20)}
            <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: OTTI.coral, border: '2px solid #fff' }} />
          </button>
        </div>

        <div onClick={() => nav('targetMet')} style={{ position: 'relative', height: 280, marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Ring size={264} stroke={20} pct={pct} color={OTTI.green} track={OTTI.navyTint} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>Today</div>
            {/* Percentage is the hero — accent green digits, slightly larger than the previous time hero. */}
            <div style={{
              fontSize: 64, fontWeight: 800, color: OTTI.greenDark,
              letterSpacing: -2, lineHeight: 1, marginTop: 4,
              fontVariantNumeric: 'tabular-nums',
            }}>{pct}%</div>
            {/* Secondary line — elapsed of goal, muted. */}
            <div style={{ fontSize: 13, color: OTTI.ink3, marginTop: 6 }}>
              {fmtHm(TODAY_ELAPSED_MIN)} of {fmtHm(active.goalMinutes)} goal
            </div>
          </div>
          <div style={{ position: 'absolute', right: 24, top: 4 }}>
            <Mascot size={86} />
          </div>
        </div>

        <div style={{ marginTop: 4, background: '#fff', borderRadius: 20, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: OTTI.green, flexShrink: 0 }} />
          <div style={{ flex: 1, fontSize: 14, color: OTTI.ink, fontWeight: 500, lineHeight: 1.4 }}>
            <strong>Almost there.</strong> Just under 3 hours to hit {active.name}'s goal today.
          </div>
        </div>

        <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
          <button onClick={() => nav('logSession')} style={{
            flex: 1, height: 68, borderRadius: 20, background: OTTI.navy, color: '#fff', border: 'none',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px', fontFamily: SANS,
          }}>
            <div style={{ width: 38, height: 38, borderRadius: 19, background: OTTI.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Icon.play(OTTI.navyDeep, 18)}</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 16, fontWeight: 700 }}>Start Timer</div>
            </div>
          </button>
          <button onClick={() => nav('editEntry')} style={{
            width: 68, height: 68, borderRadius: 20, background: '#fff', border: `1px solid ${OTTI.lineSolid}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {Icon.plus(OTTI.navy, 26)}
          </button>
        </div>

        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: OTTI.navyDeep }}>Today's sessions</div>
          <div style={{ fontSize: 13, color: OTTI.navy, fontWeight: 600 }}>3</div>
        </div>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { time: '07:10 – 08:55', dur: '1h 45m', tag: 'Breakfast & nursery' },
            { time: '12:30 – 15:05', dur: '2h 35m', tag: 'Park, lunch' },
            { time: '16:00 – 18:52', dur: '2h 52m', tag: 'Home' },
          ].map((s, i) => (
            <div key={i} onClick={() => nav('editEntry')} style={{
              display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 14, padding: '10px 14px',
              border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer',
            }}>
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
      <TabBar active="home" nav={nav} />
    </Phone>
  );
}

// 07 — Log session
function ScreenLogSession({ nav }) {
  const [tab, setTab] = React.useState(0);
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Log a session" close back={false}
              onClose={() => nav('home')}
              trailing={
                <button onClick={() => nav('home')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, color: OTTI.navy, fontFamily: SANS }}>
                  Save
                </button>
              } />
      <div style={{ padding: '8px 20px 0' }}>
        <div style={{ display: 'flex', background: OTTI.navyTint, borderRadius: 14, padding: 4, gap: 4 }}>
          {['Live timer', 'Enter minutes'].map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{
              flex: 1, height: 40, borderRadius: 10, border: 'none', cursor: 'pointer',
              background: i === tab ? '#fff' : 'transparent',
              boxShadow: i === tab ? '0 1px 3px rgba(12,33,80,0.08)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 13, color: i === tab ? OTTI.navyDeep : OTTI.ink3,
              fontFamily: SANS,
            }}>{t}</button>
          ))}
        </div>

        {tab === 0 ? (
          <>
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

            <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 8 }}>
              <button style={{ width: 56, height: 56, borderRadius: 28, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" fill={OTTI.coral}/></svg>
              </button>
              <button style={{ width: 78, height: 78, borderRadius: 39, background: OTTI.navy, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(22,58,120,0.3)' }}>
                {Icon.pause('#fff', 32)}
              </button>
              <button style={{ width: 56, height: 56, borderRadius: 28, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: OTTI.navy, fontFamily: SANS, fontWeight: 700, fontSize: 14 }}>
                +5m
              </button>
            </div>
          </>
        ) : (
          <div style={{ marginTop: 28, background: '#fff', borderRadius: 22, padding: '28px 18px', border: `1px solid ${OTTI.lineSolid}`, textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: OTTI.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>Minutes worn</div>
            <div style={{ marginTop: 6, fontSize: 60, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1.5, fontVariantNumeric: 'tabular-nums' }}>
              <span style={{ background: OTTI.navyTint, padding: '0 18px', borderRadius: 12 }}>155</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: OTTI.ink3 }}>2h 35m</div>
            <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
              {['+15', '+30', '+60', '+90'].map(q => (
                <div key={q} style={{ padding: '8px 14px', borderRadius: 18, background: OTTI.navyTint, color: OTTI.navy, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>{q}m</div>
              ))}
            </div>
          </div>
        )}

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
              height: 36, borderRadius: 18, padding: '0 14px', cursor: 'pointer',
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

// 08 — History
// Four tabs, each rendering its own chart and metrics. All numbers come
// from src/data/sampleHistory.jsx so they can be tweaked in one place.
// Top-right three-dot opens the Export bottom sheet.
function ScreenHistory({ nav }) {
  const [seg, setSeg] = React.useState(0);
  const { range: customRange } = useCustomRange();
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [exportOpen, setExportOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  // Track whether we've auto-opened the picker for this screen mount so a
  // user who cancels isn't re-prompted on every tab tap.
  const autoOpenedRef = React.useRef(false);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function handleTabClick(i) {
    setSeg(i);
    if (i === 3 && !customRange && !autoOpenedRef.current) {
      autoOpenedRef.current = true;
      setPickerOpen(true);
    }
  }

  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>History</div>
          <button
            onClick={() => setExportOpen(true)}
            aria-label="History menu"
            style={{
              width: 40, height: 40, borderRadius: 20, background: '#fff',
              border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >{Icon.more(OTTI.navy)}</button>
        </div>

        <div style={{ marginTop: 16, display: 'flex', background: OTTI.navyTint, borderRadius: 12, padding: 4, gap: 4 }}>
          {['Day', 'Week', 'Month', 'Custom'].map((t, i) => (
            <button key={t} onClick={() => handleTabClick(i)} style={{
              flex: 1, height: 36, borderRadius: 9, border: 'none', cursor: 'pointer',
              background: i === seg ? '#fff' : 'transparent',
              boxShadow: i === seg ? '0 1px 3px rgba(12,33,80,0.08)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: 13, color: i === seg ? OTTI.navyDeep : OTTI.ink3,
              fontFamily: SANS,
            }}>{t}</button>
          ))}
        </div>

        {seg === 0 && <HistoryDayView nav={nav} />}
        {seg === 1 && <HistoryWeekView nav={nav} />}
        {seg === 2 && <HistoryMonthView nav={nav} />}
        {seg === 3 && <HistoryCustomView nav={nav} onOpenPicker={() => setPickerOpen(true)} />}
      </div>
      <div style={{ height: 100 }} />
      <TabBar active="history" nav={nav} />

      {pickerOpen && (
        <DateRangePickerSheet
          initial={customRange}
          onCancel={() => setPickerOpen(false)}
          onConfirm={(r) => { customRangeStore.set(r); setPickerOpen(false); }}
        />
      )}

      {exportOpen && (
        <ExportSheet
          onClose={() => setExportOpen(false)}
          onSent={(email) => { setExportOpen(false); showToast(`Export sent to ${email}`); }}
          customRangeAvailable={seg === 3 && !!customRange}
        />
      )}

      {toast && (
        <div role="status" style={{
          position: 'absolute', bottom: 110, left: '50%', transform: 'translateX(-50%)',
          background: OTTI.navyDeep, color: '#fff',
          padding: '10px 16px', borderRadius: 14,
          fontFamily: SANS, fontSize: 13, fontWeight: 600,
          boxShadow: '0 8px 24px rgba(12,33,80,0.25)',
          zIndex: 60, maxWidth: '85%', whiteSpace: 'nowrap',
          overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{toast}</div>
      )}
    </Phone>
  );
}

// — Day tab — horizontal timeline of today's sessions ————————————
function HistoryDayView({ nav }) {
  const winStart = hhmmToMin(DAY_WINDOW.start);
  const winEnd = hhmmToMin(DAY_WINDOW.end);
  const span = winEnd - winStart;

  const totalMin = DAY_SESSIONS.reduce((acc, s) => acc + (hhmmToMin(s.end) - hhmmToMin(s.start)), 0);
  const pct = Math.round((totalMin / DAILY_TARGET_MIN) * 100);

  const tickStrings = ['06:00', '10:00', '14:00', '18:00', '22:00'];

  return (
    <>
      <div style={{ marginTop: 18, background: '#fff', borderRadius: 24, padding: '20px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
        <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600 }}>Today</div>
        <div style={{ fontSize: 34, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>
          {fmtHm(totalMin)}
        </div>
        <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 2 }}>
          of {fmtHm(DAILY_TARGET_MIN)} target · <span style={{ color: OTTI.greenDark, fontWeight: 700 }}>{pct}%</span>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: 22, position: 'relative', height: 60 }}>
          <div aria-label="Empty timeline track" style={{
            position: 'absolute', top: 18, left: 0, right: 0, height: 24,
            borderRadius: 12, background: OTTI.navyTint,
          }} />
          {DAY_SESSIONS.map((s, i) => {
            const left = ((hhmmToMin(s.start) - winStart) / span) * 100;
            const width = ((hhmmToMin(s.end) - hhmmToMin(s.start)) / span) * 100;
            return (
              <div key={i} aria-label={`Session ${s.start} to ${s.end}`} style={{
                position: 'absolute', top: 18, height: 24,
                left: `${left}%`, width: `${width}%`,
                background: OTTI.green, borderRadius: 12,
              }} />
            );
          })}
          <div style={{ position: 'absolute', top: 48, left: 0, right: 0, display: 'flex', justifyContent: 'space-between' }}>
            {tickStrings.map(t => (
              <div key={t} style={{ fontSize: 10, color: OTTI.ink3, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{t}</div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 16, fontSize: 11, color: OTTI.ink3, fontWeight: 500 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.green }} />
            Wear session
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.navyTint }} />
            Processors off
          </div>
        </div>
      </div>

      {/* Session list */}
      <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 4px' }}>
        Today's sessions · {DAY_SESSIONS.length}
      </div>
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {DAY_SESSIONS.map((s, i) => {
          const dur = hhmmToMin(s.end) - hhmmToMin(s.start);
          return (
            <div key={i} onClick={() => nav('editEntry')} style={{
              display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 14, padding: '10px 14px',
              border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer',
            }}>
              <div style={{ width: 4, height: 34, borderRadius: 2, background: OTTI.green, marginRight: 12 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink, fontVariantNumeric: 'tabular-nums' }}>{s.start} – {s.end}</div>
                <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>{s.label}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: OTTI.navyDeep, fontVariantNumeric: 'tabular-nums' }}>{fmtHm(dur)}</div>
            </div>
          );
        })}
      </div>

      <InsightCallout text="Mia is on track today — keep going!" />
    </>
  );
}

// — Week tab — 7 vertical bars + target line ————————————
function HistoryWeekView({ nav }) {
  const labels = weekLabelsEndingToday();
  const totalMin = WEEK_MINUTES.reduce((a, b) => a + b, 0);
  const avg = Math.round(totalMin / WEEK_MINUTES.length);
  const maxScale = Math.max(DAILY_TARGET_MIN, ...WEEK_MINUTES) * 1.15;

  return (
    <>
      <div style={{ marginTop: 18, background: '#fff', borderRadius: 24, padding: '20px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600 }}>This week's average</div>
            <div style={{ fontSize: 34, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>
              {fmtHm(avg)}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700, color: OTTI.greenDark, background: OTTI.greenSoft, padding: '4px 10px', borderRadius: 12 }}>
            ↑ {WEEK_VS_LAST_PCT}% vs last
          </div>
        </div>

        {/* Chart — absolute-positioned inner row guarantees bars get a real
            parent height to compute `height: pct%` against. */}
        <div style={{ marginTop: 22, position: 'relative', height: 140 }}>
          {/* Bars row */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: 6, alignItems: 'flex-end' }}>
            {WEEK_MINUTES.map((m, i) => {
              const isToday = i === WEEK_MINUTES.length - 1;
              const met = m >= DAILY_TARGET_MIN;
              const pct = (m / maxScale) * 100;
              return (
                <div key={i} onClick={() => nav('editEntry')}
                     aria-label={`${labels[i]}: ${fmtHm(m)}`}
                     style={{
                       flex: 1, height: `${pct}%`, minHeight: 4,
                       borderRadius: 8, position: 'relative', cursor: 'pointer',
                       background: isToday ? OTTI.coral : (met ? OTTI.green : OTTI.navyTint),
                     }}>
                  {met && (
                    <div style={{
                      position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)',
                      width: 18, height: 18, borderRadius: 9, background: OTTI.green,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {Icon.check('#fff', 12)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Target line — overlays the bars at the right percentage */}
          <div style={{
            position: 'absolute', left: 0, right: 0,
            bottom: `${(DAILY_TARGET_MIN / maxScale) * 100}%`,
            borderTop: `2px dashed ${OTTI.navy}`, opacity: 0.3, pointerEvents: 'none',
          }} />
        </div>

        {/* Weekday labels — separate row, aligned with bars via matching flex+gap */}
        <div style={{ marginTop: 8, display: 'flex', gap: 6 }}>
          {labels.map((l, i) => {
            const isToday = i === WEEK_MINUTES.length - 1;
            return (
              <div key={i} style={{
                flex: 1, textAlign: 'center',
                fontSize: 11, fontWeight: 600,
                color: isToday ? OTTI.coral : OTTI.ink3,
              }}>{l}</div>
            );
          })}
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 16, fontSize: 11, color: OTTI.ink3, fontWeight: 500, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.green }} />Goal met</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.coral }} />Today</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 12, borderTop: `1.5px dashed ${OTTI.navy}`, opacity: 0.5 }} />{fmtHm(DAILY_TARGET_MIN)} target</div>
        </div>
      </div>

      <InsightCallout text={<><strong>3-day streak</strong> of hitting Mia's daily goal.</>} onClick={() => nav('streak')} />
    </>
  );
}

// — Month tab — 30 thin bars + target line ————————————
function HistoryMonthView({ nav }) {
  const data = MONTH_MINUTES;
  const total = data.reduce((a, b) => a + b, 0);
  const avg = Math.round(total / data.length);
  const goalCount = data.filter(m => m >= DAILY_TARGET_MIN).length;
  const maxScale = Math.max(DAILY_TARGET_MIN, ...data) * 1.15;

  // 5 evenly-spaced x-axis ticks across 30 bars. Labels are dates.
  const tickIndices = [0, 7, 14, 21, 29];

  return (
    <>
      <div style={{ marginTop: 18, background: '#fff', borderRadius: 24, padding: '20px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600 }}>30-day average</div>
            <div style={{ fontSize: 34, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>
              {fmtHm(avg)}
            </div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.greenDark, background: OTTI.greenSoft, padding: '4px 10px', borderRadius: 12, whiteSpace: 'nowrap' }}>
            {goalCount} of {data.length} days at goal
          </div>
        </div>

        {/* Chart */}
        <div style={{ marginTop: 22, position: 'relative', height: 140 }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: 2, alignItems: 'flex-end' }}>
            {data.map((m, i) => {
              const met = m >= DAILY_TARGET_MIN;
              const missed = m === 0;
              const pct = (m / maxScale) * 100;
              return (
                <div key={i} aria-label={`Day ${i + 1}: ${fmtHm(m)}`} style={{
                  flex: 1,
                  height: missed ? 4 : `${pct}%`,
                  minHeight: missed ? 4 : 2,
                  borderRadius: 2,
                  background: missed ? OTTI.coral : (met ? OTTI.green : OTTI.navyTint),
                  opacity: missed ? 0.6 : 1,
                }} />
              );
            })}
          </div>
          {/* Target line */}
          <div style={{
            position: 'absolute', left: 0, right: 0,
            bottom: `${(DAILY_TARGET_MIN/maxScale)*100}%`,
            borderTop: `2px dashed ${OTTI.navy}`, opacity: 0.3,
          }} />
        </div>

        {/* Date axis */}
        <div style={{ marginTop: 8, position: 'relative', height: 16 }}>
          {tickIndices.map(idx => {
            const daysAgo = data.length - 1 - idx;
            const isFirst = idx === tickIndices[0];
            const isLast = idx === tickIndices[tickIndices.length - 1];
            return (
              <div key={idx} style={{
                position: 'absolute',
                left: `${(idx / (data.length - 1)) * 100}%`,
                transform: isFirst ? 'translateX(0)' : isLast ? 'translateX(-100%)' : 'translateX(-50%)',
                fontSize: 10, color: OTTI.ink3, fontWeight: 600,
                fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
              }}>
                {daysAgo === 0 ? 'Today' : dateLabelDaysAgo(daysAgo)}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 12, fontSize: 11, color: OTTI.ink3, fontWeight: 500, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.green }} />Goal met</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.navyTint }} />Below goal</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.coral, opacity: 0.6 }} />Missed</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 12, borderTop: `1.5px dashed ${OTTI.navy}`, opacity: 0.5 }} />{fmtHm(DAILY_TARGET_MIN)} target</div>
        </div>
      </div>

      <InsightCallout text={`Mia hit her goal on ${goalCount} of the last ${data.length} days.`} />
    </>
  );
}

// — Insight callout — shared across tabs ————————————
function InsightCallout({ text, onClick }) {
  return (
    <div onClick={onClick} style={{
      marginTop: 14, background: OTTI.sunSoft, borderRadius: 18, padding: '12px 16px',
      display: 'flex', alignItems: 'center', gap: 12,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill={OTTI.sun}>
        <path d="M12 2c1 4 4 6 4 10a4 4 0 11-8 0c0-1.5 1-2.5 1-4-1 0-2-1-2-3 2-1 4-2 5-3z"/>
      </svg>
      <div style={{ flex: 1, fontSize: 14, color: OTTI.navyDeep, lineHeight: 1.4 }}>{text}</div>
      {onClick && Icon.chev(OTTI.navy)}
    </div>
  );
}

// 09 — Edit entry
function ScreenEditEntry({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Edit session" close back={false}
              onClose={() => nav('history')}
              trailing={
                <button onClick={() => nav('history')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, color: OTTI.navy, fontFamily: SANS }}>
                  Save
                </button>
              } />
      <div style={{ padding: '8px 20px 0' }}>
        <div style={{ fontSize: 13, color: OTTI.ink3, fontWeight: 500 }}>Thursday, 14 May</div>

        <div style={{ marginTop: 14, background: '#fff', borderRadius: 22, padding: '20px 18px', border: `1px solid ${OTTI.lineSolid}`, textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: OTTI.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>Duration</div>
          <div style={{ marginTop: 6, fontSize: 46, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1.5, fontVariantNumeric: 'tabular-nums' }}>
            <span style={{ background: OTTI.navyTint, padding: '0 14px', borderRadius: 12 }}>2</span>
            <span style={{ fontSize: 24, color: OTTI.ink3, padding: '0 6px' }}>h</span>
            <span style={{ background: OTTI.navyTint, padding: '0 14px', borderRadius: 12 }}>35</span>
            <span style={{ fontSize: 24, color: OTTI.ink3, padding: '0 6px' }}>m</span>
          </div>
        </div>

        <div style={{ marginTop: 14, background: '#fff', borderRadius: 22, padding: '4px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
          {[
            { l: 'Start', v: '12:30 PM' },
            { l: 'End', v: '3:05 PM' },
            { l: 'Tag', v: 'Park, lunch' },
          ].map((row, i, arr) => (
            <div key={row.l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 54, borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none', cursor: 'pointer' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: OTTI.ink }}>{row.l}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: OTTI.navy, fontWeight: 600, fontSize: 15 }}>{row.v}{Icon.chev(OTTI.ink4)}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, background: '#fff', borderRadius: 22, padding: '14px 16px', border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600, marginBottom: 6 }}>Note (optional)</div>
          <div style={{ fontSize: 15, color: OTTI.ink, lineHeight: 1.45 }}>
            Took processor off briefly during the slide — clipped it back on after.
          </div>
        </div>

        <button onClick={() => nav('emptyHistory')} style={{
          marginTop: 18, height: 52, width: '100%', borderRadius: 26, background: 'transparent',
          border: `1.5px solid ${OTTI.coralSoft}`, color: OTTI.coral, fontWeight: 700, fontSize: 15, fontFamily: SANS,
          cursor: 'pointer',
        }}>
          Delete this session
        </button>
      </div>
    </Phone>
  );
}

// 23 — Empty history
function ScreenEmptyHistory({ nav }) {
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
            <Btn onClick={() => nav('logSession')}>Log Mia's first session</Btn>
          </div>
          <div style={{ marginTop: 8 }}>
            <Btn kind="ghost" size="md" onClick={() => nav('notifPermission')}>Or set up a reminder</Btn>
          </div>
        </div>
      </div>
      <TabBar active="history" nav={nav} />
    </Phone>
  );
}

// 24 — Daily target met
function ScreenTargetMet({ nav }) {
  return (
    <Phone bg={OTTI.green} dark>
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
            <button onClick={() => nav('home')} style={{
              width: '100%', height: 52, border: 'none', cursor: 'pointer',
              background: 'transparent', color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: SANS,
            }}>Back to today</button>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// 25 — First-week streak
function ScreenStreak({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="" close back={false} onClose={() => nav('history')} />
      <div style={{ padding: '0 24px', textAlign: 'center' }}>
        <div style={{
          position: 'relative', marginTop: 16, height: 280, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        }}>
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
          <Btn kind="accent" onClick={() => nav('history')}>See Mia's week</Btn>
        </div>
      </div>
    </Phone>
  );
}

// — Custom tab — variable-length chart driven by a user-picked range ——

function HistoryCustomView({ nav, onOpenPicker }) {
  const { range } = useCustomRange();

  // Placeholder when no range is set (e.g. the user cancelled the auto-picker).
  if (!range) {
    return (
      <div style={{
        marginTop: 36, padding: '24px 18px', textAlign: 'center',
        background: '#fff', borderRadius: 20, border: `1px solid ${OTTI.lineSolid}`,
      }}>
        <div style={{ fontSize: 14, color: OTTI.ink2, lineHeight: 1.5 }}>
          Pick a date range to see Mia's wear time for any span you choose.
        </div>
        <button onClick={onOpenPicker} style={{
          marginTop: 14, height: 40, padding: '0 18px', borderRadius: 20,
          background: OTTI.navy, color: '#fff', border: 'none',
          fontFamily: SANS, fontSize: 14, fontWeight: 700, cursor: 'pointer',
        }}>Pick a range</button>
      </div>
    );
  }

  const daily = getDailyForRange(range.from, range.to);
  const dayCount = daily.length;
  const useWeekly = dayCount > 60;
  const weeks = useWeekly ? groupByWeek(daily) : null;
  const bars = useWeekly ? weeks.map(w => w.avgMinutes) : daily.map(d => d.minutes);
  const dates = useWeekly ? weeks.map(w => w.start) : daily.map(d => d.date);

  const totalMin = daily.reduce((s, d) => s + d.minutes, 0);
  const avg = dayCount > 0 ? Math.round(totalMin / dayCount) : 0;
  const goalCount = daily.filter(d => d.minutes >= DAILY_TARGET_MIN).length;
  const maxScale = Math.max(DAILY_TARGET_MIN, ...bars) * 1.15;
  const targetPctOfScale = (DAILY_TARGET_MIN / maxScale) * 100;

  const n = bars.length;
  const tickIndices = (() => {
    if (n <= 1) return [0];
    if (n <= 4) return Array.from({ length: n }, (_, i) => i);
    return [0, Math.floor((n - 1) * 0.25), Math.floor((n - 1) * 0.5), Math.floor((n - 1) * 0.75), n - 1];
  })();

  const fmtTick = useWeekly
    ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' })
    : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short' });

  return (
    <>
      {/* Range row — tap to reopen picker */}
      <div onClick={onOpenPicker} style={{
        marginTop: 14, padding: '10px 12px',
        background: '#fff', border: `1px solid ${OTTI.lineSolid}`, borderRadius: 12,
        display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
      }}>
        {Icon.calendar(OTTI.navy, 18)}
        <div style={{ flex: 1, fontSize: 13, fontWeight: 700, color: OTTI.navyDeep, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {formatRange(range.from, range.to)}
        </div>
        {Icon.chev(OTTI.ink4)}
      </div>

      {/* Chart card */}
      <div style={{ marginTop: 14, background: '#fff', borderRadius: 24, padding: '20px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, color: OTTI.ink3, fontWeight: 600 }}>Total wear time</div>
            <div style={{ fontSize: 30, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -1, marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>
              {fmtHm(totalMin)}
            </div>
            <div style={{ marginTop: 2, fontSize: 12, color: OTTI.ink3 }}>
              Avg {fmtHm(avg)} per day{useWeekly && ' · weekly bars'}
            </div>
          </div>
          <div style={{
            fontSize: 11, fontWeight: 700, color: OTTI.greenDark, background: OTTI.greenSoft,
            padding: '4px 10px', borderRadius: 12, whiteSpace: 'nowrap',
          }}>
            {goalCount} of {dayCount} at goal
          </div>
        </div>

        {/* Chart */}
        <div style={{ marginTop: 22, position: 'relative', height: 140 }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: useWeekly ? 4 : 2, alignItems: 'flex-end' }}>
            {bars.map((m, i) => {
              const met = m >= DAILY_TARGET_MIN;
              const missed = m === 0;
              const pct = (m / maxScale) * 100;
              return (
                <div key={i} aria-label={`${fmtTick.format(dates[i])}: ${fmtHm(m)}`} style={{
                  flex: 1, height: missed ? 4 : `${pct}%`,
                  minHeight: missed ? 4 : 2, borderRadius: 2,
                  background: missed ? OTTI.coral : (met ? OTTI.green : OTTI.navyTint),
                  opacity: missed ? 0.6 : 1,
                }} />
              );
            })}
          </div>
          <div style={{
            position: 'absolute', left: 0, right: 0,
            bottom: `${targetPctOfScale}%`,
            borderTop: `2px dashed ${OTTI.navy}`, opacity: 0.3, pointerEvents: 'none',
          }} />
        </div>

        {/* Date axis */}
        <div style={{ marginTop: 8, position: 'relative', height: 16 }}>
          {tickIndices.map(idx => {
            const isFirst = idx === tickIndices[0];
            const isLast = idx === tickIndices[tickIndices.length - 1];
            return (
              <div key={idx} style={{
                position: 'absolute',
                left: `${(idx / Math.max(n - 1, 1)) * 100}%`,
                transform: isFirst ? 'translateX(0)' : isLast ? 'translateX(-100%)' : 'translateX(-50%)',
                fontSize: 10, color: OTTI.ink3, fontWeight: 600,
                fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap',
              }}>{fmtTick.format(dates[idx])}</div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ marginTop: 14, display: 'flex', gap: 12, fontSize: 11, color: OTTI.ink3, fontWeight: 500, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.green }} />Goal met</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.navyTint }} />Below goal</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 9, height: 9, borderRadius: 2, background: OTTI.coral, opacity: 0.6 }} />Missed</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><div style={{ width: 12, borderTop: `1.5px dashed ${OTTI.navy}`, opacity: 0.5 }} />{fmtHm(DAILY_TARGET_MIN)} target</div>
        </div>
      </div>

      <InsightCallout text={`Mia hit her goal on ${goalCount} of ${dayCount} days in this range.`} />
    </>
  );
}

// — DateRangePickerSheet — bottom sheet with two native date inputs ——

function DateRangePickerSheet({ initial, onCancel, onConfirm }) {
  const today = startOfDay(new Date());
  const todayIso = isoDate(today);
  const earliest = new Date(today);
  earliest.setDate(earliest.getDate() - (TOTAL_HISTORY_DAYS - 1));
  const earliestIso = isoDate(earliest);

  const defaultFrom = (() => {
    if (initial && initial.from) return initial.from;
    const d = new Date(today);
    d.setDate(d.getDate() - 14);
    return isoDate(d);
  })();
  const defaultTo = (initial && initial.to) || todayIso;

  const [from, setFrom] = React.useState(defaultFrom);
  const [to, setTo] = React.useState(defaultTo);
  const [error, setError] = React.useState('');

  function handleConfirm() {
    if (!from || !to) { setError('Please pick both a start and end date.'); return; }
    if (parseIsoDate(from) > parseIsoDate(to)) { setError('Start date must be on or before the end date.'); return; }
    onConfirm({ from, to });
  }

  const dateInputStyle = (filled) => ({
    width: '100%', height: 50, borderRadius: 14,
    background: '#fff',
    border: `1.5px solid ${filled ? OTTI.navy : OTTI.lineSolid}`,
    padding: '0 16px', fontSize: 16, fontWeight: 500, color: filled ? OTTI.ink : OTTI.ink3,
    fontFamily: SANS, outline: 'none', boxSizing: 'border-box',
  });

  return (
    <>
      <div onClick={onCancel} style={{
        position: 'absolute', inset: 0, background: 'rgba(12,33,80,0.45)',
        backdropFilter: 'blur(2px)', zIndex: 30, cursor: 'pointer',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#fff', borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '20px 24px 32px', zIndex: 40, fontFamily: SANS,
        boxShadow: '0 -20px 40px rgba(0,0,0,0.1)',
      }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: OTTI.lineSolid, margin: '0 auto 16px' }} />
        <div style={{ fontSize: 22, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.3 }}>Select date range</div>
        <div style={{ marginTop: 4, fontSize: 13, color: OTTI.ink2 }}>
          Pick a start and end date for your custom history view.
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>From</div>
          <input type="date" value={from} onChange={(e) => setFrom(e.target.value)}
                 min={earliestIso} max={todayIso} style={dateInputStyle(!!from)} />
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: OTTI.ink2, marginBottom: 6 }}>To</div>
          <input type="date" value={to} onChange={(e) => setTo(e.target.value)}
                 min={earliestIso} max={todayIso} style={dateInputStyle(!!to)} />
        </div>

        {error && (
          <div style={{ marginTop: 10, fontSize: 12, color: OTTI.coral, fontWeight: 500 }}>{error}</div>
        )}

        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn onClick={handleConfirm}>Show range</Btn>
          <Btn kind="ghost" onClick={onCancel}>Cancel</Btn>
        </div>
      </div>
    </>
  );
}

// — ExportSheet — radios + email field + simulated send ——

function HistoryRadioRow({ label, detail, checked, onChange, disabled, isLast }) {
  return (
    <div
      onClick={() => { if (!disabled && !checked) onChange(); }}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 14px',
        borderBottom: isLast ? 'none' : `1px solid ${OTTI.lineSolid}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <div style={{
        width: 22, height: 22, borderRadius: 11, flexShrink: 0,
        border: (checked && !disabled) ? 'none' : `1.5px solid ${OTTI.ink4}`,
        background: (checked && !disabled) ? OTTI.navy : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {checked && !disabled && <div style={{ width: 8, height: 8, borderRadius: 4, background: '#fff' }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{label}</div>
        {detail && (
          <div style={{
            fontSize: 12, color: OTTI.ink3, marginTop: 1,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{detail}</div>
        )}
      </div>
    </div>
  );
}

function ExportSheet({ onClose, onSent, customRangeAvailable }) {
  const { prefs, set } = useExportPrefs();
  const { user } = useCurrentUser();
  const { range: customRange } = useCustomRange();

  // Email field — persistent, but first open prefills from currentUser.
  const initialEmail = prefs.email || user.email;
  const [emailDraft, setEmailDraft] = React.useState(initialEmail);
  const [error, setError] = React.useState('');
  const [sending, setSending] = React.useState(false);

  // Custom range forces PDF; switching away resets back to CSV default.
  React.useEffect(() => {
    if (prefs.rangePreset === 'custom' && prefs.format !== 'pdf') set({ format: 'pdf' });
  }, [prefs.rangePreset]); // eslint-disable-line

  // If Custom is no longer available but it's still selected, fall back.
  React.useEffect(() => {
    if (!customRangeAvailable && prefs.rangePreset === 'custom') set({ rangePreset: 'last30', format: 'csv' });
  }, [customRangeAvailable]); // eslint-disable-line

  function commitEmail() {
    const trimmed = (emailDraft || '').trim();
    setEmailDraft(trimmed);
    if (trimmed !== prefs.email) set({ email: trimmed });
  }

  function handleSend() {
    commitEmail();
    if (!isValidEmail(emailDraft)) { setError('Please enter a valid email address'); return; }
    setError('');
    setSending(true);
    setTimeout(() => {
      setSending(false);
      onSent(emailDraft.trim());
    }, 1000);
  }

  const rangeOptions = [
    { value: 'last7',    label: 'Last 7 days' },
    { value: 'last30',   label: 'Last 30 days' },
    { value: 'last90',   label: 'Last 90 days' },
    { value: 'allTime',  label: 'All time' },
    {
      value: 'custom',
      label: 'Custom range',
      disabled: !customRangeAvailable,
      detail: customRangeAvailable && customRange
        ? formatRange(customRange.from, customRange.to)
        : 'Open Custom tab first',
    },
  ];

  return (
    <>
      <div onClick={sending ? undefined : onClose} style={{
        position: 'absolute', inset: 0, background: 'rgba(12,33,80,0.45)',
        backdropFilter: 'blur(2px)', zIndex: 30,
        cursor: sending ? 'default' : 'pointer',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#fff', borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '20px 22px 28px', zIndex: 40, fontFamily: SANS,
        boxShadow: '0 -20px 40px rgba(0,0,0,0.1)',
        maxHeight: '88%', overflow: 'auto',
      }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: OTTI.lineSolid, margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.3 }}>Export history</div>
          <button onClick={onClose} aria-label="Close" disabled={sending} style={{
            width: 32, height: 32, borderRadius: 16, border: 'none',
            cursor: sending ? 'not-allowed' : 'pointer',
            background: OTTI.navyTint, padding: 0, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: sending ? 0.5 : 1,
          }}>{Icon.close(OTTI.navy, 14)}</button>
        </div>
        <div style={{ marginTop: 4, fontSize: 13, color: OTTI.ink2 }}>
          Send Mia's wear-time history to an email address.
        </div>

        {/* Date range */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Date range</div>
          <div style={{ background: OTTI.cream, borderRadius: 14, overflow: 'hidden' }}>
            {rangeOptions.map((opt, i, arr) => (
              <HistoryRadioRow
                key={opt.value}
                label={opt.label}
                detail={opt.detail}
                disabled={!!opt.disabled || sending}
                checked={prefs.rangePreset === opt.value}
                onChange={() => set({ rangePreset: opt.value })}
                isLast={i === arr.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Format */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Format</div>
          <div style={{ background: OTTI.cream, borderRadius: 14, overflow: 'hidden' }}>
            <HistoryRadioRow
              label="CSV"
              detail={prefs.rangePreset === 'custom' ? 'Not available for Custom range' : undefined}
              disabled={prefs.rangePreset === 'custom' || sending}
              checked={prefs.format === 'csv' && prefs.rangePreset !== 'custom'}
              onChange={() => set({ format: 'csv' })}
            />
            <HistoryRadioRow
              label="PDF"
              detail={prefs.rangePreset === 'custom' ? 'Required for Custom range exports' : undefined}
              disabled={sending}
              checked={prefs.format === 'pdf' || prefs.rangePreset === 'custom'}
              onChange={() => set({ format: 'pdf' })}
              isLast
            />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Email</div>
          <input
            type="email"
            value={emailDraft}
            onChange={(e) => setEmailDraft(e.target.value)}
            onBlur={commitEmail}
            placeholder="you@example.com"
            disabled={sending}
            style={{
              width: '100%', height: 50, borderRadius: 14,
              background: '#fff',
              border: `1.5px solid ${error ? OTTI.coral : (emailDraft ? OTTI.navy : OTTI.lineSolid)}`,
              padding: '0 16px', fontSize: 16, fontWeight: 500, color: OTTI.ink,
              fontFamily: SANS, outline: 'none', boxSizing: 'border-box',
            }}
          />
          {error && (
            <div style={{ marginTop: 6, fontSize: 12, color: OTTI.coral, fontWeight: 500 }}>{error}</div>
          )}
        </div>

        {/* Actions */}
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Btn onClick={handleSend} style={{ opacity: sending ? 0.6 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}>
            {sending ? 'Sending…' : 'Send export'}
          </Btn>
          <Btn kind="ghost" onClick={onClose}>Cancel</Btn>
        </div>
      </div>
    </>
  );
}

Object.assign(window, {
  ScreenHome, ScreenLogSession, ScreenHistory, ScreenEditEntry,
  ScreenEmptyHistory, ScreenTargetMet, ScreenStreak,
});
