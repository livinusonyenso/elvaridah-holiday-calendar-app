import { RegisterForm } from '../components/register-form'

interface RegisterPageProps {
  onNavigate: (page: 'login' | 'register' | 'dashboard') => void
}

export function RegisterPage({ onNavigate }: RegisterPageProps) {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>Register</h1>
        <RegisterForm onSuccess={() => onNavigate('dashboard')} />
        <p className="auth-switch">
          Already have an account?{' '}
          <button onClick={() => onNavigate('login')} className="link-button">
            Login here
          </button>
        </p>
      </div>
    </div>
  )
}
