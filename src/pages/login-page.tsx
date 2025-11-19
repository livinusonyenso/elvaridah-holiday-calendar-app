import { LoginForm } from '../components/login-form'

interface LoginPageProps {
  onNavigate: (page: 'login' | 'register' | 'dashboard') => void
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Login</h1>
        <LoginForm onSuccess={() => onNavigate('dashboard')} />
        <p className="auth-switch">
          Don't have an account?{' '}
          <button onClick={() => onNavigate('register')} className="link-button">
            Register here
          </button>
        </p>
      </div>
    </div>
  )
}
