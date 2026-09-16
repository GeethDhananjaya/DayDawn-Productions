import React, { Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AuthProvider } from './auth';
import { Button } from './components/common/Button';

/**
 * Top-level Error Boundary for graceful UI error recovery
 */
class GlobalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error caught by GlobalErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          color: '#ffffff',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
            DAYDAWN PRODUCTIONS
          </h1>
          <p style={{ marginBottom: '1.5rem', color: '#a1a1aa', maxWidth: '500px' }}>
            A temporary display error occurred while rendering the production stream.
          </p>
          <Button variant="white" onClick={this.handleReload}>Reload Platform</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function App() {
  return (
    <GlobalErrorBoundary>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
