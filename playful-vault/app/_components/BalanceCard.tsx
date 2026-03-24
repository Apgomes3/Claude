"use client";

import { useState } from "react";

const SPARKLES = ["✦", "✧", "⋆", "✦"];

export default function BalanceCard() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="relative px-4 pt-2 pb-0 section-gap">
      {/* Decorative blob behind card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(8,70,237,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Floating sparkles */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute text-xs font-bold pointer-events-none select-none"
          style={{
            color: i % 2 === 0 ? "var(--secondary)" : "var(--primary-container)",
            top: `${[8, 22, 40, 15][i]}%`,
            left: `${[8, 75, 85, 88][i]}%`,
            fontSize: `${[10, 8, 12, 7][i]}px`,
            opacity: 0.8,
          }}
        >
          {s}
        </span>
      ))}

      {/* Glass Card */}
      <div
        className="glass-card ambient-shadow relative overflow-hidden"
        style={{
          borderRadius: "var(--radius-xl)",
          padding: "1.75rem 1.75rem 2rem",
          minHeight: "13rem",
        }}
      >
        {/* Inner gradient blob */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: "180px",
            height: "180px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 70%)",
            top: "-40px",
            right: "-30px",
            borderRadius: "50%",
          }}
        />

        {/* Header row */}
        <div className="flex items-center justify-between mb-1">
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--on-primary-container)",
              opacity: 0.75,
            }}
          >
            My Vault
          </span>
          <button
            onClick={() => setVisible((v) => !v)}
            style={{
              background: "rgba(255,255,255,0.45)",
              border: "none",
              borderRadius: "var(--radius-sm)",
              padding: "0.25rem 0.6rem",
              fontSize: "0.7rem",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 700,
              color: "var(--on-primary-container)",
              cursor: "pointer",
            }}
          >
            {visible ? "Hide" : "Show"}
          </button>
        </div>

        {/* Balance */}
        <div className="flex items-end gap-2 mb-4">
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "var(--on-primary-container)",
              alignSelf: "flex-start",
              marginTop: "0.5rem",
            }}
          >
            $
          </span>
          <span
            className={visible ? "shimmer-text" : ""}
            style={{
              fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
              fontSize: "3.5rem",
              fontWeight: 800,
              lineHeight: 1,
              color: visible ? undefined : "var(--on-primary-container)",
              letterSpacing: "-0.03em",
            }}
          >
            {visible ? "47.85" : "••••"}
          </span>
        </div>

        {/* Stats row */}
        <div className="flex gap-4">
          <StatPill icon="↑" label="Earned" value="+$12.00" color="var(--tertiary)" />
          <StatPill icon="↓" label="Spent" value="-$4.15" color="#ffb3b3" />
          <StatPill icon="🎯" label="Goals" value="2 active" color="var(--secondary)" />
        </div>

        {/* Floating 3D coin — breaks the card boundary */}
        <div
          className="absolute float-anim icon-float-shadow pointer-events-none"
          style={{ top: "-28px", right: "28px", fontSize: "4.5rem", zIndex: 10 }}
        >
          🪙
        </div>
      </div>
    </div>
  );
}

function StatPill({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.45)",
        borderRadius: "var(--radius-md)",
        padding: "0.4rem 0.65rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.1rem",
        minWidth: "5rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          fontSize: "0.6rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "var(--on-primary-container)",
          opacity: 0.65,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "var(--on-surface)",
        }}
      >
        <span style={{ marginRight: "0.25rem" }}>{icon}</span>
        {value}
      </span>
    </div>
  );
}
