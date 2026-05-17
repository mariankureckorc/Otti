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
  const [freq, setFreq] = React.useState(0);
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Reminders" onBack={() => nav('profile')} />
      <div style={{ padding: '0 20px' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '16px 18px', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', gap: 14 }}>
          <Mascot size={48} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: OTTI.ink }}>Reminders</div>
            <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>On — quiet 8pm to 7am</div>
          </div>
          <Toggle on />
        </div>

        <div style={{ marginTop: 22, fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 4px' }}>How often</div>
        <div style={{ marginTop: 8, background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}`, overflow: 'hidden' }}>
          {[
            { l: 'Only if Mia is behind goal',    d: 'A gentle check-in around 4pm' },
            { l: 'Twice a day',                   d: 'Morning and mid-afternoon' },
            { l: 'Every 2 hours during day',      d: 'For those big catch-up days' },
          ].map((opt, i, arr) => {
            const sel = i === freq;
            return (
              <div key={i} onClick={() => setFreq(i)} style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', borderBottom: i < arr.length - 1 ? `1px solid ${OTTI.lineSolid}` : 'none', gap: 14, cursor: 'pointer' }}>
                <div style={{
                  width: 22, height: 22, borderRadius: 11,
                  border: sel ? 'none' : `1.5px solid ${OTTI.ink4}`,
                  background: sel ? OTTI.navy : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {sel && <div style={{ width: 8, height: 8, borderRadius: 4, background: '#fff' }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{opt.l}</div>
                  <div style={{ fontSize: 12, color: OTTI.ink3, marginTop: 1 }}>{opt.d}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 22, fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 4px' }}>Quiet hours</div>
        <div style={{ marginTop: 8, background: '#fff', borderRadius: 18, border: `1px solid ${OTTI.lineSolid}`, padding: '4px 4px' }}>
          {[
            { l: 'From', v: '8:00 PM' },
            { l: 'To', v: '7:00 AM' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 14px', borderBottom: i === 0 ? `1px solid ${OTTI.lineSolid}` : 'none' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: OTTI.ink }}>{r.l}</div>
              <div style={{
                padding: '6px 14px', background: OTTI.navyTint, borderRadius: 10,
                fontSize: 14, fontWeight: 700, color: OTTI.navyDeep, fontVariantNumeric: 'tabular-nums',
              }}>{r.v}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 14, padding: '0 4px', fontSize: 12, color: OTTI.ink3, lineHeight: 1.5 }}>
          Otti will never send you reminders between these hours.
        </div>
      </div>
    </Phone>
  );
}

// 12 — Forum landing
function ScreenForum({ nav }) {
  const categories = [
    { l: 'Getting started', c: 64, color: OTTI.navyTint, fg: OTTI.navy },
    { l: 'Tips & tricks',  c: 142, color: OTTI.greenSoft, fg: OTTI.greenDark },
    { l: 'Nursery & school', c: 38, color: OTTI.sunSoft, fg: '#A67B14' },
    { l: 'Just venting',    c: 91, color: OTTI.coralSoft, fg: OTTI.coral },
  ];
  const threads = [
    { pinned: true, who: 'SJID team', avatar: 'S', avBg: OTTI.navy, fg: '#fff', when: 'Pinned',
      title: 'Welcome — how this space works', reply: 12, like: 86 },
    { who: 'Priya · mum to Arun (3)', avatar: 'P', avBg: OTTI.sunSoft, fg: OTTI.navyDeep, when: '2h ago',
      title: 'Anyone else find swim-pool weeks hard to balance?', reply: 18, like: 24 },
    { who: 'Tom · dad to Eliza (5)', avatar: 'T', avBg: OTTI.greenSoft, fg: OTTI.navyDeep, when: '6h ago',
      title: 'Magnet kept popping off — a fix that worked for us', reply: 31, like: 52 },
    { who: 'Hannah · mum to Theo (2)', avatar: 'H', avBg: OTTI.coralSoft, fg: OTTI.navyDeep, when: 'Yesterday',
      title: 'Sleep routine without the processors?', reply: 9, like: 14 },
  ];
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>Community</div>
          <button onClick={() => nav('newPost')} style={{
            height: 38, padding: '0 14px', borderRadius: 19, background: OTTI.navy, color: '#fff',
            border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: 13, fontFamily: SANS,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {Icon.plus('#fff', 14)} New post
          </button>
        </div>
        <div style={{ marginTop: 2, fontSize: 13, color: OTTI.ink3 }}>A private space for SJID parents.</div>

        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {categories.map(c => (
            <div key={c.l} style={{ background: c.color, borderRadius: 16, padding: '12px 14px', cursor: 'pointer' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: c.fg }}>{c.l}</div>
              <div style={{ fontSize: 12, color: OTTI.ink2, marginTop: 2 }}>{c.c} threads</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase' }}>Recent</div>
          <div style={{ fontSize: 12, color: OTTI.navy, fontWeight: 600, cursor: 'pointer' }}>See all</div>
        </div>

        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {threads.map((t, i) => (
            <div key={i} onClick={() => nav('thread')} style={{ background: '#fff', borderRadius: 16, padding: '14px 14px', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', gap: 12, cursor: 'pointer' }}>
              <div style={{ width: 38, height: 38, borderRadius: 19, background: t.avBg, color: t.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                {t.avatar}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {t.pinned && <span style={{ fontSize: 10, fontWeight: 700, color: OTTI.coral, background: OTTI.coralSoft, padding: '1px 6px', borderRadius: 5, letterSpacing: 0.4, textTransform: 'uppercase' }}>Pinned</span>}
                  <div style={{ fontSize: 11, color: OTTI.ink3, fontWeight: 600 }}>{t.who} · {t.when}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: OTTI.ink, marginTop: 3, lineHeight: 1.3 }}>{t.title}</div>
                <div style={{ marginTop: 6, display: 'flex', gap: 14, fontSize: 12, color: OTTI.ink3, fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{Icon.comment(OTTI.ink3, 14)} {t.reply}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{Icon.heart(OTTI.ink3, 14)} {t.like}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 100 }} />
      <TabBar active="forum" nav={nav} />
    </Phone>
  );
}

// 13 — Thread view
function ScreenThread({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="Tips & tricks" onBack={() => nav('forum')} />
      <div style={{ padding: '0 20px', paddingBottom: 80 }}>
        <div style={{ background: '#fff', borderRadius: 22, padding: '18px 18px', border: `1px solid ${OTTI.lineSolid}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 20, background: OTTI.greenSoft, color: OTTI.navyDeep, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>T</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: OTTI.ink }}>Tom</div>
              <div style={{ fontSize: 12, color: OTTI.ink3 }}>Dad to Eliza, 5 · bilateral · 6h ago</div>
            </div>
          </div>
          <div style={{ marginTop: 14, fontSize: 19, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.3, lineHeight: 1.25 }}>
            Magnet kept popping off — a fix that worked for us
          </div>
          <div style={{ marginTop: 10, fontSize: 14, color: OTTI.ink, lineHeight: 1.55 }}>
            Eliza's right magnet wouldn't stay on for more than half an hour, especially during dance class. Our audi suggested going one strength up — but actually the thing that helped most was a fabric headband from a local maker.
            <br/><br/>
            Posting in case it helps anyone in the same boat. Happy to share the seller.
          </div>
          <div style={{ marginTop: 14, display: 'flex', gap: 18, fontSize: 13, fontWeight: 600 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: OTTI.coral, cursor: 'pointer' }}>{Icon.heart(OTTI.coral, 18, true)} 52</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: OTTI.ink2 }}>{Icon.comment(OTTI.ink2, 18)} 31 replies</span>
          </div>
        </div>

        <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 4px' }}>Replies</div>

        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { who: 'Priya', sub: 'mum to Arun, 3', avBg: OTTI.sunSoft, when: '4h',
              text: "Yes! We use a sweatband for swimming-pool weeks. Game changer. Which seller is yours?", like: 8 },
            { who: 'Hannah', sub: 'mum to Theo, 2', avBg: OTTI.coralSoft, when: '2h',
              text: "Just ordered one — thank you. We've been losing a magnet a fortnight.", like: 3 },
            { who: 'SJID team', sub: 'team', avBg: OTTI.navy, avFg: '#fff', when: '1h',
              text: "Good tip Tom. Headbands and clips are an underrated retention helper — happy to discuss at your next appointment.", like: 12, official: true },
          ].map((r, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '14px 14px', border: r.official ? `1px solid ${OTTI.navy}` : `1px solid ${OTTI.lineSolid}`, display: 'flex', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: r.avBg, color: r.avFg || OTTI.navyDeep, fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {r.who[0]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: OTTI.ink }}>{r.who}</span>
                  {r.official && <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', background: OTTI.navy, padding: '2px 6px', borderRadius: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>SJID</span>}
                  <span style={{ fontSize: 11, color: OTTI.ink3 }}>· {r.sub} · {r.when}</span>
                </div>
                <div style={{ marginTop: 6, fontSize: 13, color: OTTI.ink, lineHeight: 1.5 }}>{r.text}</div>
                <div style={{ marginTop: 8, display: 'flex', gap: 14, fontSize: 12, color: OTTI.ink3, fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>{Icon.heart(OTTI.ink3, 13)} {r.like}</span>
                  <span style={{ cursor: 'pointer' }}>Reply</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px 30px',
        background: 'rgba(251,247,238,0.96)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderTop: `1px solid ${OTTI.line}`, display: 'flex', alignItems: 'center', gap: 10, zIndex: 10,
      }}>
        <div onClick={() => nav('newPost')} style={{ flex: 1, height: 44, borderRadius: 22, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: 14, color: OTTI.ink3, cursor: 'pointer' }}>
          Write a reply…
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 22, background: OTTI.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </Phone>
  );
}

