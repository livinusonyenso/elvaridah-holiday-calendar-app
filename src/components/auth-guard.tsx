import { ReactNode } from 'react'
import { useAuth } from '../context/auth-context'

interface AuthGuardProps {
  children: ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <div className="auth-guard-message">Please log in first</div>
  }

  return <>{children}</>
}
