"use client";

export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-4 pt-6 pb-2 slide-up"
      style={{ animationDelay: "0s" }}
    >
      {/* Greeting */}
      <div>
        <p
          style={{
            fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
            fontSize: "0.8rem",
            color: "var(--on-surface-variant)",
            marginBottom: "0.1rem",
          }}
        >
          Good morning <span className="wave-emoji">👋</span>
        </p>
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "1.375rem",
            fontWeight: 800,
            color: "var(--on-surface)",
            lineHeight: 1.2,
          }}
        >
          Hey, Jamie!
        </h1>
      </div>

      {/* Avatar + notification */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "2.75rem",
            height: "2.75rem",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--primary) 0%, #8fa8ff 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(8,70,237,0.25)",
          }}
        >
          🐱
        </div>
        {/* Notification dot */}
        <div
          style={{
            position: "absolute",
            top: "-2px",
            right: "-2px",
            width: "0.75rem",
            height: "0.75rem",
            borderRadius: "50%",
            background: "var(--secondary)",
            border: "2px solid var(--surface)",
          }}
        />
      </div>
    </header>
  );
}
