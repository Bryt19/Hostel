import { useEffect, useRef, useState } from 'react';
import './index.css';
import heroImg from './assets/hero.png';
import roomMgmtImg from './assets/room_mgmt.png';
import dciImg from './assets/dci.jpg';
import payImg from './assets/pay.jpg';
import slidePay from './assets/slideshow/pay_dash.png';
import slideCheckin from './assets/slideshow/checkin.png';
import slideSocial from './assets/slideshow/social.jpg';
import slideAsset from './assets/slideshow/asset.png';

// --- CLEAN ICONS ---
const HomeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const LayoutIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>;
const ShieldIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const QuoteIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const PhoneIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

const RoomIcon = () => <svg width="28" height="28" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const RegIcon = () => <svg width="28" height="28" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>;
const PayIcon = () => <svg width="28" height="28" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M7 15h2"/></svg>;
const DocIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
const StaffIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const MaintIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const WorkIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
const InterfaceIcon = () => <svg width="24" height="24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>;
const MobileIcon = () => <svg width="24" height="24" fill="none" stroke="#119940" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>;
const AnalyticIcon = () => <svg width="24" height="24" fill="none" stroke="#5607AD" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 9l-6 6-2-2-4 4"/></svg>;
const SecureIcon = () => <svg width="24" height="24" fill="none" stroke="#B86C07" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const MailIcon = ({color}:any) => <svg width="24" height="24" fill="none" stroke={color} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const InfoIcon = ({color}:any) => <svg width="24" height="24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="8"/></svg>;
const ClockIcon = ({color}:any) => <svg width="24" height="24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const Star = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FEC84B"/>
  </svg>
);

const SocialIcon = ({index}:any) => {
  const icons = [
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>,
    <g><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></g>,
    <g><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></g>
  ];
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[index]}</svg>;
}

// --- SUB-COMPONENTS ---
const CountUp = ({ end, duration = 2000, decimals = 0, suffix = "" }: any) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: any = null;
    const animate = (timestamp: any) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      }
    };
    countRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(countRef.current);
  }, [isVisible, end, duration]);

  return <span ref={elementRef}>{count.toFixed(decimals)}{suffix}</span>;
};

