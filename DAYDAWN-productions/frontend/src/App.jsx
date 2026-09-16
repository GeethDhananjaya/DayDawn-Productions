import React, { Component } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from './context/ThemeContext';
import { ErrorMessage } from './components/common/ErrorMessage';
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
          backgroundColor: '#0a0a0c',
          color: '#f5f5f7',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <h1 style={{ fontFamily: 'serif', color: '#e5a93c', marginBottom: '1rem' }}>
            DAYDAWN Productions
          </h1>
          <p style={{ marginBottom: '1.5rem', color: '#a1a1aa' }}>
            A temporary display error occurred while rendering the production stream.
          </p>
          <Button onClick={this.handleReload}>Reload Platform</Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function App() {
  return (
    <GlobalErrorBoundary>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
