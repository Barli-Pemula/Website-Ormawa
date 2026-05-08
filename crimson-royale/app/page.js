"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

/* ============================
   SWORD SVG — moves RIGHT
   ============================ */
function SwordSVG() {
  return (
    <svg viewBox="0 0 900 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bladeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6dae0" />
          <stop offset="25%" stopColor="#f0f2f5" />
          <stop offset="50%" stopColor="#c8cdd4" />
          <stop offset="75%" stopColor="#e8eaed" />
          <stop offset="100%" stopColor="#b0b6bf" />
        </linearGradient>
        <linearGradient id="bladeEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c0c4ca" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="goldSword" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d03f" />
          <stop offset="40%" stopColor="#daa520" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
        <linearGradient id="gripGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c3a21" />
          <stop offset="50%" stopColor="#3e2413" />
          <stop offset="100%" stopColor="#2a1509" />
        </linearGradient>
        <filter id="bladeShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Blade body */}
      <polygon
        points="40,60 485,46 485,74"
        fill="url(#bladeGrad)"
        filter="url(#bladeShadow)"
      />
      {/* Blade top edge highlight */}
      <line x1="42" y1="60" x2="485" y2="46" stroke="url(#bladeEdge)" strokeWidth="1" />
      {/* Fuller (blood groove) */}
      <line x1="120" y1="59" x2="475" y2="52" stroke="#8a8f96" strokeWidth="2.5" opacity="0.35" />
      <line x1="122" y1="60.5" x2="476" y2="53.5" stroke="#bfc3c9" strokeWidth="0.8" opacity="0.3" />

      {/* Cross-guard */}
      <rect x="483" y="24" width="18" height="72" rx="4" fill="url(#goldSword)" />
      <rect x="486" y="27" width="12" height="66" rx="3" fill="#b8860b" opacity="0.4" />
      {/* Cross-guard engraving lines */}
      <line x1="489" y1="30" x2="489" y2="90" stroke="#f4d03f" strokeWidth="0.5" opacity="0.5" />
      <line x1="495" y1="30" x2="495" y2="90" stroke="#f4d03f" strokeWidth="0.5" opacity="0.5" />
      {/* Gems on cross-guard */}
      <circle cx="492" cy="35" r="4.5" fill="#8b0000" />
      <circle cx="492" cy="35" r="2.5" fill="#c41e3a" opacity="0.7" />
      <circle cx="492" cy="85" r="4.5" fill="#8b0000" />
      <circle cx="492" cy="85" r="2.5" fill="#c41e3a" opacity="0.7" />

      {/* Grip */}
      <rect x="501" y="42" width="130" height="36" rx="7" fill="url(#gripGrad)" />
      {/* Grip wrapping pattern */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <line
          key={i}
          x1={510 + i * 14}
          y1="42"
          x2={518 + i * 14}
          y2="78"
          stroke="#1a0e06"
          strokeWidth="2.5"
          opacity="0.45"
        />
      ))}
      {/* Grip leather texture overlay */}
      <rect x="501" y="42" width="130" height="36" rx="7" fill="rgba(0,0,0,0.15)" />

      {/* Pommel */}
      <ellipse cx="644" cy="60" rx="16" ry="20" fill="url(#goldSword)" />
      <ellipse cx="644" cy="60" rx="12" ry="15" fill="#b8860b" opacity="0.3" />
      <circle cx="644" cy="60" r="6" fill="#8b0000" />
      <circle cx="644" cy="60" r="3.5" fill="#c41e3a" opacity="0.6" />
      {/* Pommel ring */}
      <ellipse cx="644" cy="60" rx="16" ry="20" fill="none" stroke="#f4d03f" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/* ============================
   SHEATH SVG — moves LEFT
   ============================ */
