import { useState, useEffect } from 'react'
import { AuthProvider, useAuth } from './context/auth-context'
import { AuthGuard } from './components/auth-guard'
import { LoginPage } from './pages/login-page'
import { RegisterPage } from './pages/register-page'
import { DashboardPage } from './pages/dashboard-page'
import './App.css'

type Page = 'login' | 'register' | 'dashboard'

function AppContent() {
  const { isAuthenticated } = useAuth()
  const [currentPage, setCurrentPage] = useState<Page>('login')

  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (isAuthenticated) {
      setCurrentPage('dashboard')
    } else {
      setCurrentPage('login')
    }
  }, [isAuthenticated])

  return (
    <div className="app-container">
      {currentPage === 'login' && (
        <LoginPage onNavigate={(page) => setCurrentPage(page)} />
      )}
      {currentPage === 'register' && (
        <RegisterPage onNavigate={(page) => setCurrentPage(page)} />
      )}
      {currentPage === 'dashboard' && (
        <AuthGuard>
          <DashboardPage onNavigate={(page) => setCurrentPage(page)} />
        </AuthGuard>
      )}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
