import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.jpg";
import info from "../../info.json";
import resume from "../../assets/Avinash_Resume.pdf";

const ROLES = [
  "Adobe Certified AEM Developer",
  "Full Stack Developer",
  "UI/UX Designer",
];

const SOCIALS = [
  { url: "profiles.GitHub.url", icon: "fa-brands fa-github", label: "GitHub" },
  {
    url: "profiles.LinkedIn.url",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    url: "profiles.Instagram.url",
    icon: "fa-brands fa-instagram",
    label: "Instagram",
  },
  {
    url: "profiles.Twitter.url",
    icon: "fa-brands fa-x-twitter",
    label: "Twitter/X",
  },
];

function getNestedVal(obj, path) {
  return path.split(".").reduce((o, k) => o?.[k], obj);
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((p) => (p + 1) % ROLES.length);
        setFade(true);
      }, 320);
    }, 2200);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      {/* ══ HERO ══ */}
      <section id="hero" className={styles.heroSection}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />

        <div className={styles.content}>
          {/* Photo */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageRing} />
            <img
              className={styles.heroImg}
              src={heroImg}
              alt="Avinash Mani Kiran"
            />
            <div className={styles.statusBadge}>
              <div className={styles.statusDot} />
              Available for work
            </div>
          </div>

          {/* Info */}
          <div className={styles.info}>
            {/* Rotating role */}
            <div className={styles.eyebrow}>
              <span
                className={styles.roleText}
                style={{
                  opacity: fade ? 1 : 0,
                  transform: fade ? "translateY(0)" : "translateY(-8px)",
                }}
              >
                {ROLES[roleIndex]}
              </span>
            </div>

            <h1 className={styles.heroName}>
              {info.firstName}
              <span className={styles.highlight}>{info.lastName}</span>
            </h1>

            {/* Tech stack pills */}
            <div className={styles.techStack}>
              {["AEM", "React", "Java", "Node.js", "Azure"].map((t) => (
                <span key={t} className={styles.techPill}>
                  {t}
                </span>
              ))}
            </div>

            <p className={styles.heroDescription}>{info.description}</p>

            {/* Actions */}
            <div className={styles.actions}>
              <a href={resume} download className={styles.downloadBtn}>
                <i className="fa-solid fa-download" />
                Download Resume
              </a>

              <div className={styles.socials}>
                {SOCIALS.map(({ url, icon, label }) => (
                  <a
                    key={label}
                    href={getNestedVal(info, url)}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialLink}
                    title={label}
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          {/* Left: narrative */}
          <div className={styles.aboutLeft}>
            <div className={styles.aboutEyebrow}>
              <i className="fa-solid fa-user" style={{ color: "#a855f7" }} />
              About Me
            </div>
            <h2 className={styles.aboutTitle}>
              Turning complex enterprise requirements into{" "}
              <span className={styles.aboutTitleAccent}>
                elegant, scalable solutions
              </span>
            </h2>
            <p className={styles.aboutText}>
              I'm an{" "}
              <strong style={{ color: "#c4b5fd" }}>
                Adobe Certified AEM Developer
              </strong>{" "}
              with 3+ years building enterprise-grade digital platforms at
              Microchip Technology. I specialise in the full AEM stack —
              OSGi/Sling/JCR architecture, custom component development,
              Dispatcher caching, and large-scale DAM automation.
            </p>
            <p className={styles.aboutText}>
              I've architected integrations spanning AI chatbots, Azure AD B2C
              SSO pipelines, GDPR compliance tooling, and event-driven asset
              synchronisation — always with performance, security, and
              accessibility as non-negotiables. On the frontend, I build with
              React, TypeScript, and modern CI/CD on Azure DevOps.
            </p>

            {/* Certs */}
            <div className={styles.certRow}>
              <div className={styles.certCard}>
                <i
                  className="fa-solid fa-certificate"
                  style={{ color: "#f59e0b", fontSize: "18px" }}
                />
                <div>
                  <div className={styles.certTitle}>Adobe Certified Expert</div>
                  <div className={styles.certSub}>
                    AEM Developer · Adobe, 2024
                  </div>
                </div>
              </div>
              <div className={styles.certCard}>
                <i
                  className="fa-brands fa-meta"
                  style={{ color: "#0ea5e9", fontSize: "18px" }}
                />
                <div>
                  <div className={styles.certTitle}>
                    Certified Frontend Developer
                  </div>
                  <div className={styles.certSub}>
                    Meta · Professional Certificate, 2023
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: metrics */}
          <div className={styles.aboutRight}>
            <div className={styles.metricsHeading}>
              <i
                className="fa-solid fa-chart-line"
                style={{ color: "#a855f7" }}
              />
              Impact at a Glance
            </div>
            <div className={styles.statsGrid}>
              {[
                {
                  num: "3+",
                  label: "Years in Enterprise AEM",
                  icon: "fa-solid fa-briefcase",
                  color: "#a855f7",
                },
                {
                  num: "60K+",
                  label: "DAM Assets Synced",
                  icon: "fa-solid fa-database",
                  color: "#06b6d4",
                },
                {
                  num: "99.9%",
                  label: "Sync Pipeline Accuracy",
                  icon: "fa-solid fa-bullseye",
                  color: "#10b981",
                },
                {
                  num: "+15%",
                  label: "User Engagement Uplift",
                  icon: "fa-solid fa-arrow-trend-up",
                  color: "#f59e0b",
                },
                {
                  num: "+7%",
                  label: "SSO Registration Growth",
                  icon: "fa-solid fa-user-plus",
                  color: "#06b6d4",
                },
                {
                  num: "−30%",
                  label: "Manual Config Effort Saved",
                  icon: "fa-solid fa-bolt",
                  color: "#a855f7",
                },
                {
                  num: "100%",
                  label: "GDPR & CCPA Compliant",
                  icon: "fa-solid fa-shield-halved",
                  color: "#10b981",
                },
                {
                  num: "8.24",
                  label: "B.Tech GPA / 10 · VIT-AP",
                  icon: "fa-solid fa-graduation-cap",
                  color: "#f59e0b",
                },
              ].map(({ num, label, icon, color }) => (
                <div key={label} className={styles.statCard}>
                  <i className={icon} style={{ color, fontSize: "16px" }} />
                  <span className={styles.statNum} style={{ color }}>
                    {num}
                  </span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
