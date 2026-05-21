/* Reminders + Community + Articles — clickable */

// 10 — Notification permission
function ScreenNotifPermission({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 80, padding: '80px 28px 0', textAlign: 'center' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Mascot size={150} />
          <div style={{
            position: 'absolute', top: -8, right: -16, width: 56, height: 56, borderRadius: 28,
            background: OTTI.sun, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 16px rgba(245, 197, 87, 0.45)',
            transform: 'rotate(8deg)',
          }}>
            {Icon.bell(OTTI.navyDeep, 28)}
          </div>
          <div style={{ position: 'absolute', top: -8, right: -16, width: 56, height: 56, borderRadius: 28, border: `2px solid ${OTTI.sun}`, opacity: 0.4, transform: 'scale(1.5)' }} />
        </div>

        <div style={{ marginTop: 32, fontSize: 26, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.2 }}>
          A small nudge,<br/>at the right time.
        </div>
        <div style={{ marginTop: 14, fontSize: 15, color: OTTI.ink2, lineHeight: 1.55 }}>
          Otti can send gentle reminders if Mia's processors come off and the day's slipping behind. You choose when — and we'll stay quiet at night.
        </div>

        <div style={{
          marginTop: 26, background: '#fff', borderRadius: 18,
          padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
          textAlign: 'left', boxShadow: '0 8px 20px rgba(12,33,80,0.06)',
          border: `1px solid ${OTTI.lineSolid}`,
        }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: OTTI.navy, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Mascot size={28} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: OTTI.ink }}>Otti</div>
            <div style={{ fontSize: 13, color: OTTI.ink2, marginTop: 1 }}>Mia's a little behind today — about 3 more hours to go.</div>
          </div>
          <div style={{ fontSize: 11, color: OTTI.ink3, fontWeight: 500 }}>now</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 50, left: 28, right: 28 }}>
        <Btn onClick={() => nav('home')}>Turn on reminders</Btn>
        <div style={{ marginTop: 10 }}>
          <Btn kind="ghost" onClick={() => nav('home')}>Not right now</Btn>
        </div>
      </div>
    </Phone>
  );
}

