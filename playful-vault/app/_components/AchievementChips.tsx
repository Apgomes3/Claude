"use client";

interface Achievement {
  icon: string;
  label: string;
  unlocked: boolean;
  desc: string;
}

const ACHIEVEMENTS: Achievement[] = [
  { icon: "🏆", label: "Super Saver", unlocked: true, desc: "Saved 3 weeks in a row" },
  { icon: "🌱", label: "First Goal", unlocked: true, desc: "Completed your first goal" },
  { icon: "💫", label: "5-Star Chores", unlocked: true, desc: "Did 5 chores this week" },
  { icon: "🔒", label: "Spending Ninja", unlocked: false, desc: "Save 30 days straight" },
  { icon: "🔒", label: "Big Dreamer", unlocked: false, desc: "Set a goal over $100" },
];

export default function AchievementChips() {
  return (
    <div className="px-4 section-gap slide-up" style={{ animationDelay: "0.4s" }}>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontSize: "1.125rem",
          fontWeight: 700,
          color: "var(--on-surface)",
          marginBottom: "1rem",
        }}
      >
        Achievements
      </h2>

      {/* Horizontal scroll row */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
          scrollbarWidth: "none",
        }}
      >
        {ACHIEVEMENTS.map((a, i) => (
          <div
            key={i}
            className={`achievement-chip ${a.unlocked ? "pop-in" : ""}`}
            style={{
              flexShrink: 0,
              opacity: a.unlocked ? 1 : 0.45,
              filter: a.unlocked ? "none" : "grayscale(1)",
              animationDelay: `${i * 0.07}s`,
              cursor: "default",
              userSelect: "none",
            }}
          >
            {/* 3D icon overflows top edge */}
            <div
              style={{
                width: "2.2rem",
                height: "2.2rem",
                borderRadius: "var(--radius-sm)",
                background: a.unlocked ? "var(--secondary)" : "var(--surface-container-high)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
                flexShrink: 0,
                boxShadow: a.unlocked
                  ? "0 -4px 0 rgba(43,42,81,0.12), 0 4px 12px rgba(253,212,0,0.4)"
                  : "inset 0 -2px 0 rgba(43,42,81,0.08)",
                marginTop: "-0.75rem",
              }}
            >
              {a.icon}
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "var(--on-surface)",
                  whiteSpace: "nowrap",
                }}
              >
                {a.label}
              </div>
              <div
                style={{
                  fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
                  fontSize: "0.6rem",
                  color: "var(--on-surface-variant)",
                  whiteSpace: "nowrap",
                }}
              >
                {a.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
