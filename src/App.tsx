import { useEffect, useRef, useState } from 'react';
import './index.css';
import roomMgmtImg from './assets/room_mgmt.png';
import dciImg from './assets/dci.jpg';
import payImg from './assets/pay.jpg';
import logoImg from './assets/logo.png';
import humanImg from './assets/human.jpg';
import buildingImg from './assets/hostel_building.jpg';
import roomManagementImg from './assets/room_management.png';
import analyticsImg from './assets/analytics.png';

// ─── ICONS ────────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const CheckIcon = ({ color = '#2563EB' }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="#FBBF24">
    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"/>
  </svg>
);

const HomeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const LayoutIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>;
const ShieldIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const QuoteIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const MailNav = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

const MailIcon2 = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon3 = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const SocialIcon = ({ index }: any) => {
  const icons = [
    <path key="fb" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    <path key="tw" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>,
    <g key="ig"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></g>,
    <g key="li"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></g>
  ];
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[index]}</svg>;
};

// ─── BROWSER MOCKUP ───────────────────────────────────────────────────────────
const BrowserMockup = ({ url, children, className = '' }: { url: string; children: React.ReactNode; className?: string }) => (
  <div className={`browser-mockup ${className}`}>
    <div className="browser-bar">
      <div className="browser-dots">
        <span style={{ background: '#F87171' }}/><span style={{ background: '#FACC15' }}/><span style={{ background: '#4ADE80' }}/>
      </div>
      <div className="browser-url">{url}</div>
    </div>
    <div className="browser-content">{children}</div>
  </div>
);

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
const SectionLabel = ({ text, style }: { text: string; style?: React.CSSProperties }) => (
  <div className="section-label" style={style}>{text}</div>
);


// ─── FEATURE CARD ─────────────────────────────────────────────────────────────
const FeatureCard = ({ icon, iconBg, title, desc, tags, learnColor }: any) => (
  <div className="feat-card">
    <div className="feat-icon-wrap" style={{ background: iconBg }}>{icon}</div>
    <h4 className="feat-title">{title}</h4>
    <p className="feat-desc">{desc}</p>
    <div className="feat-tags">
      {tags.map((t: string, i: number) => <span key={i} className="feat-tag">{t}</span>)}
    </div>
    <div className="feat-learn" style={{ color: learnColor }}>
      Learn more <ArrowRight />
    </div>
  </div>
);

