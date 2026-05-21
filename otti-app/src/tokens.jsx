/*
 * Otti — design tokens + shared atomic components.
 * Ported from the design handoff; palette derived from the supplied logo.
 */

const OTTI = {
  navy:        '#163A78',
  navyDeep:    '#0C2150',
  navySoft:    '#273D7A',
  navyMid:     '#1F4F9D',
  navyTint:    '#E9EFFA',
  navyWash:    '#F2F5FB',
  green:       '#A8C83C',
  greenDark:   '#8DAD2A',
  greenSoft:   '#E9F1C9',
  cream:       '#FBF7EE',
  creamDeep:   '#F2EBDA',
  coral:       '#F5907A',
  coralSoft:   '#FCDFD6',
  sun:         '#F5C557',
  sunSoft:     '#FCEDC6',
  lavender:    '#EAE4FA',
  lavenderDark:'#6C56C9',
  ink:         '#171B2A',
  ink2:        '#4A5165',
  ink3:        '#8A92A6',
  ink4:        '#B7BCCC',
  line:        'rgba(22,58,120,0.08)',
  lineSolid:   '#E5E9F2',
  card:        '#FFFFFF',
};

const SANS = "'Plus Jakarta Sans', -apple-system, system-ui, sans-serif";

// ─────────────────────────────────────────────────────────────
// Phone — iOS bezel + status bar wrapper
// Every screen renders inside this.
// ─────────────────────────────────────────────────────────────
function Phone({ children, bg = OTTI.cream, dark = false, time = '8:24', noStatus = false }) {
  return (
    <IOSDevice width={390} height={844} dark={dark}>
      <div style={{
        position: 'absolute', inset: 0, background: bg, overflow: 'hidden',
        fontFamily: SANS, color: OTTI.ink,
      }}>
        {!noStatus && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30 }}>
            <OttiStatusBar dark={dark} time={time} />
          </div>
        )}
        {children}
      </div>
    </IOSDevice>
  );
}

