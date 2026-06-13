import styles from './FeaturesSection.module.css';

const features = [
  {
    id: 'precision',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Precision',
    desc: 'Sub-millimeter accuracy with adaptive sensor fusion. Every movement tracked to the smallest degree of motion.',
  },
  {
    id: 'motion',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Motion',
    desc: 'Zero-latency responsiveness with 120Hz haptic feedback. Feel every nuance of movement translated in real time.',
  },
  {
    id: 'freedom',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Freedom',
    desc: '360° axis control with unlimited customization. Break every constraint and redefine what's possible.',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.sectionHeader}>
        <span className={styles.eyebrow}>Core Capabilities</span>
        <h2 className={styles.heading}>
          Engineered for the <span className="gradient-text">impossible</span>
        </h2>
        <p className={styles.subheading}>
          Three pillars. One unified experience that redefines interaction.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((f, i) => (
          <article className={styles.card} key={f.id} id={`feature-${f.id}`}
            style={{ animationDelay: `${i * 0.12}s` }}>
            <div className={styles.cardGlow} aria-hidden="true" />
            <div className={styles.iconWrap}>
              {f.icon}
            </div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardNum}>0{i + 1}</span>
              <div className={styles.cardLine} />
            </div>
          </article>
        ))}
      </div>

      {/* Decorative grid lines */}
      <div className={styles.decorGrid} aria-hidden="true" />
    </section>
  );
}