// ─── PRODUCT DEEP DIVE BLOCK ──────────────────────────────────────────────────
const DeepDiveBlock = ({ accentColor, label, title, desc, points, image, reverse }: any) => (
  <div className={`deep-dive-block animate-on-scroll ${reverse ? 'reverse' : ''}`}>
    <div className="deep-dive-text">
      <div className="deep-dive-badge" style={{ marginBottom: '12px' }}>
        <div className="deep-dive-badge-icon-box" style={{ background: `${accentColor}20` }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <span style={{ color: accentColor, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px' }}>{label}</span>
      </div>
      <h3 className="deep-dive-title">{title}</h3>
      <p className="deep-dive-desc">{desc}</p>
      <div className="deep-dive-points">
        {points.map((p: string, i: number) => (
          <div key={i} className="deep-dive-point">
            <div style={{ flexShrink: 0, color: accentColor, display: 'flex' }}><CheckIcon color={accentColor} /></div>
            <span>{p}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="deep-dive-img-wrap">
      <BrowserMockup url="myhostelonline.com">
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </BrowserMockup>
    </div>
  </div>
);

// ─── DASHBOARD PREVIEW CARD ───────────────────────────────────────────────────
const DashCard = ({ url, image, title, desc }: any) => (
  <div className="dash-card">
    <div className="dash-card-preview">
      <div className="dash-mini-bar">
        <div className="dash-mini-dots">
          <span style={{ background: '#FCA5A5' }}/><span style={{ background: '#FDE047' }}/><span style={{ background: '#86EFAC' }}/>
        </div>
        <div className="dash-mini-url">{url}</div>
      </div>
      <div className="dash-mini-body">
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
    <div className="dash-card-info">
      <h4 className="dash-card-title">{title}</h4>
      <p className="dash-card-desc">{desc}</p>
      <div className="dash-card-learn">Learn more <ArrowRight /></div>
    </div>
  </div>
);

// ─── WHY ITEM ────────────────────────────────────────────────────────────────
const WhyItem = ({ title, desc }: any) => (
  <div className="why-item">
    <div className="why-bullet"><CheckIcon color="#2563EB" /></div>
    <div>
      <div className="why-title">{title}</div>
      <div className="why-desc">{desc}</div>
    </div>
  </div>
);

// ─── TESTIMONIAL CARD ─────────────────────────────────────────────────────────
const TestimonialCard = ({ initials, name, role, text }: any) => (
  <div className="testimonial-card">
    <div className="testimonial-stars">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
    <p className="testimonial-text">"{text}"</p>
    <div className="testimonial-author">
      <div className="testimonial-avatar">{initials}</div>
      <div>
        <div className="testimonial-name">{name}</div>
        <div className="testimonial-role">{role}</div>
      </div>
    </div>
  </div>
);

// ─── HOSTEL MARQUEE ───────────────────────────────────────────────────────────
const HOSTELS = [
  'Sunrise Student Hostel',
  'The Nomad\'s Rest',
  'Riverside Lodge',
  'City Lights Dormitory',
  'Mountain View Hostel',
  'Beachfront Backpackers',
  'Downtown Hub Hostel',
  'Green Valley Rooms',
  'Freecity Hostel',
  'Delicious Hostel',
  'Better Than Sirach\'s',
  'Campus Corner Inn',
  'Bayside Bunkhouse',
  'The Lantern Hostel',
  'Central Park Dorms',
  'Harbour View Hostel',
];

const HostelMarquee = () => {
  // Duplicate list so the loop is truly seamless
  const items = [...HOSTELS, ...HOSTELS];

  return (
    <div className="marquee-root">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />
      <div className="marquee-track">
        <div className="marquee-inner">
          {items.map((name, i) => (
            <div key={i} className="marquee-pill">
              <span className="marquee-dot" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── THEME TOGGLE BUTTON ──────────────────────────────────────────────────────
const ThemeToggle = ({ theme, onToggle }: { theme: string; onToggle: () => void }) => (
  <button
    className="theme-toggle"
    onClick={onToggle}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
  </button>
);

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [msgLen, setMsgLen] = useState(0);
  const formRef = useRef<HTMLTextAreaElement>(null);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('animate-on-scroll');
          }
        });
      },
      { threshold: 0.08 }
    );
    const els = document.querySelectorAll('.animate-on-scroll');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return (
    <div className="page-root">

      {/* ── NAVBAR ──────────────────────────────────────────────────── */}
      <nav className="navbar">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="logo-wrap" onClick={() => scrollTo('hero')}>
            <img src={logoImg} alt="My Hostel Online Logo" className="logo-img" />
            <span className="logo-text">My Hostel Online</span>
          </a>

          {/* Center links */}
          <div className="nav-links">
            <a href="#features" onClick={() => scrollTo('features')}>Features</a>
            <a href="#dashboard" onClick={() => scrollTo('dashboard')}>Dashboard</a>
            <a href="#benefits" onClick={() => scrollTo('benefits')}>Benefits</a>
            <a href="#testimonials" onClick={() => scrollTo('testimonials')}>Testimonials</a>
            <a href="#contact" onClick={() => scrollTo('contact')}>Contact</a>
          </div>

          {/* Right side */}
          <div className="nav-right">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button className="nav-contact-btn" onClick={() => scrollTo('contact')}>
              Contact Sales
            </button>
          </div>

          {/* Hamburger */}
          <div className="nav-mobile-controls">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <div className="mobile-menu-content">
          <span className="mobile-label">Navigation</span>
          {[
            { id: 'hero', label: 'Home', icon: <HomeIcon /> },
            { id: 'features', label: 'Features', icon: <LayoutIcon /> },
            { id: 'benefits', label: 'Benefits', icon: <ShieldIcon /> },
            { id: 'testimonials', label: 'Testimonials', icon: <QuoteIcon /> },
            { id: 'contact', label: 'Contact', icon: <MailNav /> },
          ].map(({ id, label, icon }) => (
            <a key={id} href={`#${id}`} className="mobile-item" onClick={() => scrollTo(id)}>
              <div className="mobile-icon-box">{icon}</div>
              <span>{label}</span>
            </a>
          ))}
          <button className="btn-primary mobile-cta" onClick={() => scrollTo('contact')}>
            Contact Sales
          </button>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section id="hero" className="hero-section animate-fade-in">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="hero-inner">
          {/* Left */}
          <div className="hero-left">
            <div className="updates-badge">
              <span className="updates-pill">Updates</span>
              <span className="updates-text">Stay in control of your hostel from one place. <ArrowRight /></span>
            </div>

            <h1 className="hero-title">
              Stay in Control of<br/>
              <span className="hero-title-blue">Your Hostel</span>
            </h1>
            <div className="hero-underline" />

            <p className="hero-desc">
              Manage rooms, payments, and operations from one dashboard. No confusion. No double bookings.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary hero-btn" onClick={() => scrollTo('contact')}>
                Contact Sales <ArrowRight />
              </button>
              <button className="btn-secondary hero-btn">
                <PlayIcon /> See How It Works
              </button>
            </div>

            <p className="hero-footnote">
              Contact sales to discuss fares and setup | <span style={{ color: '#3B82F6' }}>100% Free</span>.
            </p>
          </div>

          {/* Right */}
          <div className="hero-right">
            <div className="hero-browser-glow" />
            <BrowserMockup url="myhostelonline.com/dashboard" className="hero-browser">
              <img src={buildingImg} alt="Hostel Building" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </BrowserMockup>
          </div>
        </div>
      </section>

      {/* ── HOSTEL MARQUEE ───────────────────────────────────────────── */}
      <HostelMarquee />

      {/* ── FEATURES ────────────────────────────────────────────────── */}
      <section id="features" className="features-section">
        <div className="section-inner animate-on-scroll">
          <SectionLabel text="Features" />
          <h2 className="section-title">Everything You Need to Run<br/>Your Hostel</h2>
          <p className="section-desc">One platform. Every tool you need to manage your property without the chaos.</p>
        </div>
        <div className="features-grid animate-on-scroll">
          <FeatureCard iconBg="#1F2D48"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>}
            title="Room Management" desc="Real-time availability, visual floor plan, and automated status updates across all your rooms."
            tags={['Floor Plan', 'Live Sync', 'Auto Updates']} learnColor="#2563EB"
          />
          <FeatureCard iconBg="#1A3138"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><polyline points="9 11 11 13 15 9"/></svg>}
            title="Digital Check-In" desc="Streamline guest registration, ID verification, and automated welcome messages on arrival."
            tags={['ID Verify', 'Instant Confirm', 'Welcome SMS']} learnColor="#059669"
          />
          <FeatureCard iconBg="#28274A"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>}
            title="Payments" desc="Multiple payment methods, automated billing cycles, and instant digital receipts for every guest."
            tags={['Multi-Method', 'Auto Billing', 'Receipts']} learnColor="#7C3AED"
          />
          <FeatureCard iconBg="#312C2F"
            icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-6 6-2-2-4 4"/></svg>}
            title="Analytics" desc="Track revenue trends, occupancy insights, and generate custom reports with a single click."
            tags={['Revenue', 'Occupancy', 'Reports']} learnColor="#D97706"
          />
        </div>
      </section>

      {/* ── PRODUCT DEEP DIVE ───────────────────────────────────────── */}
      <section className="deep-dive-section">
        <div className="section-inner animate-on-scroll">
          <SectionLabel text="Product Deep Dive" />
          <h2 className="section-title">Built for How Hostels Actually Work</h2>
          <p className="section-desc" style={{ color: 'var(--desc-muted)' }}>
            Every feature was designed around real hostel workflows — not generic hotel software.
          </p>
        </div>

        <DeepDiveBlock accentColor="#2563EB" label="Room Management"
          title="See every room, every booking — at a glance."
          desc="The visual floor plan gives you a live map of your entire property. Spot vacant rooms, flag maintenance issues, and update statuses without leaving your screen. Everything refreshes in real time, so your team is always on the same page."
          points={['Drag-and-drop floor plan editor', 'Real-time availability across all devices', 'Multi-view booking calendar (day, week, month)']}
          image={roomManagementImg} reverse={false}
        />
        <DeepDiveBlock accentColor="#059669" label="Digital Check-In"
          title="Frictionless check-ins. Guests love it."
          desc="Replace paper forms with a fully digital process. Guests register on their own device, upload their ID, and receive an automated welcome message — all before they even walk through your door. Cut front-desk time by up to 70%."
          points={['ID scan and secure digital storage', 'Automated welcome SMS & email', 'Full guest history and preference log']}
          image={dciImg} reverse={true}
        />
        <DeepDiveBlock accentColor="#7C3AED" label="Payments"
          title="Collect payments, automate billing, stay organized."
          desc="Accept cash, card, or digital wallets — all in one place. Set automatic billing cycles for long-stay guests, generate receipts instantly, and reconcile accounts without chasing spreadsheets. Financial clarity with zero extra effort."
          points={['Multi-method payment collection', 'Automated recurring billing cycles', 'Instant digital receipts per transaction']}
          image={payImg} reverse={false}
        />
        <DeepDiveBlock accentColor="#D97706" label="Analytics"
          title="Insights that help you earn more and waste less."
          desc="Know your occupancy rate before your day starts. Track revenue trends, identify slow seasons, and export clean reports for accounting. The analytics dashboard turns raw data into decisions you can actually act on."
          points={['Revenue trends with custom date ranges', 'Live occupancy rate and forecasting', 'PDF and CSV export with one click']}
          image={analyticsImg} reverse={true}
        />
      </section>

      {/* ── DASHBOARD SECTION ───────────────────────────────────────── */}
      <section id="dashboard" className="dashboard-section">
        <div className="section-inner animate-on-scroll">
          <SectionLabel text="Dashboard" />
          <h2 className="section-title">See the Dashboard in Action</h2>
          <p className="section-desc">Built for clarity. Every screen is designed to make decisions faster.</p>
        </div>
        <div className="dash-grid animate-on-scroll">
          <DashCard url="dashboard/Rooms" image={roomMgmtImg}
            title="Room Availability Grid"
            desc="See every room at a glance — instantly know what's free, occupied, or needs attention." />
          <DashCard url="dashboard/Revenue" image={payImg}
            title="Revenue & Payment Insights"
            desc="Track income, spot trends, and export reports without opening a spreadsheet." />
          <DashCard url="dashboard/Check-In" image={dciImg}
            title="Student Check-In Flow"
            desc="Fast, digital check-in with ID capture and automated confirmation messages." />
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────── */}
      <section id="benefits" className="why-section">
        <div className="why-inner">
          <div className="why-image animate-on-scroll">
            <img src={humanImg} alt="Why choose My Hostel Online" />
          </div>
          <div className="why-content animate-on-scroll">
            <SectionLabel text="Why Choose Us" style={{ textAlign: 'left' }} />
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Hostel Owners Choose This</h2>
            <p className="section-desc" style={{ textAlign: 'left', color: 'var(--text-muted)', maxWidth: '520px', margin: 0 }}>
              Designed specifically for hostel operations — not adapted from hotel software.
            </p>
            <div className="why-list">
              <WhyItem title="Save Time with Automation" desc="Let the system handle check-ins, billing, and status updates — so you focus on guests, not admin work." />
              <WhyItem title="Increase Revenue with Insights" desc="Spot peak periods, monitor occupancy trends, and make data-driven decisions to fill every room." />
              <WhyItem title="Avoid Costly Errors" desc="Real-time sync eliminates double bookings, missed payments, and communication gaps between staff." />
              <WhyItem title="Manage from Anywhere" desc="Full access from any browser or device. Your hostel operations in your pocket, wherever you are." />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-inner animate-on-scroll">
          <SectionLabel text="Testimonials" />
          <h2 className="section-title">What Hostel Owners Are Saying</h2>
          <p className="section-desc" style={{ color: 'var(--text-muted)' }}>Real results from real hostel owners across the globe.</p>
        </div>
        <div className="testimonials-grid animate-on-scroll">
          <TestimonialCard initials="RE" name="Richard Elikem" role="Owner, Better Than Sirach's Hostel"
            text="Before this, I was managing everything on spreadsheets and WhatsApp. Now the whole team works from one screen. We haven't had a double booking in six months." />
          <TestimonialCard initials="HB" name="Henry Blemo" role="Hostel Manager, Freecity Hostel"
            text="The check-in flow alone saved us 30 minutes per day. Guests love the digital process, and our staff stopped making mistakes on paper forms." />
          <TestimonialCard initials="PS" name="Patrick Sirach" role="Founder, Ideagap Hostel"
            text="The analytics dashboard changed how I make decisions. I can see peak seasons coming and adjust pricing before it's too late. Revenue is up 28% this year." />
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-left animate-on-scroll">
            <SectionLabel text="Contact Sales" style={{ textAlign: 'left' }} />
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '36px' }}>Run Your Hostel Smarter</h2>
            <p className="section-desc" style={{ textAlign: 'left', color: 'var(--text-muted)', maxWidth: '380px', margin: 0 }}>
              Talk to our team and see how this system fits your operations. We'll walk you through everything, no pressure.
            </p>

            <div className="contact-info-box">
              <div className="contact-info-item"><MailIcon2 /><span>info.myhostelonline@gmail.com</span></div>
              <div className="contact-info-item"><PhoneIcon3 /><span>+233 0000000000</span></div>
              <div className="contact-info-item"><LocationIcon /><span>Accra, Ghana</span></div>
            </div>

            <div className="contact-perks">
              {['Free personalized demo', 'No credit card required', 'Setup support included', 'Cancel anytime'].map(p => (
                <div key={p} className="contact-perk">
                  <div style={{ color: '#2563EB', flexShrink: 0 }}><CheckIcon color="#2563EB" /></div>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-card animate-on-scroll">
            <h3 className="form-title">Get in Touch</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-input" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Work Email</label>
                  <input type="email" className="form-input" placeholder="you@hostel.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Hostel Name</label>
                <input type="text" className="form-input" placeholder="Your hostel's name" />
              </div>
              <div className="form-group">
                <label>Message <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
                <textarea
                  ref={formRef}
                  className="form-input form-textarea"
                  placeholder="Tell us about your operations..."
                  maxLength={500}
                  onChange={(e) => setMsgLen(e.target.value.length)}
                />
                <div className="char-count">{msgLen}/500</div>
              </div>
              <button type="submit" className="btn-primary form-submit">Contact Sales</button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <img src={logoImg} alt="Logo" className="footer-logo-img" />
                <span className="footer-logo">My Hostel Online</span>
              </div>
              <p className="footer-brand-desc">
                The complete hostel management solution for modern administrators. Streamline operations, maximize revenue, and enhance guest experience.
              </p>
              <div className="footer-socials">
                {[0, 1, 2, 3].map(i => (
                  <button key={i} className="social-btn" aria-label={`Social ${i}`}>
                    <SocialIcon index={i} />
                  </button>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Product</h4>
              <a href="#features" className="footer-link" onClick={() => scrollTo('features')}>Features</a>
              <a href="#dashboard" className="footer-link" onClick={() => scrollTo('dashboard')}>Dashboard</a>
              <a href="#benefits" className="footer-link" onClick={() => scrollTo('benefits')}>Benefits</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Support</h4>
              <a href="#contact" className="footer-link" onClick={() => scrollTo('contact')}>Help Center</a>
              <a href="#contact" className="footer-link" onClick={() => scrollTo('contact')}>Contact Us</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 My Hostel Online. All rights reserved.</span>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms of Service</a>
              <a href="#" className="footer-legal-link" style={{ color: '#2563EB' }}>Powered by Elitron</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