// 14 — New post composer
function ScreenNewPost({ nav }) {
  return (
    <Phone bg={OTTI.cream}>
      <Header title="New post" close back={false}
              onClose={() => nav('forum')}
              trailing={
                <button onClick={() => nav('forum')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 14, fontWeight: 700, color: OTTI.navy, fontFamily: SANS }}>
                  Post
                </button>
              } />
      <div style={{ padding: '0 20px' }}>
        <div style={{
          background: '#fff', borderRadius: 14, padding: '12px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          border: `1px solid ${OTTI.lineSolid}`, cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: OTTI.greenDark }} />
            <div style={{ fontSize: 14, fontWeight: 700, color: OTTI.navyDeep }}>Tips & tricks</div>
          </div>
          {Icon.chevDown()}
        </div>

        <div style={{ marginTop: 16, fontSize: 22, fontWeight: 700, color: OTTI.navyDeep, letterSpacing: -0.3, lineHeight: 1.3, padding: '0 4px' }}>
          A question about bath time
        </div>
        <div style={{ marginTop: 4, padding: '0 4px', fontSize: 13, color: OTTI.ink4 }}>Title</div>

        <div style={{ marginTop: 18, padding: '0 4px', fontSize: 15, color: OTTI.ink, lineHeight: 1.55, minHeight: 200 }}>
          Mia loves her bath, but she gets really frustrated when we take her processors off — she goes quiet and won't engage. Wondering how other families handle the wash routine, or whether there are waterproof covers people would recommend?
          <span style={{ color: OTTI.navy, fontWeight: 600 }}>|</span>
        </div>

        <div style={{ position: 'absolute', bottom: 76, left: 20, right: 20, background: OTTI.navyTint, borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 14, background: OTTI.sunSoft, color: OTTI.navyDeep, fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>S</div>
          <div style={{ flex: 1, fontSize: 12, color: OTTI.ink2 }}>
            Posting as <strong style={{ color: OTTI.ink }}>Sam, mum to Mia (4)</strong>
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: OTTI.navy, cursor: 'pointer' }}>Change</div>
        </div>

        <div style={{ position: 'absolute', bottom: 30, left: 20, right: 20, display: 'flex', gap: 8 }}>
          {['Aa','📎','🙂'].map((t, i) => (
            <div key={i} style={{ width: 40, height: 40, borderRadius: 12, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: OTTI.ink2, fontWeight: 700, cursor: 'pointer' }}>{t}</div>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ height: 40, padding: '0 16px', borderRadius: 20, background: OTTI.navyTint, color: OTTI.navy, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center' }}>
            Community guidelines
          </div>
        </div>
      </div>
    </Phone>
  );
}

// 15 — Article list
function ScreenArticleList({ nav }) {
  const featured = {
    cat: 'Early years',
    title: "What 'auditory brain time' really means",
    read: '6 min read',
  };
  const articles = [
    { cat: 'Devices', color: OTTI.greenSoft, title: 'Cleaning your processor: a 30-second routine', read: '3 min' },
    { cat: 'Speech',  color: OTTI.coralSoft, title: 'Listening games for the kitchen table', read: '5 min' },
    { cat: 'School',  color: OTTI.sunSoft,   title: "Talking to Mia's teacher about FM systems", read: '7 min' },
    { cat: 'Family',  color: OTTI.navyTint,  title: 'When siblings ask "why does Mia have those?"', read: '4 min' },
  ];
  return (
    <Phone bg={OTTI.cream}>
      <div style={{ paddingTop: 60, padding: '60px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: OTTI.navyDeep, letterSpacing: -0.5 }}>Learn</div>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: '#fff', border: `1px solid ${OTTI.lineSolid}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke={OTTI.navy} strokeWidth="2"/><path d="M21 21l-4.5-4.5" stroke={OTTI.navy} strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
        </div>
        <div style={{ fontSize: 13, color: OTTI.ink3, marginTop: 2 }}>Hand-picked by SJID specialists.</div>

        <div style={{ marginTop: 18, display: 'flex', gap: 6, overflowX: 'hidden' }}>
          {['All', 'Early years', 'Devices', 'Speech', 'School', 'Family'].map((c, i) => (
            <div key={c} style={{
              height: 32, padding: '0 14px', borderRadius: 16, flexShrink: 0, cursor: 'pointer',
              background: i === 0 ? OTTI.navy : '#fff',
              color: i === 0 ? '#fff' : OTTI.ink2,
              border: i === 0 ? 'none' : `1px solid ${OTTI.lineSolid}`,
              fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center',
            }}>{c}</div>
          ))}
        </div>

        <div onClick={() => nav('articleDetail')} style={{
          marginTop: 18, height: 200, borderRadius: 24, position: 'relative', overflow: 'hidden', cursor: 'pointer',
          background: `linear-gradient(160deg, ${OTTI.navyMid} 0%, ${OTTI.navy} 60%, ${OTTI.navyDeep} 100%)`,
          padding: '18px 18px',
        }}>
          <div style={{ position: 'absolute', right: -20, bottom: -20, opacity: 0.5 }}>
            <Mascot size={170} />
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: OTTI.green, letterSpacing: 0.6, textTransform: 'uppercase' }}>Featured · {featured.cat}</span>
            <div style={{ marginTop: 10, fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.25, letterSpacing: -0.4, maxWidth: 220 }}>
              {featured.title}
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{featured.read}</div>
          </div>
        </div>

        <div style={{ marginTop: 16, fontSize: 12, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.6, textTransform: 'uppercase', padding: '0 4px' }}>For Mia, age 4</div>
        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {articles.map((a, i) => (
            <div key={i} onClick={() => nav('articleDetail')} style={{ background: '#fff', borderRadius: 16, padding: 12, border: `1px solid ${OTTI.lineSolid}`, display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ width: 18, height: 18, borderRadius: 4, background: 'rgba(255,255,255,0.7)' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: OTTI.ink3, letterSpacing: 0.4, textTransform: 'uppercase' }}>{a.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: OTTI.ink, marginTop: 2, lineHeight: 1.3 }}>{a.title}</div>
                <div style={{ fontSize: 11, color: OTTI.ink3, marginTop: 4 }}>{a.read} read</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 100 }} />
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
  ScreenForum, ScreenThread, ScreenNewPost,
  ScreenArticleList, ScreenArticleDetail,
});
