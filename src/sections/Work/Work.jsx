import React, { useState } from "react";
import styles from "./Work.module.css";
import info from "../../info.json";

// Map tag → FA icon
const TAG_ICONS = {
  Architecture: "fa-solid fa-sitemap",
  Leadership: "fa-solid fa-crown",
  Impact: "fa-solid fa-arrow-trend-up",
  Tooling: "fa-solid fa-wrench",
  Security: "fa-solid fa-shield-halved",
  Innovation: "fa-solid fa-wand-magic-sparkles",
  Accessibility: "fa-solid fa-universal-access",
  Engineering: "fa-solid fa-gear",
  Backend: "fa-solid fa-server",
  DevOps: "fa-solid fa-code-branch",
  Frontend: "fa-solid fa-palette",
  default: "fa-solid fa-circle-dot",
};

// Priority order — show these tags first
const PRIORITY_ORDER = [
  "Architecture",
  "Leadership",
  "Impact",
  "Innovation",
  "Security",
  "Tooling",
  "Accessibility",
  "Engineering",
  "Backend",
  "DevOps",
  "Frontend",
];

function sortByPriority(items) {
  return [...items].sort((a, b) => {
    const ai = PRIORITY_ORDER.indexOf(a.tag ?? "default");
    const bi = PRIORITY_ORDER.indexOf(b.tag ?? "default");
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

const TAG_COLORS = {
  Architecture: {
    bg: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.35)",
    text: "#c4b5fd",
  },
  Leadership: {
    bg: "rgba(251,191,36,0.1)",
    border: "rgba(251,191,36,0.35)",
    text: "#fbbf24",
  },
  Impact: {
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.35)",
    text: "#34d399",
  },
  Tooling: {
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.35)",
    text: "#fcd34d",
  },
  Security: {
    bg: "rgba(239,68,68,0.1)",
    border: "rgba(239,68,68,0.35)",
    text: "#f87171",
  },
  Innovation: {
    bg: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.4)",
    text: "#a78bfa",
  },
  Accessibility: {
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.35)",
    text: "#67e8f9",
  },
  Engineering: {
    bg: "rgba(100,116,139,0.12)",
    border: "rgba(100,116,139,0.3)",
    text: "#94a3b8",
  },
  Backend: {
    bg: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.3)",
    text: "#67e8f9",
  },
  DevOps: {
    bg: "rgba(168,85,247,0.1)",
    border: "rgba(168,85,247,0.3)",
    text: "#c4b5fd",
  },
  Frontend: {
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.3)",
    text: "#34d399",
  },
  default: {
    bg: "rgba(100,116,139,0.1)",
    border: "rgba(100,116,139,0.3)",
    text: "#94a3b8",
  },
};

function WorkItem({ item, index }) {
  const tag = item.tag ?? "default";
  const colors = TAG_COLORS[tag] ?? TAG_COLORS.default;
  const icon = TAG_ICONS[tag] ?? TAG_ICONS.default;
  const isHighPriority = [
    "Architecture",
    "Leadership",
    "Impact",
    "Innovation",
  ].includes(tag);

  return (
    <div
      className={`${styles.workItem} ${isHighPriority ? styles.featured : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* Tag badge */}
      <div className={styles.itemHeader}>
        <span
          className={styles.tagBadge}
          style={{
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            color: colors.text,
          }}
        >
          <i className={icon} style={{ fontSize: "10px" }} />
          {tag}
        </span>
        {item.metric && (
          <span className={styles.metricPill}>
            <i
              className="fa-solid fa-chart-bar"
              style={{ fontSize: "9px", color: "#a855f7" }}
            />
            {item.metric}
          </span>
        )}
      </div>

      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemDesc}>{item.description}</p>
    </div>
  );
}

function Work() {
  const work = info.work;

  // Build flat list of all positions
  const allPositions = [];
  work.forEach((companyObj) => {
    const [[companyName, positions]] = Object.entries(companyObj);
    positions.forEach((pos) => {
      allPositions.push({ companyName, ...pos });
    });
  });

  const [activeKey, setActiveKey] = useState(allPositions[0].positionTitle);

  const activePosition = allPositions.find(
    (p) => p.positionTitle === activeKey,
  );
  const sortedItems = activePosition
    ? sortByPriority(activePosition.workItems)
    : [];

  return (
    <section id="work" className={styles.workSection}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <i className="fa-solid fa-briefcase" style={{ color: "#a855f7" }} />
          Professional Experience
        </div>
        <h1 className={styles.pageSectionTitle}>Work</h1>
      </div>

      <div className={styles.layout}>
        {/* ── Sidebar ── */}
        <aside className={styles.sidebar}>
          {work.map((companyObj, ci) => {
            const [[companyName, positions]] = Object.entries(companyObj);
            return (
              <div key={ci} className={styles.companyGroup}>
                <div className={styles.companyLabel}>
                  <i
                    className="fa-solid fa-building"
                    style={{ fontSize: "10px", color: "#475569" }}
                  />
                  {companyName}
                </div>

                {positions.map((pos) => {
                  const isActive = activeKey === pos.positionTitle;
                  return (
                    <button
                      key={pos.positionTitle}
                      className={`${styles.positionBtn} ${isActive ? styles.active : ""}`}
                      onClick={() => setActiveKey(pos.positionTitle)}
                    >
                      <span className={styles.posTitle}>
                        {pos.positionTitle}
                      </span>
                      <span className={styles.posMeta}>
                        <i
                          className="fa-regular fa-calendar"
                          style={{ fontSize: "9px" }}
                        />
                        {pos.startDate} — {pos.endDate || "Present"}
                      </span>
                      <span className={styles.posMeta}>
                        <i
                          className="fa-solid fa-location-dot"
                          style={{ fontSize: "9px" }}
                        />
                        {pos.location}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}

          {/* Legend */}
          <div className={styles.legend}>
            <div className={styles.legendTitle}>Priority Key</div>
            {[
              { tag: "Architecture", label: "Architected" },
              { tag: "Leadership", label: "Led / Owned" },
              { tag: "Impact", label: "Measurable Impact" },
              { tag: "Innovation", label: "Innovated" },
            ].map(({ tag, label }) => {
              const c = TAG_COLORS[tag];
              return (
                <div key={tag} className={styles.legendItem}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: c.text,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "11px",
                      fontFamily: "'JetBrains Mono',monospace",
                    }}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </aside>

        {/* ── Detail Panel ── */}
        <div className={styles.detailsPanel} key={activeKey}>
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>
                {activePosition?.positionTitle}
              </h2>
              <p className={styles.panelMeta}>
                <i
                  className="fa-solid fa-building"
                  style={{ fontSize: "11px", color: "#a855f7" }}
                />
                {activePosition?.companyName} &nbsp;·&nbsp;
                <i
                  className="fa-solid fa-location-dot"
                  style={{ fontSize: "11px", color: "#a855f7" }}
                />
                {activePosition?.location} &nbsp;·&nbsp;
                {activePosition?.startDate} —{" "}
                {activePosition?.endDate || "Present"}
              </p>
            </div>
            <div className={styles.itemCount}>
              <span>{sortedItems.length}</span>
              <span
                style={{
                  fontSize: "10px",
                  color: "#475569",
                  fontFamily: "'JetBrains Mono',monospace",
                }}
              >
                highlights
              </span>
            </div>
          </div>

          <div className={styles.workItemsList}>
            {sortedItems.map((item, i) => (
              <WorkItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