const FeatureBlock = ({ title, desc, points, image, icon, reverse }: any) => (
  <div className={`animate-on-scroll feature-block ${reverse ? 'reverse' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: '100px', alignItems: 'center', direction: reverse ? 'rtl' : 'ltr' }}>
    <div style={{ direction: 'ltr' }}>
      <div style={{ width: '64px', height: '64px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '20px', color: '#111827' }}>{title}</h3>
      <p style={{ fontSize: '18px', color: '#4B5563', marginBottom: '32px', lineHeight: '1.6' }}>{desc}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {points.map((p: string, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '22px', height: '22px', background: '#DBEAFE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span style={{ fontSize: '16px', color: '#374151', fontWeight: '500' }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="animate-float" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
      <img src={image} style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '584/380' }} alt={title} />
    </div>
  </div>
);

const AdvancedFeature = ({ icon, title }: any) => (
  <div className="advanced-feature-card">
    <div className="icon-wrapper">
      {icon}
    </div>
    <h4>{title}</h4>
  </div>
);

const ActionCard = ({ icon, color, title, text }: any) => (
  <div className="feature-card" style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', textAlign: 'center', border: '1px solid #F1F5F9', transition: 'all 0.4s ease' }}>
    <div style={{ width: '52px', height: '52px', background: color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
      {icon}
    </div>
    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '14px', color: '#111827' }}>{title}</h4>
    <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.6' }}>{text}</p>
  </div>
);

const TestimonialCard = ({ name, role, text }: any) => (
  <div className="testimonial-card" style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #F1F5F9', transition: 'all 0.4s ease' }}>
    <p style={{ fontSize: '18px', color: '#334155', lineHeight: '1.7', fontStyle: 'italic' }}>{text}</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px' }}>
      <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E40AF', fontWeight: '700', fontSize: '18px' }}>
        {name.split(' ').map((n:any) => n[0]).join('')}
      </div>
      <div>
        <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#111827' }}>{name}</h4>
        <p style={{ fontSize: '14px', color: '#3B82F6', fontWeight: '500' }}>{role}</p>
      </div>
    </div>
  </div>
);

const ContactInfoCard = ({ icon, bg, title, text, btn }: any) => (
  <div style={{ display: 'flex', gap: '24px' }}>
    <div style={{ width: '56px', height: '56px', background: bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
      {icon}
    </div>
    <div>
      <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>{title}</h4>
      <p style={{ color: '#DBEAFE', fontSize: '16px', marginBottom: btn ? '20px' : '0', lineHeight: '1.5' }}>{text}</p>
      {btn && <button className="btn-primary" style={{ height: '44px', padding: '0 24px', fontSize: '14px' }}>{btn}</button>}
    </div>
  </div>
);

const Slideshow = () => {
  const [active, setActive] = useState(0);
  const slides = [
    { url: slidePay, title: 'Payment & Billing Center', desc: 'Track payments, generate invoices, and manage finances' },
    { url: slideCheckin, title: 'Staff Operations', desc: 'Schedule shifts, assign tasks, and track performance' },
    { url: slideAsset, title: 'Asset Tracking', desc: 'Real-time inventory for linens, furniture, and kitchen supplies' },
    { url: slideSocial, title: 'Guest Engagement', desc: 'Manage reviews, loyalty programs, and communication' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow-container animate-on-scroll">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === active ? 'active' : ''}`}>
          <img src={slide.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={slide.title} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px', background: 'linear-gradient(0deg, rgba(15, 23, 42, 0.9) 0%, rgba(0, 0, 0, 0) 100%)', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h3 style={{ color: 'white', fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>{slide.title}</h3>
              <p style={{ color: '#CBD5E1', fontSize: '18px' }}>{slide.desc}</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
              {slides.map((_, idx) => (
                <div key={idx} onClick={() => setActive(idx)} style={{ width: '12px', height: '12px', borderRadius: '50%', background: idx === active ? 'white' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: '0.3s' }}></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={scrollRef} style={{ width: '100%', background: 'white', position: 'relative' }}>
      
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo */}
          <div className="logo-text">
            My Hostel Online
          </div>
          
          {/* Center Links */}
          <div className="nav-links-desktop">
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          
          {/* Action Button */}
          <div className="nav-action">
            <button className="nav-btn">Contact Sales</button>
          </div>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>

      <div className={`mobile-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div className="mobile-menu-content">
          <div className="menu-group">
            <span className="group-label">Navigation</span>
            <a href="#hero" onClick={() => setMenuOpen(false)} className="menu-item">
              <div className="icon-box"><HomeIcon /></div>
              <span>Home</span>
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)} className="menu-item">
              <div className="icon-box"><LayoutIcon /></div>
              <span>Features</span>
            </a>
            <a href="#benefits" onClick={() => setMenuOpen(false)} className="menu-item">
              <div className="icon-box"><ShieldIcon /></div>
              <span>Benefits</span>
            </a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)} className="menu-item">
              <div className="icon-box"><QuoteIcon /></div>
              <span>Testimonials</span>
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="menu-item">
              <div className="icon-box"><PhoneIcon /></div>
              <span>Contact</span>
            </a>
          </div>
          
          <div className="menu-footer">
            <button className="btn-primary" style={{ width: '100%', height: '44px', fontSize: '14px', borderRadius: '10px' }}>Contact Sales</button>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="animate-fade-in hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            {/* Updates Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#D6E3F8', border: '1px solid #8DB8FF', borderRadius: '4px', width: 'fit-content', padding: '6px 12px', marginBottom: '32px' }}>
              <span style={{ background: '#3B82F6', color: 'white', fontSize: '10px', padding: '2px 8px', borderRadius: '3px', fontWeight: '700', textTransform: 'uppercase' }}>Updates</span>
              <span style={{ color: '#3B82F6', fontSize: '12px', fontWeight: '500' }}>Stay in control of your hostel from one place.</span>
            </div>

            <h1 style={{ fontWeight: '600', marginBottom: '24px', lineHeight: '1.1' }}>
              Hostel Management for <br/><span style={{ color: '#3B82F6' }}>Modern Teams</span>
            </h1>
            
            <p className="hero-description" style={{ color: '#252422', fontSize: '18px', marginBottom: '40px', maxWidth: '500px', lineHeight: '1.6' }}>
              Equipment management built for teams who need to know where everything is, who has it, and when it&apos;s available.
            </p>

            <div className="hero-image" style={{ position: 'relative', marginBottom: '40px' }}>
              <div className="animate-float" style={{ width: '100%', aspectRatio: '583/308', background: '#0F172A', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src={heroImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Hero Dashboard" />
              </div>
              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <a href="#" style={{ color: '#3B82F6', fontSize: '14px', fontWeight: '500', textDecoration: 'underline' }}>How does Hostel Manager work? Click here.</a>
              </div>
            </div>
            
            <div className="stars-row" style={{ marginBottom: '40px' }}>
              <div>
                <p style={{ color: '#475467', fontSize: '16px', marginBottom: '12px', fontStyle: 'italic' }}>“Finally, a modern and convenient hostel management system.”</p>
                <div style={{ display: 'flex', gap: '4px' }}>{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
              </div>
              <div>
                <p style={{ color: '#475467', fontSize: '16px', marginBottom: '12px', fontStyle: 'italic' }}>“No double bookings. No confusion. Just smooth room assignments.”</p>
                <div style={{ display: 'flex', gap: '4px' }}>{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
              </div>
            </div>

            <button className="btn-primary" style={{ height: '54px', padding: '0 28px', fontSize: '16px', whiteSpace: 'nowrap', width: 'fit-content' }}>Contact Sales</button>
            <p className="hero-subtext" style={{ marginTop: '24px', fontSize: '14px', color: '#4B5563' }}>
              Contact sales to discuss fares and setup | <span style={{ color: '#3B82F6', fontWeight: '500' }}>100% Free</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" style={{ background: '#F3F8FE' }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#111827', marginBottom: '20px' }}>Powerful Features Built for Modern Hostels</h2>
            <p style={{ fontSize: '20px', color: '#4B5563', maxWidth: '700px', margin: '0 auto' }}>Comprehensive tools designed to streamline every aspect of your hostel operations</p>
          </div>

          <FeatureBlock 
            title="Real-Time Room Management"
            desc="Complete room occupancy tracking with visual floor plans, instant availability updates, and automated status changes."
            points={[
              "Visual floor plan with color-coded room status",
              "Real-time occupancy tracking and updates",
              "Automated room cleaning schedules",
              "Maintenance request management",
              "Room type categorization and pricing"
            ]}
            image={roomMgmtImg}
            icon={<RoomIcon />}
            reverse={false}
          />

          <FeatureBlock 
            title="Digital Check-In & Registration"
            desc="Streamlined guest registration with digital forms, ID verification, key management, and automated welcome processes."
            points={[
              "Digital guest registration forms",
              "ID document scanning and verification",
              "Automated key assignment system",
              "Welcome email and SMS notifications",
              "Guest preference tracking"
            ]}
            image={dciImg}
            icon={<RegIcon />}
            reverse={true}
          />

          <FeatureBlock 
            title="Integrated Payment Processing"
            desc="Secure payment handling with multiple methods, automated billing, receipt generation, and financial reporting."
            points={[
              "Multiple payment method support",
              "Automated recurring billing",
              "Digital receipt generation",
              "Payment reminder notifications",
              "Integrated accounting reports"
            ]}
            image={payImg}
            icon={<PayIcon />}
            reverse={false}
          />
        </div>
      </section>

      {/* 4. MORE FEATURES GRID */}
      <section style={{ background: '#F3F8FE', paddingTop: 0 }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(90deg, #EFF6FF 0%, #EEF2FF 100%)', borderRadius: '32px', padding: '80px 60px' }} className="animate-on-scroll">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>And Many More Advanced Features</h3>
              <p style={{ color: '#4B5563', fontSize: '16px', lineHeight: '24px', maxWidth: '800px', margin: '0 auto' }}>Document management, staff scheduling, maintenance tracking, inventory management, guest communication tools, and extensive customization options.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
              <AdvancedFeature icon={<DocIcon />} title="Document Storage" />
              <AdvancedFeature icon={<StaffIcon />} title="Staff Management" />
              <AdvancedFeature icon={<MaintIcon />} title="Maintenance Tracking" />
              <AdvancedFeature icon={<WorkIcon />} title="Custom Workflows" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. IN ACTION SECTION */}
      <section id="action">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>See Hostel Manager in Action</h2>
            <p style={{ fontSize: '20px', color: '#4B5563' }}>Real dashboard screenshots showing how our platform streamlines your daily operations</p>
          </div>

          <Slideshow />

          <div className="action-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '60px' }}>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}><ActionCard icon={<InterfaceIcon />} color="#DBEAFE" title="Intuitive Interface" text="Clean, modern design that's easy to navigate for all staff members" /></div>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}><ActionCard icon={<MobileIcon />} color="#DCFCE7" title="Mobile Responsive" text="Access your dashboard from any device, anywhere, anytime" /></div>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.3s' }}><ActionCard icon={<AnalyticIcon />} color="#F3E8FF" title="Advanced Analytics" text="Detailed insights and reports to optimize your operations" /></div>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.4s' }}><ActionCard icon={<SecureIcon />} color="#FFEDD5" title="Secure & Reliable" text="Enterprise-grade security with 99.9% uptime guarantee" /></div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section id="testimonials" style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)' }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px' }}>What Our Customers Say</h2>
            <p style={{ fontSize: '20px', color: '#4B5563', fontWeight: '500' }}>Real feedback from hostel managers who transformed their operations</p>
          </div>

          <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <TestimonialCard 
                name="Kojo Mathews"
                role="Owner, Glass Hostel"
                text="&quot; Managing tenants has never been this simple. The automated reminders and digital check-in process have transformed our operations. &quot;"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <TestimonialCard 
                name="Ama Mensah"
                role="Manager, City Stay"
                text="&quot; The analytics dashboard gives us insights we never had before. We've increased our revenue by 30% since implementing MyHostelOnline. &quot;"
              />
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <TestimonialCard 
                name="Yaw Boateng"
                role="Owner, Elite Dorms"
                text="&quot; The mobile app is a game-changer. I can manage everything from anywhere, and the real-time notifications keep me always informed. &quot;"
              />
            </div>
          </div>

          <div style={{ marginTop: '80px', textAlign: 'center' }} className="animate-on-scroll">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', padding: '12px 40px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '9999px', border: '1px solid #E2E8F0', backdropFilter: 'blur(10px)' }}>
               <div style={{ fontSize: '20px', fontWeight: '600', color: '#111827' }}><CountUp end={4.9} decimals={1} suffix="/5" /> <span style={{ fontWeight: '400', color: '#4B5563', fontSize: '18px' }}>Average Rating</span></div>
               <div style={{ width: '1px', height: '24px', background: '#E2E8F0' }}></div>
               <div style={{ fontSize: '18px', color: '#4B5563', fontWeight: '500' }}><CountUp end={500} suffix="+" /> Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRANSFORM SECTION */}
      <section id="contact" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #312E81 100%)', color: 'white' }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '8px 24px', borderRadius: '9999px', display: 'inline-block', marginBottom: '32px', border: '1px solid rgba(191, 219, 254, 0.3)' }}>
              <span style={{ color: '#BFDBFE', fontSize: '14px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Ready to Get Started?</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: '700', lineHeight: 1.1, marginBottom: '24px' }}>Transform Your Hostel <span style={{ color: '#60A5FA' }}>Today</span></h2>
            <p style={{ color: '#DBEAFE', fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>Join hundreds of successful hostel managers who revolutionized their operations with MyHostelOnline.</p>
          </div>

          <div className="transform-grid animate-on-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              <ContactInfoCard 
                icon={<MailIcon color="#60A5FA" />}
                bg="rgba(59, 130, 246, 0.2)"
                title="Talk to Sales"
                text="Book a session with our team and explore features built specifically for hostellers."
                btn="Schedule Call"
              />
              <ContactInfoCard 
                icon={<InfoIcon color="#4ADE80" />}
                bg="rgba(34, 197, 94, 0.2)"
                title="Get Information"
                text="Receive detailed information about technical specs, pricing, and onboarding timeline."
              />
              <ContactInfoCard 
                icon={<ClockIcon color="#C084FC" />}
                bg="rgba(168, 85, 247, 0.2)"
                title="Quick Response"
                text="Our sales team responds within 2 hours during normal business hours."
              />
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '24px', padding: '48px', backdropFilter: 'blur(20px)' }}>
              <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '12px' }}>Contact Our Sales Team</h3>
                <p style={{ color: '#DBEAFE', fontSize: '16px' }}>Get personalized tools for your hostel needs</p>
              </div>
              <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="form-row">
                   <div>
                     <label>Full Name *</label>
                     <input type="text" className="input-field" placeholder="Kojo Mathews" />
                   </div>
                   <div>
                     <label>Email Address *</label>
                     <input type="email" className="input-field" placeholder="kojo@hostel.com" />
                   </div>
                </div>
                <div className="form-row">
                   <div>
                     <label>Phone Number</label>
                     <input type="text" className="input-field" placeholder="+233 000 0000" />
                   </div>
                   <div>
                     <label>Hostel Name</label>
                     <input type="text" className="input-field" placeholder="Elite Dorms" />
                   </div>
                </div>
                <div>
                  <label>Message Details</label>
                  <textarea className="input-field" rows={4} placeholder="How can we help you?"></textarea>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                    <span style={{ fontSize: '12px', color: '#BFDBFE' }}>0 / 500 characters</span>
                  </div>
                </div>
                <button className="btn-primary" style={{ height: '60px', fontSize: '18px', fontWeight: '700' }}>Send Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer style={{ background: '#0F172A', color: 'white', padding: '100px 0 60px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: '80px', marginBottom: '80px' }}>
            <div>
              <div style={{ color: '#3B82F6', fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>Hostel Manager</div>
              <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', maxWidth: '380px' }}>
                The complete hostel management solution for modern administrators. Streamline operations, maximize revenue, and enhance guest experience.
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
                {[0, 1, 3, 2].map((iconIndex) => (
                  <div key={iconIndex} style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#1E293B'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    <SocialIcon index={iconIndex} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '28px', color: '#F1F5F9' }}>Product</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: '#94A3B8', fontSize: '15px' }}>
                <li style={{ cursor: 'pointer' }}>Features</li>
                <li style={{ cursor: 'pointer' }}>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '28px', color: '#F1F5F9' }}>Support</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: '#94A3B8', fontSize: '15px' }}>
                <li style={{ cursor: 'pointer' }}>Help Center</li>
                <li style={{ cursor: 'pointer' }}>Contact Us</li>
                <li style={{ cursor: 'pointer' }}>Training</li>
                <li style={{ cursor: 'pointer' }}>Status</li>
              </ul>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ color: '#64748B', fontSize: '14px' }}>© 2026 Hostel Manager. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '24px', color: '#64748B', fontSize: '14px' }}>
              <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
              <span style={{ cursor: 'pointer' }}>Terms of Service</span>
              <span style={{ cursor: 'pointer' }}>Powered by Elitron</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