// 11 — Reminder settings
function ScreenReminderSettings({ nav }) {
  const {
    masterEnabled, setMasterEnabled,
    reminders, addReminder, updateReminder, removeReminder, canAddMore,
    achievements, setAchievement,
    quietHours, setQuietHours,
  } = useParentPrefs();

  const achievementRows = [
    { key: 'goalMet',          l: 'Daily goal met',    d: 'Mascot celebrates with you' },
    { key: 'weeklyMilestones', l: 'Weekly milestones', d: 'First week, longest streak, etc.' },
    { key: 'weeklySummary',    l: 'Weekly summary',    d: 'Sundays at 7pm' },
  ];

  return (
    <Phone bg={OTTI.cream}>
      <Header title="Reminders" onBack={() => nav('profile')} />
      <div style={{ position: 'absolute', top: 96, bottom: 0, left: 0, right: 0, overflow: 'auto' }}>
        <div style={{ padding: '0 20px 40px' }}>
          {/* Master toggle */}
          <div style={{
            background: '#fff', borderRadius: 20, padding: '16px 18px',
            border: `1px solid ${OTTI.lineSolid}`,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <Mascot size={48} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: OTTI.ink }}>Reminders</div>
              <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>
                {masterEnabled
                  ? `On — quiet ${quietHours.from} to ${quietHours.to}`
                  : 'Off'}
              </div>
            </div>
            <Toggle on={masterEnabled} onChange={setMasterEnabled} />
          </div>

          {/* OTTI REMINDERS */}
          <div style={{ marginTop: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 8px 8px' }}>
              Otti reminders
            </div>
            <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}`, overflow: 'hidden' }}>
              {reminders.map((r, i, arr) => (
                <ReminderRow
                  key={r.id}
                  reminder={r}
                  canRemove={reminders.length > 1}
                  onUpdate={updateReminder}
                  onRemove={removeReminder}
                  isLast={i === arr.length - 1}
                />
              ))}
            </div>
            <button
              onClick={() => { if (canAddMore) addReminder(); }}
              disabled={!canAddMore}
              style={{
                marginTop: 10, width: '100%', height: 44, borderRadius: 14,
                background: canAddMore ? OTTI.navyTint : OTTI.lineSolid,
                color: canAddMore ? OTTI.navy : OTTI.ink4,
                border: 'none', cursor: canAddMore ? 'pointer' : 'not-allowed',
                fontFamily: SANS, fontSize: 14, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              {Icon.plus(canAddMore ? OTTI.navy : OTTI.ink4, 16)}
              Add a reminder
            </button>
            {!canAddMore && (
              <div style={{ marginTop: 6, padding: '0 8px', fontSize: 12, color: OTTI.ink3 }}>
                You've reached the maximum of {MAX_REMINDERS} reminders.
              </div>
            )}
          </div>

          {/* ACHIEVEMENTS */}
          <div style={{ marginTop: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 8px 8px' }}>
              Achievements
            </div>
            <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}`, overflow: 'hidden' }}>
              {achievementRows.map((row, i, arr) => (
                <div key={row.key} style={{
                  display: 'flex', alignItems: 'center', padding: '14px 16px',
                  borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none',
                  gap: 12,
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{row.l}</div>
                    <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 2 }}>{row.d}</div>
                  </div>
                  <Toggle on={achievements[row.key]} onChange={(v) => setAchievement(row.key, v)} />
                </div>
              ))}
            </div>
          </div>

          {/* QUIET HOURS */}
          <div style={{ marginTop: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 8px 8px' }}>
              Quiet hours
            </div>
            <div style={{ background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}`, padding: '4px 4px' }}>
              {[
                { key: 'from', l: 'From' },
                { key: 'to',   l: 'To'   },
              ].map((row, i, arr) => (
                <div key={row.key} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 12px',
                  borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink, paddingLeft: 4 }}>{row.l}</div>
                  <input
                    type="time"
                    value={quietHours[row.key]}
                    onChange={(e) => setQuietHours({ [row.key]: e.target.value })}
                    style={{
                      padding: '6px 12px', background: OTTI.navyTint, borderRadius: 10,
                      border: 'none', fontSize: 14, fontWeight: 700, color: OTTI.navyDeep,
                      fontVariantNumeric: 'tabular-nums', fontFamily: SANS,
                      outline: 'none',
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8, padding: '0 8px', fontSize: 12, color: OTTI.ink3, lineHeight: 1.5 }}>
              Otti will never send you reminders between these hours.
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// Single configurable reminder row — used by the OTTI REMINDERS list above.
function ReminderRow({ reminder, canRemove, onUpdate, onRemove, isLast }) {
  const [error, setError] = React.useState('');
  const [labelDraft, setLabelDraft] = React.useState(reminder.label);

  React.useEffect(() => { setLabelDraft(reminder.label); }, [reminder.label]);

  function handleTimeChange(newTime) {
    if (!newTime) return;
    const result = onUpdate(reminder.id, { time: newTime });
    if (result && result.ok === false && result.error === 'duplicate') {
      setError('You already have a reminder at this time');
    } else {
      setError('');
    }
  }

  function commitLabel() {
    const next = labelDraft.trim() || reminder.label;
    if (next !== reminder.label) onUpdate(reminder.id, { label: next });
    setLabelDraft(next);
  }

  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: isLast ? 'none' : `1px solid ${OTTI.lineSolid}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <input
          type="time"
          value={reminder.time}
          onChange={(e) => handleTimeChange(e.target.value)}
          aria-label="Reminder time"
          style={{
            width: 96, height: 36, borderRadius: 10,
            background: OTTI.navyTint, color: OTTI.navyDeep,
            border: 'none', padding: '0 10px',
            fontSize: 14, fontWeight: 700,
            fontFamily: SANS, fontVariantNumeric: 'tabular-nums',
            outline: 'none', flexShrink: 0,
          }}
        />
        <input
          type="text"
          value={labelDraft}
          onChange={(e) => setLabelDraft(e.target.value)}
          onBlur={commitLabel}
          onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.blur(); }}
          placeholder="Label"
          maxLength={20}
          aria-label="Reminder label"
          style={{
            flex: 1, height: 36, borderRadius: 10,
            background: '#fff', border: `1px solid ${OTTI.lineSolid}`,
            padding: '0 10px', fontSize: 14, color: OTTI.ink, fontWeight: 500,
            fontFamily: SANS, outline: 'none', minWidth: 0,
          }}
        />
        <Toggle
          on={reminder.enabled}
          onChange={(next) => onUpdate(reminder.id, { enabled: next })}
        />
        {canRemove && (
          <button
            onClick={() => onRemove(reminder.id)}
            aria-label="Remove reminder"
            style={{
              width: 28, height: 28, borderRadius: 14, border: 'none', cursor: 'pointer',
              background: OTTI.coralSoft,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, padding: 0,
            }}
          >{Icon.close(OTTI.coral, 14)}</button>
        )}
      </div>
      {error && (
        <div style={{ marginTop: 6, fontSize: 12, color: OTTI.coral, fontWeight: 500 }}>{error}</div>
      )}
    </div>
  );
}

