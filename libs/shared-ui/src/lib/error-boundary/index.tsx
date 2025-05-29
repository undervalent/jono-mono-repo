import React from 'react';

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  override render() {
    if (this.state.hasError) {
      return (
        <div role="alert" aria-live="assertive" tabIndex={-1}>
          <h2>Error occurred</h2>
          <p>{this.state.error?.message || 'Something went wrong.'}</p>
          <button onClick={this.handleRetry}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}
