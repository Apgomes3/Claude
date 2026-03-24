"use client";

import { useState } from "react";

const NAV = [
  { icon: "🏠", label: "Home" },
  { icon: "🎯", label: "Goals" },
  { icon: "📊", label: "Stats" },
  { icon: "👤", label: "Profile" },
];

export default function BottomNav() {
  const [active, setActive] = useState(0);

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "430px",
        background: "rgba(249, 245, 255, 0.92)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        borderTop: "1px solid var(--outline-variant)",
        padding: "0.5rem 1rem 1.25rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      {NAV.map((item, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          style={{
            background: active === i ? "var(--surface-container)" : "none",
            border: "none",
            borderRadius: "var(--radius-md)",
            padding: "0.4rem 0.9rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.15rem",
            cursor: "pointer",
            transition: "background 0.15s ease, transform 0.1s ease",
            transform: active === i ? "scale(1)" : "scale(0.95)",
          }}
        >
          <span style={{ fontSize: active === i ? "1.4rem" : "1.2rem", transition: "font-size 0.15s ease" }}>
            {item.icon}
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "0.6rem",
              fontWeight: 700,
              color: active === i ? "var(--primary)" : "var(--on-surface-variant)",
              letterSpacing: "0.03em",
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