// 12 — Community handoff to Hearing First
// No in-app forum; this single screen hands the user off to the external
// Hearing First community in the system browser.
const HEARING_FIRST_URL = 'https://www.hearingfirst.org/login?ReturnUrl=%2Ffamily';

function ScreenForum({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <div style={{
        paddingTop: 60, padding: '60px 28px 0',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: -28, borderRadius: '50%', background: OTTI.greenSoft, opacity: 0.5 }} />
          <div style={{ position: 'relative' }}><Mascot size={160} /></div>
        </div>

        <div style={{ marginTop: 28, fontSize: 26, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.2 }}>
          Find your community
        </div>

        <div style={{ marginTop: 14, fontSize: 15, color: OTTI.ink2, lineHeight: 1.55, maxWidth: 320 }}>
          Otti doesn't host its own parent community. Instead, we link you to <strong style={{ color: OTTI.ink }}>Hearing First</strong> — a trusted resource and community for families of children with hearing loss, where you can share experience, ask questions, and connect with parents on the same path.
        </div>

        <div style={{ marginTop: 22, width: '100%' }}>
          <a
            href={HEARING_FIRST_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              height: 56, borderRadius: 999, background: OTTI.navy, color: '#fff',
              fontFamily: SANS, fontSize: 17, fontWeight: 700, letterSpacing: -0.1,
              textDecoration: 'none', cursor: 'pointer', padding: '0 22px',
            }}
          >
            Open Hearing First Community
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M14 5h5v5M19 5l-9 9M10 5H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div style={{ marginTop: 12, fontSize: 13, color: OTTI.ink3, lineHeight: 1.5 }}>
          The community opens in your browser.
        </div>
      </div>
      <TabBar active="forum" nav={nav} />
    </Phone>
  );
}

// 13 — Learn (article list)
// Picture-led layout: title + search + category sections of full-width
// hero-image cards. No filter chips, no sort dropdowns, no advanced search.