function SheathSVG() {
  return (
    <svg viewBox="0 0 900 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="leatherGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d2b1f" />
          <stop offset="40%" stopColor="#2d1f15" />
          <stop offset="60%" stopColor="#241811" />
          <stop offset="100%" stopColor="#1a100a" />
        </linearGradient>
        <linearGradient id="goldSheath" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4d03f" />
          <stop offset="40%" stopColor="#daa520" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
        <linearGradient id="sheathHighlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
        </linearGradient>
        <filter id="sheathShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Sheath body */}
      <rect
        x="30"
        y="40"
        width="475"
        height="40"
        rx="10"
        fill="url(#leatherGrad)"
        filter="url(#sheathShadow)"
      />
      {/* Sheath highlight overlay */}
      <rect x="30" y="40" width="475" height="40" rx="10" fill="url(#sheathHighlight)" />

      {/* Chape (metal tip - left end) */}
      <path
        d="M 35,45 L 18,58 Q 14,60 18,62 L 35,75 Z"
        fill="url(#goldSheath)"
      />
      <path
        d="M 35,48 L 22,58 Q 19,60 22,62 L 35,72 Z"
        fill="#b8860b"
        opacity="0.3"
      />

      {/* Throat (metal opening - right end) */}
      <rect x="495" y="37" width="18" height="46" rx="4" fill="url(#goldSheath)" />
      <rect x="498" y="40" width="12" height="40" rx="3" fill="#b8860b" opacity="0.3" />

      {/* Decorative metal bands */}
      <rect x="140" y="38" width="8" height="44" rx="2" fill="url(#goldSheath)" opacity="0.75" />
      <rect x="280" y="38" width="8" height="44" rx="2" fill="url(#goldSheath)" opacity="0.75" />
      <rect x="400" y="38" width="8" height="44" rx="2" fill="url(#goldSheath)" opacity="0.75" />

      {/* Engraved line details */}
      <line x1="55" y1="55" x2="135" y2="55" stroke="#4a3320" strokeWidth="1" opacity="0.5" />
      <line x1="55" y1="65" x2="135" y2="65" stroke="#4a3320" strokeWidth="1" opacity="0.5" />
      <line x1="153" y1="55" x2="275" y2="55" stroke="#4a3320" strokeWidth="1" opacity="0.5" />
      <line x1="153" y1="65" x2="275" y2="65" stroke="#4a3320" strokeWidth="1" opacity="0.5" />
      <line x1="293" y1="55" x2="395" y2="55" stroke="#4a3320" strokeWidth="1" opacity="0.5" />
      <line x1="293" y1="65" x2="395" y2="65" stroke="#4a3320" strokeWidth="1" opacity="0.5" />
      <line x1="413" y1="55" x2="490" y2="55" stroke="#4a3320" strokeWidth="1" opacity="0.5" />
      <line x1="413" y1="65" x2="490" y2="65" stroke="#4a3320" strokeWidth="1" opacity="0.5" />

      {/* Crimson accent lines */}
      <line x1="60" y1="60" x2="130" y2="60" stroke="#8b0000" strokeWidth="1.5" opacity="0.3" />
      <line x1="160" y1="60" x2="270" y2="60" stroke="#8b0000" strokeWidth="1.5" opacity="0.3" />
      <line x1="300" y1="60" x2="390" y2="60" stroke="#8b0000" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

/* ============================
   EASING FUNCTION
   ============================ */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/* ============================
   MAIN PAGE COMPONENT
   ============================ */
export default function Home() {
  const heroRef = useRef(null);
  const sheathRef = useRef(null);
  const swordRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const glowRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (
          !heroRef.current ||
          !sheathRef.current ||
          !swordRef.current ||
          !containerRef.current ||
          !titleRef.current ||
          !glowRef.current ||
          !hintRef.current
        ) {
          ticking = false;
          return;
        }

        const rect = heroRef.current.getBoundingClientRect();
        const totalScroll = heroRef.current.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const rawProgress = Math.max(0, Math.min(1, scrolled / totalScroll));

        /* --- Phase 1: Separation (0 → 0.65) --- */
        const sepProgress = Math.min(1, rawProgress / 0.65);
        const easedSep = easeOutCubic(sepProgress);
        const sheathX = easedSep * -55; // vw
        const swordX = easedSep * 55;

        sheathRef.current.style.transform = `translateX(${sheathX}vw)`;
        swordRef.current.style.transform = `translateX(${swordX}vw)`;

        /* --- Blade glow increases during separation --- */
        glowRef.current.style.opacity = easedSep * 0.8;

        /* --- Title fade in (0.05 → 0.35) --- */
        const titleStart = 0.05;
        const titleEnd = 0.35;
        let titleOpacity = 0;
        let titleY = 20;
        if (rawProgress >= titleStart && rawProgress <= titleEnd) {
          const tp = (rawProgress - titleStart) / (titleEnd - titleStart);
          titleOpacity = easeOutCubic(tp);
          titleY = 20 * (1 - easeOutCubic(tp));
        } else if (rawProgress > titleEnd && rawProgress <= 0.75) {
          titleOpacity = 1;
          titleY = 0;
        }

        /* --- Phase 2: Fade out (0.7 → 1.0) --- */
        let containerOpacity = 1;
        if (rawProgress > 0.7) {
          const fadeProgress = (rawProgress - 0.7) / 0.3;
          containerOpacity = 1 - easeOutCubic(fadeProgress);
          titleOpacity *= containerOpacity;
        }

        containerRef.current.style.opacity = containerOpacity;
        titleRef.current.style.opacity = titleOpacity;
        titleRef.current.style.transform = `translateX(-50%) translateY(${titleY}px)`;

        /* --- Scroll hint fades out quickly --- */
        const hintOpacity = rawProgress < 0.08 ? 0.7 * (1 - rawProgress / 0.08) : 0;
        hintRef.current.style.opacity = hintOpacity;

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className={styles.heroWrapper} id="hero">
        <div className={styles.heroSticky}>
          {/* Background */}
          <div className={styles.bgImage}>
            <Image
              src="/images/hero-bg.png"
              alt="Crimson Royale Background"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.bgOverlay} />

          {/* Title */}
          <div ref={titleRef} className={styles.heroTitle}>
            <h1>CRIMSON ROYALE</h1>
            <p>Keberanian &bull; Kehormatan &bull; Persatuan</p>
          </div>

          {/* Sword Assembly */}
          <div ref={containerRef} className={styles.swordContainer}>
            <div ref={glowRef} className={styles.bladeGlow} />
            <div ref={sheathRef} className={styles.sheath}>
              <SheathSVG />
            </div>
            <div ref={swordRef} className={styles.sword}>
              <SwordSVG />
            </div>
          </div>

          {/* Scroll Hint */}
          <div ref={hintRef} className={styles.scrollHint}>
            <span>Scroll</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className={styles.contentSection} id="content">
        <div className={styles.contentInner}>
          <h2>Selamat Datang</h2>
          <hr className={styles.divider} />
          <p>
            Crimson Royale adalah organisasi mahasiswa yang berdedikasi untuk
            membangun jiwa kepemimpinan, keberanian, dan persaudaraan di
            lingkungan kampus. Bersama kami, raih potensi terbaikmu.
          </p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>⚔️</span>
            <h3>Keberanian</h3>
            <p>Berani tampil, berani berpendapat, berani memimpin perubahan.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🛡️</span>
            <h3>Kehormatan</h3>
            <p>
              Menjunjung tinggi integritas dan nilai-nilai luhur dalam setiap
              tindakan.
            </p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🤝</span>
            <h3>Persatuan</h3>
            <p>
              Membangun solidaritas yang kuat antar anggota untuk mencapai tujuan
              bersama.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
