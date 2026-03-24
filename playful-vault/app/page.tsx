import Header from "./_components/Header";
import BalanceCard from "./_components/BalanceCard";
import QuickActions from "./_components/QuickActions";
import SavingsGoals from "./_components/SavingsGoals";
import TransactionList from "./_components/TransactionList";
import AchievementChips from "./_components/AchievementChips";
import BottomNav from "./_components/BottomNav";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "430px",
        margin: "0 auto",
        minHeight: "100dvh",
        background: "var(--surface)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          maxWidth: "430px",
          margin: "0 auto",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(ellipse 70% 40% at 15% 0%, rgba(152,255,217,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 90%, rgba(8,70,237,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Scrollable content */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          paddingBottom: "6rem",
        }}
      >
        <Header />
        <BalanceCard />
        <QuickActions />
        <SavingsGoals />
        <AchievementChips />
        <TransactionList />
      </main>

      <BottomNav />
    </div>
  );
}