const LEARN_CATEGORIES = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    pillBg: OTTI.navyTint,
    pillFg: OTTI.navy,
    articles: [
      {
        id: 'welcome',
        title: 'Welcome to Otti — Getting Started',
        readMin: 4,
        // mother + baby tender moment
        image: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=720&h=420&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 'daily-routine',
    name: 'Daily Routine',
    pillBg: OTTI.coralSoft,
    pillFg: OTTI.coral,
    articles: [
      {
        id: 'wear-time-routine',
        title: 'Building a Daily Wear-Time Routine',
        readMin: 5,
        // parent + child silhouette in warm light
        image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=720&h=420&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    pillBg: OTTI.sunSoft,
    pillFg: '#A67B14',
    articles: [
      {
        id: 'wont-keep-on',
        title: "When Your Child Won't Keep the Device On",
        readMin: 6,
        // parent + child hands — quiet, comforting
        image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=720&h=420&fit=crop&auto=format&q=80',
      },
    ],
  },
  {
    id: 'talking',
    name: 'Talking With Your Child',
    pillBg: OTTI.greenSoft,
    pillFg: OTTI.greenDark,
    articles: [
      {
        id: 'conversation-habits',
        title: 'Conversation Habits That Build Language',
        readMin: 4,
        // mother + baby looking at each other
        image: 'https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?w=720&h=420&fit=crop&auto=format&q=80',
      },
    ],
  },
];

function ScreenArticleList({ nav }) {
  const [query, setQuery] = React.useState('');

  const q = query.trim().toLowerCase();
  const visible = q === ''
    ? LEARN_CATEGORIES
    : LEARN_CATEGORIES
        .map(c => ({
          ...c,
          articles: c.articles.filter(a =>
            a.title.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
          ),
        }))
        .filter(c => c.articles.length > 0);

  return (
    <Phone bg={OTTI.cream}>
      {/* Internal scroll wrapper — keeps the TabBar below pinned to phone bottom */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, overflow: 'auto' }}>
        <div style={{ paddingTop: 70, padding: '70px 20px 0' }}>
          {/* Title */}
          <div style={{ fontSize: 30, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.6 }}>Learn</div>

          {/* Search bar */}
          <div style={{
            marginTop: 14, display: 'flex', alignItems: 'center', gap: 8,
            height: 44, borderRadius: 22, background: '#fff',
            border: `1px solid ${OTTI.lineSolid}`, padding: '0 14px',
            boxShadow: '0 1px 2px rgba(12,33,80,0.03)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="11" cy="11" r="7" stroke={OTTI.ink3} strokeWidth="2" />
              <path d="M21 21l-4.5-4.5" stroke={OTTI.ink3} strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              style={{
                flex: 1, height: '100%', border: 'none', outline: 'none',
                background: 'transparent', fontSize: 14, color: OTTI.ink,
                fontFamily: SANS, minWidth: 0,
              }}
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Clear search" style={{
                width: 24, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
                background: OTTI.navyTint, color: OTTI.navy,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, padding: 0,
              }}>{Icon.close(OTTI.navy, 12)}</button>
            )}
          </div>

          {/* Category sections */}
          {visible.length === 0 ? (
            <div style={{
              marginTop: 36, textAlign: 'center', color: OTTI.ink3, fontSize: 14, lineHeight: 1.5,
            }}>
              No articles match <strong style={{ color: OTTI.ink }}>"{query}"</strong>.
              <div style={{ marginTop: 4, fontSize: 12 }}>Try a different search term.</div>
            </div>
          ) : (
            visible.map(cat => (
              <div key={cat.id} style={{ marginTop: 24 }}>
                <div style={{
                  fontSize: 12, fontWeight: 700, color: OTTI.ink3,
                  letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 4px',
                }}>{cat.name}</div>
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {cat.articles.map(a => (
                    <article
                      key={a.id}
                      onClick={() => nav('articleDetail')}
                      style={{
                        background: '#fff', borderRadius: 20, overflow: 'hidden',
                        border: `1px solid ${OTTI.lineSolid}`,
                        boxShadow: '0 2px 10px rgba(12,33,80,0.05)',
                        cursor: 'pointer',
                      }}
                    >
                      {/* Hero image with neutral background while loading */}
                      <div style={{
                        width: '100%', height: 180, background: OTTI.navyTint,
                        position: 'relative', overflow: 'hidden',
                      }}>
                        <img
                          src={a.image}
                          alt={a.title}
                          loading="lazy"
                          onError={(e) => {
                            // graceful fallback if Unsplash blocks/rate-limits
                            e.currentTarget.src = `https://picsum.photos/seed/${a.id}/720/420`;
                          }}
                          style={{
                            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                          }}
                        />
                      </div>

                      {/* Card body */}
                      <div style={{ padding: '14px 16px 16px' }}>
                        <div style={{
                          display: 'inline-block', padding: '4px 10px', borderRadius: 999,
                          background: cat.pillBg, color: cat.pillFg,
                          fontSize: 11, fontWeight: 700, letterSpacing: 0.3,
                        }}>{cat.name}</div>
                        <div style={{
                          marginTop: 8, fontSize: 17, fontWeight: 700,
                          color: OTTI.navyDeep, lineHeight: 1.3, letterSpacing: -0.2,
                        }}>{a.title}</div>
                        {a.readMin != null && (
                          <div style={{ marginTop: 6, fontSize: 12, color: OTTI.ink3 }}>
                            {a.readMin} min read
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
        <div style={{ height: 110 }} />
      </div>

      <TabBar active="read" nav={nav} />
    </Phone>
  );
}

// 16 — Article detail
function ScreenArticleDetail({ nav }) {
  return (
    <Phone bg={'#fff'}>
      <div style={{
        height: 220, position: 'relative', overflow: 'hidden',
        background: `linear-gradient(160deg, ${OTTI.navyMid} 0%, ${OTTI.navyDeep} 100%)`,
      }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{ position: 'absolute', right: -10, bottom: -30, opacity: 0.55 }}>
            <Mascot size={200} />
          </div>
        </div>
        <div style={{ position: 'absolute', top: 56, left: 20, right: 20, display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => nav('articleList')} style={{
            width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(10px)', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.back('#fff', 20)}</button>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            {Icon.heart('#fff', 20)}
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 18, left: 20, right: 100 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: OTTI.green, letterSpacing: 0.6, textTransform: 'uppercase' }}>Early years · Featured</span>
        </div>
      </div>

      <div style={{ padding: '22px 24px 100px' }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5, lineHeight: 1.2 }}>
          What 'auditory brain time' really means
        </div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: OTTI.ink3 }}>
          <div style={{ width: 28, height: 28, borderRadius: 14, background: OTTI.navy, color: '#fff', fontWeight: 700, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>R</div>
          <div><strong style={{ color: OTTI.ink }}>Dr Rosie Calder</strong> · SJID Audiology · 6 min read</div>
        </div>

        <div style={{ marginTop: 18, fontSize: 15, color: OTTI.ink, lineHeight: 1.65 }}>
          When your audiologist talks about "wear time," they're really talking about brain time. Every hour a child spends listening with their implants on is an hour their auditory cortex is laying down patterns it can't lay down any other way.
        </div>

        <div style={{
          marginTop: 18, background: OTTI.cream, borderRadius: 16, padding: '16px 18px',
          borderLeft: `4px solid ${OTTI.green}`, fontSize: 15, color: OTTI.navyDeep, lineHeight: 1.5,
          fontWeight: 600,
        }}>
          "We aim for at least 10 hours of consistent wear by age 3 — the more the better, but never at the cost of a happy child."
        </div>

        <div style={{ marginTop: 18, fontSize: 15, color: OTTI.ink, lineHeight: 1.65 }}>
          A few things parents tell us help build that time naturally — without it feeling like a target on a chart.
        </div>

        <ul style={{ marginTop: 14, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            'Put implants on at breakfast, not later in the morning.',
            'Build a "magnet check" into nappy or potty trips.',
            'Have a backup processor ready for park days.',
          ].map((t, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: OTTI.ink, lineHeight: 1.5 }}>
              <div style={{ width: 22, height: 22, borderRadius: 11, background: OTTI.greenSoft, color: OTTI.greenDark, fontWeight: 800, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>{i+1}</div>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 20px 30px',
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${OTTI.line}`, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ flex: 1, fontSize: 12, color: OTTI.ink3 }}>4 of 6 articles in your reading list</div>
        <button onClick={() => nav('articleList')} style={{
          height: 44, padding: '0 22px', borderRadius: 22, background: OTTI.navy, color: '#fff',
          border: 'none', cursor: 'pointer', fontWeight: 700, fontFamily: SANS, fontSize: 14,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          Next article {Icon.chev('#fff', 14)}
        </button>
      </div>
    </Phone>
  );
}

Object.assign(window, {
  ScreenNotifPermission, ScreenReminderSettings,
  ScreenForum,
  ScreenArticleList, ScreenArticleDetail,
});
