import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta} id="cta">
      <div className={styles.inner}>
        <div className={styles.glowCircle} aria-hidden="true" />

        <span className={styles.eyebrow}>Ready to Begin</span>

        <h2 className={styles.heading}>
          Step into a world<br />
          <span className="gradient-text">beyond gravity</span>
        </h2>

        <p className={styles.desc}>
          Join the next generation of creators and innovators redefining the boundaries
          of human interaction and motion.
        </p>

        <div className={styles.actions}>
          <a href="#hero" className="btn btn-primary" id="cta-reserve-btn">
            Reserve Now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#features" className="btn btn-secondary" id="cta-learn-btn">
            Learn More
          </a>
        </div>

        {/* Bottom decorative line */}
        <div className={styles.divider} aria-hidden="true" />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <span className={styles.footerMark}>▲</span>
          Anti-Gravity
        </div>
        <p className={styles.footerCopy}>
          © 2026 Anti-Gravity. All rights reserved.
        </p>
        <div className={styles.footerLinks}>
          <a href="#" id="footer-privacy">Privacy</a>
          <a href="#" id="footer-terms">Terms</a>
          <a href="#" id="footer-contact">Contact</a>
        </div>
      </footer>
    </section>
  );
}
