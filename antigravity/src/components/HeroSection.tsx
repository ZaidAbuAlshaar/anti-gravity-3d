'use client';

import dynamic from 'next/dynamic';
import styles from './HeroSection.module.css';

// Dynamically import the Canvas (no SSR – Three.js needs the browser)
const ModelCanvas = dynamic(() => import('./ModelCanvas'), {
  ssr: false,
  loading: () => (
    <div className={styles.modelPlaceholder}>
      <div className={styles.loaderRing} />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background radial glow */}
      <div className={styles.bgGlow} aria-hidden="true" />

      {/* Grain overlay */}
      <div className={styles.grain} aria-hidden="true" />

      {/* Horizontal scan line */}
      <div className={styles.scanLine} aria-hidden="true" />

      {/* Top nav */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <span className={styles.navLogoMark}>▲</span>
          <span>ANTI-GRAVITY</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#cta" className={styles.navLink}>Contact</a>
        </div>
      </nav>

      {/* Hero content grid */}
      <div className={styles.heroGrid}>

        {/* Left – Text column */}
        <div className={styles.textCol}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            New Release 2026
          </div>

          <h1 className={styles.title}>
            Anti-<br />
            <span className={`${styles.titleAccent} gradient-text`}>Gravity</span>
          </h1>

          <p className={styles.subtitle}>Freedom Model</p>

          <p className={styles.tagline}>Break the limits of control</p>

          <p className={styles.description}>
            A futuristic interactive product experience built around
            motion, precision, and freedom.
          </p>

          <div className={styles.ctas}>
            <a href="#cta" className="btn btn-primary" id="hero-enter-btn">
              Enter
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#features" className="btn btn-secondary" id="hero-explore-btn">
              Explore
            </a>
          </div>
        </div>

        {/* Center – 3D model column */}
        <div className={styles.modelCol}>
          {/* Glow ring behind model */}
          <div className={styles.modelGlowOuter} aria-hidden="true" />
          <div className={styles.modelGlowInner} aria-hidden="true" />

          {/* Anti-gravity shadow / base disc */}
          <div className={styles.baseDisc} aria-hidden="true" />

          {/* The 3D canvas */}
          <div className={styles.canvasWrap}>
            <ModelCanvas />
          </div>
        </div>

        {/* Right – Stats column */}
        <div className={styles.statsCol}>
          {[
            { value: '120', unit: 'Hz', label: 'Refresh Rate' },
            { value: '0.1', unit: 'ms', label: 'Latency' },
            { value: '∞',  unit: '',   label: 'Precision' },
          ].map((stat) => (
            <div className={styles.statCard} key={stat.label}>
              <span className={styles.statValue}>
                {stat.value}<span className={styles.statUnit}>{stat.unit}</span>
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
