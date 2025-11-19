import { Calendar } from '../components/calendar'
import { useAuth } from '../context/auth-context'

interface DashboardPageProps {
  onNavigate: (page: 'login' | 'register' | 'dashboard') => void
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    onNavigate('login')
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Google Calendar Dashboard</h1>
          <p className="welcome-text">Welcome, {user?.name}!</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>
      <main className="dashboard-main">
        <Calendar />
      </main>
    </div>
  )
}
