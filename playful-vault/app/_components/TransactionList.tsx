"use client";

interface Tx {
  id: number;
  icon: string;
  title: string;
  sub: string;
  amount: string;
  positive: boolean;
  time: string;
  iconBg: string;
}

const TRANSACTIONS: Tx[] = [
  {
    id: 1,
    icon: "🎂",
    title: "Birthday Money",
    sub: "From Grandma",
    amount: "+$10.00",
    positive: true,
    time: "Today",
    iconBg: "var(--secondary-container)",
  },
  {
    id: 2,
    icon: "🍦",
    title: "Ice Cream",
    sub: "Treat for me!",
    amount: "-$2.50",
    positive: false,
    time: "Yesterday",
    iconBg: "#fce4ec",
  },
  {
    id: 3,
    icon: "⭐",
    title: "Chore Reward",
    sub: "Cleaned room",
    amount: "+$5.00",
    positive: true,
    time: "Mon",
    iconBg: "#e3edff",
  },
  {
    id: 4,
    icon: "📚",
    title: "Book Fair",
    sub: "School",
    amount: "-$3.75",
    positive: false,
    time: "Sat",
    iconBg: "#f3e8ff",
  },
  {
    id: 5,
    icon: "🌟",
    title: "Allowance",
    sub: "Weekly",
    amount: "+$5.00",
    positive: true,
    time: "Fri",
    iconBg: "#fff4cc",
  },
];

export default function TransactionList() {
  return (
    <div className="px-4 section-gap slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-4">
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "var(--on-surface)",
          }}
        >
          Recent Activity
        </h2>
        <button
          style={{
            background: "none",
            border: "none",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--primary)",
            cursor: "pointer",
            padding: "0.2rem 0",
          }}
        >
          See All →
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
        {TRANSACTIONS.map((tx) => (
          <div
            key={tx.id}
            className="floating-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              marginBottom: 0,
              transition: "transform 0.1s ease",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "2.75rem",
                height: "2.75rem",
                flexShrink: 0,
                background: tx.iconBg,
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                boxShadow: "inset 0 -2px 0 rgba(43,42,81,0.06)",
              }}
            >
              {tx.icon}
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "var(--on-surface)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {tx.title}
              </div>
              <div
                style={{
                  fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
                  fontSize: "0.7rem",
                  color: "var(--on-surface-variant)",
                  marginTop: "0.1rem",
                }}
              >
                {tx.sub} · {tx.time}
              </div>
            </div>

            {/* Amount */}
            <span
              style={{
                fontFamily: "'Be Vietnam Pro', system-ui, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 700,
                color: tx.positive ? "#009966" : "#cc3333",
                flexShrink: 0,
              }}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
