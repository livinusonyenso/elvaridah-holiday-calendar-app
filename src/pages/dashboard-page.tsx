import { Calendar } from "../components/calendar";
import { useAuth } from "../context/auth-context";
import "./DashboardPage.css"
interface DashboardPageProps {
  onNavigate: (page: "login" | "register" | "dashboard") => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onNavigate("login");
  };

  return (
    <div className="dash-container">
      {/* TOP HEADER */}
      <header className="dash-header">
        <div className="dash-header-left">
          <h1 className="dash-title">Google Calendar Dashboard</h1>
          <p className="dash-welcome">Welcome, {user?.name} 👋</p>
        </div>

        <button onClick={handleLogout} className="dash-logout-btn">
          Logout
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="dash-main">
        <Calendar />
      </main>
    </div>
  );
}