function OttiStatusBar({ dark, time = '8:24' }) {
  const c = dark ? '#fff' : OTTI.ink;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px 8px', height: 54, boxSizing: 'border-box',
    }}>
      <span style={{
        fontFamily: '-apple-system, "SF Pro", system-ui', fontWeight: 600,
        fontSize: 16, color: c, letterSpacing: 0.2,
      }}>{time}</span>
      <div style={{ width: 100 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="17" height="11" viewBox="0 0 17 11"><path d="M0.5 9.8h1.2v-1H0.5zM3.8 8.5h1.2v-2.3H3.8zM7.1 6.5h1.2V4.2H7.1zM10.4 4h1.2V1.7H10.4zM13.7 1.5h1.2V-0.8H13.7z" fill={c}/></svg>
        <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 2C9.6 2 11.5 2.8 12.9 4.1l-1 1c-1.1-1-2.6-1.6-4.4-1.6S4.2 4.1 3.1 5.1l-1-1C3.5 2.8 5.4 2 7.5 2zm0 3.2c1.3 0 2.4 0.5 3.3 1.3l-1 1c-0.6-0.6-1.4-0.9-2.3-0.9s-1.7 0.3-2.3 0.9l-1-1c0.9-0.8 2-1.3 3.3-1.3zm0 2.9a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z" fill={c}/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12">
          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="18" height="8" rx="1.5" fill={c}/>
          <rect x="22.5" y="3.8" width="1.5" height="4.4" rx="0.6" fill={c} fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Mascot — inlined from the supplied SVG (no redrawing, no fetch).
// Renders directly so it can never 404 regardless of how the page is served.
// ─────────────────────────────────────────────────────────────
function Mascot({ size = 72, style = {} }) {
  const h = size * (367 / 410);
  return (
    <svg width={size} height={h} viewBox="0 0 410 367" fill="none"
         xmlns="http://www.w3.org/2000/svg"
         style={{ display: 'block', ...style }} aria-label="Otti mascot">
      <path opacity="0.12" d="M204.482 366.216C286.358 366.216 352.732 360.241 352.732 352.872C352.732 345.502 286.358 339.528 204.482 339.528C122.606 339.528 56.2324 345.502 56.2324 352.872C56.2324 360.241 122.606 366.216 204.482 366.216Z" fill="#14213A"/>
      <path d="M69.0869 170.012L15.5093 187.422C6.94375 190.205 2.25616 199.406 5.03928 207.973C7.8224 216.539 17.0223 221.227 25.5879 218.444L79.1655 201.034C87.731 198.25 92.4186 189.049 89.6355 180.483C86.8524 171.916 77.6525 167.228 69.0869 170.012Z" fill="#163A78"/>
      <path d="M393.455 187.422L339.877 170.012C331.311 167.228 322.112 171.916 319.328 180.483C316.545 189.049 321.233 198.25 329.798 201.034L383.376 218.444C391.942 221.227 401.142 216.539 403.925 207.973C406.708 199.406 402.02 190.205 393.455 187.422Z" fill="#163A78"/>
      <path d="M180.762 314.323H124.427C116.24 314.323 109.602 320.961 109.602 329.149C109.602 337.338 116.24 343.976 124.427 343.976H180.762C188.95 343.976 195.587 337.338 195.587 329.149C195.587 320.961 188.95 314.323 180.762 314.323Z" fill="#0C2150"/>
      <path d="M284.537 314.323H228.202C220.014 314.323 213.377 320.961 213.377 329.149C213.377 337.338 220.014 343.976 228.202 343.976H284.537C292.724 343.976 299.362 337.338 299.362 329.149C299.362 320.961 292.724 314.323 284.537 314.323Z" fill="#0C2150"/>
      <path d="M251.922 0H157.042C101.366 0 56.2324 45.1389 56.2324 100.821V225.364C56.2324 281.045 101.366 326.184 157.042 326.184H251.922C307.598 326.184 352.732 281.045 352.732 225.364V100.821C352.732 45.1389 307.598 0 251.922 0Z" fill="#163A78"/>
      <path opacity="0.6" d="M216.342 148.265H192.622C151.684 148.265 118.497 181.456 118.497 222.398C118.497 263.34 151.684 296.531 192.622 296.531H216.342C257.28 296.531 290.467 263.34 290.467 222.398C290.467 181.456 257.28 148.265 216.342 148.265Z" fill="#1F4F9D"/>
      <path d="M348.284 123.06H343.836V155.679H348.284V123.06Z" fill="#A8C83C"/>
      <path d="M354.214 154.196H342.354C339.898 154.196 337.907 156.187 337.907 158.644V170.505C337.907 172.962 339.898 174.953 342.354 174.953H354.214C356.67 174.953 358.662 172.962 358.662 170.505V158.644C358.662 156.187 356.67 154.196 354.214 154.196Z" fill="#A8C83C"/>
      <path opacity="0.65" d="M136.287 176.436C146.112 176.436 154.077 171.789 154.077 166.057C154.077 160.325 146.112 155.679 136.287 155.679C126.462 155.679 118.497 160.325 118.497 166.057C118.497 171.789 126.462 176.436 136.287 176.436Z" fill="#A8C83C"/>
      <path opacity="0.65" d="M272.677 176.436C282.502 176.436 290.467 171.789 290.467 166.057C290.467 160.325 282.502 155.679 272.677 155.679C262.852 155.679 254.887 160.325 254.887 166.057C254.887 171.789 262.852 176.436 272.677 176.436Z" fill="#A8C83C"/>
      <path d="M170.384 97.8551C170.384 88.8478 163.083 81.5459 154.077 81.5459C145.071 81.5459 137.77 88.8478 137.77 97.8551V112.682C137.77 121.689 145.071 128.991 154.077 128.991C163.083 128.991 170.384 121.689 170.384 112.682V97.8551Z" fill="white"/>
      <path d="M271.194 97.8551C271.194 88.8478 263.893 81.5459 254.887 81.5459C245.881 81.5459 238.58 88.8478 238.58 97.8551V112.682C238.58 121.689 245.881 128.991 254.887 128.991C263.893 128.991 271.194 121.689 271.194 112.682V97.8551Z" fill="white"/>
      <path d="M154.077 111.199C158.171 111.199 161.49 107.88 161.49 103.786C161.49 99.6916 158.171 96.3726 154.077 96.3726C149.983 96.3726 146.665 99.6916 146.665 103.786C146.665 107.88 149.983 111.199 154.077 111.199Z" fill="#0C2150"/>
      <path d="M254.887 111.199C258.98 111.199 262.299 107.88 262.299 103.786C262.299 99.6916 258.98 96.3726 254.887 96.3726C250.793 96.3726 247.474 99.6916 247.474 103.786C247.474 107.88 250.793 111.199 254.887 111.199Z" fill="#0C2150"/>
      <path d="M186.692 170.505C198.552 179.401 210.412 179.401 222.272 170.505" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  );
}

function Wordmark({ height = 38, style = {}, light = false }) {
  const letters = light ? '#FFFFFF' : '#273D7A';
  const dot = '#A8C83C';
  return (
    <svg height={height} width={height * (350 / 160)} viewBox="495 110 350 160" fill="none" style={{ display: 'block', ...style }} aria-label="Otti">
      <path d="M740.595 153.525H787.758C790.942 153.525 793.595 154.586 795.718 156.709C797.84 158.832 798.902 161.485 798.902 164.669C798.902 167.72 797.84 170.307 795.718 172.43C793.595 174.42 790.942 175.415 787.758 175.415H740.595C737.411 175.415 734.757 174.354 732.635 172.231C730.512 170.108 729.451 167.455 729.451 164.271C729.451 161.22 730.512 158.699 732.635 156.709C734.757 154.586 737.411 153.525 740.595 153.525ZM761.888 128.65C765.337 128.65 768.123 129.844 770.246 132.232C772.501 134.487 773.629 137.34 773.629 140.789V229.344C773.629 231.201 773.96 232.727 774.624 233.921C775.42 235.115 776.415 235.977 777.609 236.508C778.935 237.039 780.328 237.304 781.788 237.304C783.38 237.304 784.839 237.039 786.166 236.508C787.492 235.845 789.018 235.513 790.743 235.513C792.6 235.513 794.258 236.375 795.718 238.1C797.31 239.825 798.106 242.213 798.106 245.264C798.106 248.979 796.049 252.03 791.937 254.418C787.957 256.806 783.645 258 779.002 258C776.216 258 773.098 257.801 769.649 257.403C766.332 256.872 763.148 255.745 760.097 254.02C757.178 252.163 754.724 249.377 752.734 245.662C750.744 241.947 749.749 236.84 749.749 230.339V140.789C749.749 137.34 750.876 134.487 753.132 132.232C755.52 129.844 758.438 128.65 761.888 128.65Z" fill={letters}/>
      <path d="M659.168 153.525H706.331C709.515 153.525 712.168 154.586 714.291 156.709C716.414 158.832 717.475 161.485 717.475 164.669C717.475 167.72 716.414 170.307 714.291 172.43C712.168 174.42 709.515 175.415 706.331 175.415H659.168C655.984 175.415 653.331 174.354 651.208 172.231C649.085 170.108 648.024 167.455 648.024 164.271C648.024 161.22 649.085 158.699 651.208 156.709C653.331 154.586 655.984 153.525 659.168 153.525ZM680.461 128.65C683.91 128.65 686.696 129.844 688.819 132.232C691.074 134.487 692.202 137.34 692.202 140.789V229.344C692.202 231.201 692.534 232.727 693.197 233.921C693.993 235.115 694.988 235.977 696.182 236.508C697.509 237.039 698.902 237.304 700.361 237.304C701.953 237.304 703.412 237.039 704.739 236.508C706.066 235.845 707.591 235.513 709.316 235.513C711.173 235.513 712.832 236.375 714.291 238.1C715.883 239.825 716.679 242.213 716.679 245.264C716.679 248.979 714.623 252.03 710.51 254.418C706.53 256.806 702.218 258 697.575 258C694.789 258 691.671 257.801 688.222 257.403C684.905 256.872 681.721 255.745 678.67 254.02C675.751 252.163 673.297 249.377 671.307 245.662C669.317 241.947 668.322 236.84 668.322 230.339V140.789C668.322 137.34 669.45 134.487 671.705 132.232C674.093 129.844 677.012 128.65 680.461 128.65Z" fill={letters}/>
      <path d="M637.121 188.35C637.121 198.3 635.463 207.587 632.146 216.21C628.829 224.833 624.12 232.462 618.017 239.095C612.047 245.596 604.883 250.703 596.525 254.418C588.3 258.133 579.278 259.99 569.461 259.99C559.644 259.99 550.622 258.133 542.397 254.418C534.172 250.703 527.008 245.596 520.905 239.095C514.935 232.462 510.292 224.833 506.975 216.21C503.658 207.587 502 198.3 502 188.35C502 178.4 503.658 169.113 506.975 160.49C510.292 151.867 514.935 144.305 520.905 137.804C527.008 131.171 534.172 125.997 542.397 122.282C550.622 118.567 559.644 116.71 569.461 116.71C579.278 116.71 588.3 118.567 596.525 122.282C604.883 125.997 612.047 131.171 618.017 137.804C624.12 144.305 628.829 151.867 632.146 160.49C635.463 169.113 637.121 178.4 637.121 188.35ZM611.251 188.35C611.251 179.461 609.46 171.435 605.878 164.271C602.296 156.974 597.387 151.203 591.152 146.958C584.917 142.713 577.686 140.59 569.461 140.59C561.236 140.59 554.005 142.713 547.77 146.958C541.535 151.203 536.626 156.908 533.044 164.072C529.595 171.236 527.87 179.329 527.87 188.35C527.87 197.239 529.595 205.331 533.044 212.628C536.626 219.792 541.535 225.497 547.77 229.742C554.005 233.987 561.236 236.11 569.461 236.11C577.686 236.11 584.917 233.987 591.152 229.742C597.387 225.497 602.296 219.792 605.878 212.628C609.46 205.331 611.251 197.239 611.251 188.35Z" fill={letters}/>
      <path d="M836.04 245.5V165.5C836.04 163.567 834.473 162 832.54 162C830.607 162 829.04 163.567 829.04 165.5V245.5C829.04 247.433 830.607 249 832.54 249V258C825.744 258 820.215 252.577 820.044 245.822L820.04 245.5V165.5C820.04 158.596 825.636 153 832.54 153C839.444 153 845.04 158.596 845.04 165.5V245.5L845.036 245.822C844.865 252.577 839.336 258 832.54 258V249C834.473 249 836.04 247.433 836.04 245.5Z" fill={dot}/>
      <path d="M839.04 123.5C839.04 119.91 836.13 117 832.54 117C828.95 117 826.04 119.91 826.04 123.5C826.04 127.09 828.95 130 832.54 130V139C823.98 139 817.04 132.06 817.04 123.5C817.04 114.94 823.98 108 832.54 108C841.1 108 848.04 114.94 848.04 123.5C848.04 132.06 841.1 139 832.54 139V130C836.13 130 839.04 127.09 839.04 123.5Z" fill={dot}/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Icon set — minimal stroke, never key information by color alone.
// ─────────────────────────────────────────────────────────────
const Icon = {
  back: (c = OTTI.ink, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M15 5l-7 7 7 7" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  close: (c = OTTI.ink, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke={c} strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  ),
  more: (c = OTTI.ink, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="12" r="1.8" fill={c}/><circle cx="12" cy="12" r="1.8" fill={c}/><circle cx="19" cy="12" r="1.8" fill={c}/>
    </svg>
  ),
  plus: (c = '#fff', s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="2.4" strokeLinecap="round"/>
    </svg>
  ),
  check: (c = '#fff', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke={c} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chev: (c = OTTI.ink3, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chevDown: (c = OTTI.ink2, s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  home: (c, s = 24) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1v-9z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  history: (c, s = 24) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke={c} strokeWidth="2"/>
      <path d="M12 7v5l3 2" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  forum: (c, s = 24) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 5h12a2 2 0 012 2v6a2 2 0 01-2 2h-3l-4 4v-4H4a2 2 0 01-2-2V7a2 2 0 012-2z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  book: (c, s = 24) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 4.5a1.5 1.5 0 011.5-1.5H12v17H5.5A1.5 1.5 0 014 18.5v-14zM20 4.5A1.5 1.5 0 0018.5 3H12v17h6.5a1.5 1.5 0 001.5-1.5v-14z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  user: (c, s = 24) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="2"/>
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  bell: (c, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 17h12l-1.5-2V11a4.5 4.5 0 00-9 0v4L6 17zM10 20a2 2 0 004 0" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  trophy: (c, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M8 21h8M12 17.5V21M7 4h10v4a5 5 0 01-10 0V4z" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6H4.5A1.5 1.5 0 003 7.5C3 9 4 11 7 11M17 6h2.5A1.5 1.5 0 0121 7.5C21 9 20 11 17 11" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  medal: (c, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M8 3l4 7 4-7M6 3h12" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="15" r="6" stroke={c} strokeWidth="2"/>
      <path d="M12 12.5l1 2 2.2.3-1.6 1.5.4 2.2L12 17.5l-2 1-0.4-2.2L8 14.8 10.2 14.5z" fill={c} stroke="none"/>
    </svg>
  ),
  calendar: (c, s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke={c} strokeWidth="2"/>
      <path d="M3 10h18M8 3v4M16 3v4" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  play: (c = '#fff', s = 26) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <path d="M7 5v14l12-7-12-7z"/>
    </svg>
  ),
  pause: (c = '#fff', s = 26) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
      <rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>
    </svg>
  ),
  edit: (c, s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 20h4l10-10-4-4L4 16v4zM14 6l4 4" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  heart: (c, s = 20, filled = false) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={filled ? c : 'none'}>
      <path d="M12 20S4 14 4 8.5a4.5 4.5 0 018-2.8 4.5 4.5 0 018 2.8C20 14 12 20 12 20z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  comment: (c, s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-7l-4 3v-3H6a2 2 0 01-2-2V6z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  ear: (c = OTTI.navy, s = 24) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M7 9a5 5 0 0110 0c0 3-2 4-3 6s-1 4-3 4-3-1-3-3" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="1.6" fill={c}/>
    </svg>
  ),
  google: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24">
      <path d="M22 12.2c0-.7-.06-1.4-.18-2H12v3.9h5.6a4.8 4.8 0 01-2.08 3.15v2.6h3.36C20.85 18 22 15.4 22 12.2z" fill="#4285F4"/>
      <path d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.36-2.6c-.93.62-2.12 1-3.36 1-2.6 0-4.8-1.74-5.58-4.1H2.84v2.6A10 10 0 0012 22z" fill="#34A853"/>
      <path d="M6.42 13.9a6 6 0 010-3.8V7.5H2.84a10 10 0 000 9l3.58-2.6z" fill="#FBBC05"/>
      <path d="M12 6.1c1.46 0 2.78.5 3.82 1.5l2.86-2.86A10 10 0 002.84 7.5l3.58 2.6C7.2 7.84 9.4 6.1 12 6.1z" fill="#EA4335"/>
    </svg>
  ),
  apple: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={OTTI.ink}>
      <path d="M16.4 12.6c0-2.9 2.4-4.3 2.5-4.3-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.5 1.1-4.4 1.1s-2.3-1-3.8-1c-2 0-3.8 1.1-4.8 2.9-2 3.5-.5 8.7 1.5 11.5 1 1.4 2.1 2.9 3.6 2.8 1.5-.06 2-.95 3.7-.95s2.2.95 3.7.9c1.5 0 2.5-1.4 3.5-2.8a12 12 0 001.5-3.1c-.04-.02-3-1.15-3-4.65zM13.5 4.1c.8-1 1.3-2.3 1.2-3.6-1.1.05-2.5.75-3.3 1.7-.7.85-1.4 2.2-1.2 3.45 1.3.1 2.5-.6 3.3-1.55z"/>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────
// Button
// ─────────────────────────────────────────────────────────────
function Btn({ children, kind = 'primary', size = 'lg', icon, style = {}, onClick }) {
  const heights = { lg: 56, md: 48, sm: 40 };
  const fonts   = { lg: 17, md: 16, sm: 14 };
  const kinds = {
    primary:   { background: OTTI.navy,   color: '#fff' },
    accent:    { background: OTTI.green,  color: OTTI.navyDeep },
    coral:     { background: OTTI.coral,  color: '#fff' },
    secondary: { background: '#fff',      color: OTTI.navy, boxShadow: `inset 0 0 0 1.5px ${OTTI.lineSolid}` },
    ghost:     { background: 'transparent', color: OTTI.navy },
    dark:      { background: OTTI.navyDeep, color: '#fff' },
  };
  return (
    <button onClick={onClick} style={{
      height: heights[size], borderRadius: 999, border: 'none', cursor: 'pointer',
      fontFamily: SANS, fontSize: fonts[size], fontWeight: 700, letterSpacing: -0.1,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      padding: '0 22px', width: '100%', ...kinds[kind], ...style,
    }}>
      {icon}{children}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Bottom tab bar — wired to router via nav prop
// ─────────────────────────────────────────────────────────────
function TabBar({ active = 'home', nav = () => {} }) {
  const tabs = [
    { id: 'home',    label: 'Today',     icon: Icon.home,    go: 'home' },
    { id: 'history', label: 'History',   icon: Icon.history, go: 'history' },
    { id: 'forum',   label: 'Community', icon: Icon.forum,   go: 'forum' },
    { id: 'read',    label: 'Learn',     icon: Icon.book,    go: 'articleList' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 28, paddingTop: 10, background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderTop: `1px solid ${OTTI.line}`,
      display: 'flex', justifyContent: 'space-around', zIndex: 20,
    }}>
      {tabs.map(t => {
        const c = t.id === active ? OTTI.navy : OTTI.ink4;
        return (
          <button key={t.id} onClick={() => nav(t.go)} style={{
            background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px 12px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            fontFamily: SANS, fontSize: 11, fontWeight: t.id === active ? 700 : 500, color: c,
          }}>
            {t.icon(c, 24)}{t.label}
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Top header — back/close + title
// ─────────────────────────────────────────────────────────────
function Header({ title, back = true, close = false, trailing, sub, dark = false, onBack, onClose }) {
  const tx = dark ? '#fff' : OTTI.ink;
  const muted = dark ? 'rgba(255,255,255,0.6)' : OTTI.ink2;
  return (
    <div style={{ paddingTop: 60, paddingBottom: sub ? 6 : 18 }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', height: 44,
      }}>
        <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center' }}>
          {back && (
            <button onClick={onBack} style={{
              width: 40, height: 40, border: 'none', cursor: 'pointer',
              background: dark ? 'rgba(255,255,255,0.08)' : OTTI.navyTint, borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{Icon.back(tx, 20)}</button>
          )}
          {close && (
            <button onClick={onClose} style={{
              width: 40, height: 40, border: 'none', cursor: 'pointer',
              background: dark ? 'rgba(255,255,255,0.08)' : OTTI.navyTint, borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{Icon.close(tx, 18)}</button>
          )}
        </div>
        <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 17, color: tx, letterSpacing: -0.2 }}>{title}</div>
        <div style={{ width: 40, height: 40, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>{trailing}</div>
      </div>
      {sub && <div style={{ textAlign: 'center', fontSize: 13, color: muted, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Toggle — used by reminders, notif prefs, privacy
// ─────────────────────────────────────────────────────────────
function Toggle({ on = false, onChange }) {
  const [val, setVal] = React.useState(on);
  React.useEffect(() => { setVal(on); }, [on]);
  const toggle = () => {
    const next = !val;
    setVal(next);
    if (onChange) onChange(next);
  };
  return (
    <button onClick={toggle} style={{
      width: 50, height: 30, borderRadius: 15, border: 'none', cursor: 'pointer', padding: 0,
      background: val ? OTTI.green : OTTI.lineSolid,
      position: 'relative', flexShrink: 0, transition: 'background 0.18s ease',
    }}>
      <div style={{
        position: 'absolute', top: 2, left: val ? 22 : 2, width: 26, height: 26, borderRadius: 13,
        background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
        transition: 'left 0.18s ease',
      }} />
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Progress ring — used by home + log session
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

// Tap target — wraps any node in a div that's clickable.
function Tap({ children, onClick, style = {} }) {
  return (
    <div onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default', ...style }}>
      {children}
    </div>
  );
}

Object.assign(window, {
  OTTI, SANS,
  Phone, OttiStatusBar, Mascot, Wordmark, Icon, Btn,
  TabBar, Header, Toggle, Ring, Tap,
});
