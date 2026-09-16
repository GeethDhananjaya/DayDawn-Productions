import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth, ROLES } from '../../auth';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/ui/Input';
import { Logo } from '../../components/common/Logo';
import { ErrorMessage } from '../../components/common/ErrorMessage';
import { ROUTES } from '../../constants';
import heroImage from '../../assets/images/—Pngtree—group of people working on_15725416.jpg';
import './Login.css';

export const LoginPage = () => {
  const { login, isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get('redirect') || ROUTES.HOME;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(ROLES.CREW);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login({ email, password, role: selectedRole });
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isAuthenticated && user) {
    return (
      <div className="login-page">
        <div className="login-panel">
          <div className="login-panel__header">
            <span className="login-panel__badge">Active Session</span>
            <h1 className="login-panel__title">PORTAL ACCESS</h1>
            <p className="login-panel__desc">
              Logged in as <strong>{user.name}</strong> ({user.role})
            </p>
          </div>

          <div className="login-panel__actions">
            <Link to={redirectPath !== '/login' ? redirectPath : ROUTES.HOME}>
              <Button size="md" className="login-btn">
                Enter Production Portal →
              </Button>
            </Link>
            <Button variant="secondary" size="md" onClick={logout} className="login-btn">
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side: Editorial Production Imagery */}
        <div className="login-visual">
          <img
            src={heroImage}
            alt="DAYDAWN Production Crew on set"
            className="login-visual__img"
          />
          <div className="login-visual__overlay" />
          <div className="login-visual__content">
            <span className="login-visual__tag">DAYDAWN PORTAL</span>
            <h2 className="login-visual__headline">CREATIVE & CREW ACCESS</h2>
            <p className="login-visual__text">
              Unified workspace for directors, cinematographers, production crew, and project clients.
            </p>
          </div>
        </div>

        {/* Right Side: Minimal Form */}
        <div className="login-form-wrapper">
          <div className="login-header">
            <Logo size="md" theme="light" className="login-header__logo" />
            <h1 className="login-title">PRODUCTION PORTAL</h1>
            <p className="login-subtitle">
              Sign in with your crew or client credentials.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <ErrorMessage message={error} />

            <Input
              id="login-email"
              type="email"
              label="Work Email"
              placeholder="crew@daydawnproductions.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />

            <Input
              id="login-password"
              type="password"
              label="Password / Key"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Department Role Selector for Initial Development & Architecture Testing */}
            <div className="role-selector-group">
              <label className="form-label">Access Department</label>
              <div className="role-pills">
                {Object.values(ROLES).map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`role-pill ${selectedRole === r ? 'role-pill--active' : ''}`}
                    onClick={() => setSelectedRole(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <span className="role-hint text-muted">
                Pre-configures test session role for {selectedRole} department.
              </span>
            </div>

            <Button
              type="submit"
              size="lg"
              isLoading={isLoading}
              className="login-submit-btn"
            >
              Sign In to Production Portal
            </Button>
          </form>

          <div className="login-footer">
            <Link to={ROUTES.HOME} className="login-back-link">
              ← Return to Main Stage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
