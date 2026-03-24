"use client";

import { useState } from "react";

const ACTIONS = [
  { icon: "💸", label: "Send", bg: "var(--surface-container-low)", iconBg: "#e3edff" },
  { icon: "📥", label: "Receive", bg: "var(--surface-container-low)", iconBg: "#e8fff5" },
  { icon: "🎯", label: "Save", bg: "var(--surface-container-low)", iconBg: "var(--secondary-container)" },
  { icon: "🛒", label: "Spend", bg: "var(--surface-container-low)", iconBg: "#ffe8e8" },
];

export default function QuickActions() {
  const [pressed, setPressed] = useState<number | null>(null);

  return (
    <div className="px-4 section-gap slide-up" style={{ animationDelay: "0.1s" }}>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontSize: "1.125rem",
          fontWeight: 700,
          color: "var(--on-surface)",
          marginBottom: "1rem",
        }}
      >
        Quick Actions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem",
        }}
      >
        {ACTIONS.map((a, i) => (
          <button
            key={i}
            onPointerDown={() => setPressed(i)}
            onPointerUp={() => setPressed(null)}
            onPointerLeave={() => setPressed(null)}
            style={{
              background: a.bg,
              border: "none",
              borderRadius: "var(--radius-lg)",
              padding: "1rem 0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              transform: pressed === i ? "scale(0.92)" : "scale(1)",
              transition: "transform 0.1s ease, box-shadow 0.1s ease",
              boxShadow:
                pressed === i
                  ? "none"
                  : "0 4px 12px rgba(43,42,81,0.08)",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "var(--radius-md)",
                background: a.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
              }}
            >
              {a.icon}
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "var(--on-surface-variant)",
                letterSpacing: "0.02em",
              }}
            >
              {a.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
