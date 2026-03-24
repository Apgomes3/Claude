"use client";

import { useState } from "react";

interface Goal {
  id: number;
  emoji: string;
  name: string;
  current: number;
  target: number;
  color: "blue" | "yellow" | "mint";
}

const INITIAL_GOALS: Goal[] = [
  { id: 1, emoji: "🚲", name: "New Bike", current: 38, target: 80, color: "blue" },
  { id: 2, emoji: "🎮", name: "Video Game", current: 22, target: 60, color: "yellow" },
  { id: 3, emoji: "🦕", name: "Dinosaur Set", current: 55, target: 55, color: "mint" },
];

const COLOR_MAP = {
  blue: {
    track: "var(--tertiary-fixed)",
    fill: "cta-gradient",
    chipBg: "#e3edff",
    pct: "var(--primary)",
  },
  yellow: {
    track: "#fff3b3",
    fill: "cta-gradient-yellow",
    chipBg: "var(--secondary-container)",
    pct: "#c8a000",
  },
  mint: {
    track: "var(--tertiary-fixed)",
    fill: "",
    chipBg: "#d0fff0",
    pct: "#009966",
  },
};

export default function SavingsGoals() {
  const [goals] = useState<Goal[]>(INITIAL_GOALS);

  return (
    <div className="px-4 section-gap slide-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-4">
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "var(--on-surface)",
          }}
        >
          Savings Goals
        </h2>
        <button
          style={{
            background: "var(--surface-container-low)",
            border: "none",
            borderRadius: "var(--radius-xl)",
            padding: "0.35rem 0.9rem",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "var(--primary)",
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
        >
          + New Goal
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {goals.map((goal) => {
          const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
          const done = pct === 100;
          const c = COLOR_MAP[goal.color];

          return (
            <div
              key={goal.id}
              className="floating-row float-shadow"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: 0,
              }}
            >
              {/* 3D icon chip — breaks top edge */}
              <div
                className={done ? "pulse-slow" : ""}
                style={{
                  width: "3rem",
                  height: "3rem",
                  flexShrink: 0,
                  background: c.chipBg,
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  boxShadow: done
                    ? "0 0 0 3px var(--secondary), 0 4px 12px rgba(43,42,81,0.1)"
                    : "inset 0 -3px 0 rgba(43,42,81,0.08)",
                }}
              >
                {goal.emoji}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: "0.4rem" }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--on-surface)",
                    }}
                  >
                    {goal.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: done ? "#009966" : c.pct,
                    }}
                  >
                    {done ? "🎉 Done!" : `${pct}%`}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="progress-track">
                  <div
                    className={`progress-fill ${goal.color === "yellow" ? "progress-fill-yellow" : goal.color === "mint" ? "" : ""}`}
                    style={{
                      width: `${pct}%`,
                      background:
                        goal.color === "yellow"
                          ? "linear-gradient(90deg, #f5c800 0%, var(--secondary) 100%)"
                          : goal.color === "mint"
                          ? "linear-gradient(90deg, #00c98a 0%, var(--tertiary) 100%)"
                          : undefined,
                    }}
                  />
                </div>

                {/* Amount sub-label */}
                <div
                  style={{
                    marginTop: "0.3rem",
                    fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
                    fontSize: "0.7rem",
                    color: "var(--on-surface-variant)",
                  }}
                >
                  ${goal.current} saved of ${goal.target}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
