import React, { Component } from 'react';
import { Link, navigate, Redirect } from '@reach/router';
import { DetailsProps } from '../details/details';

export interface ErrorBoundaryState {
  hasError: boolean;
  redirect: boolean;
}

export class ErrorBoundary extends Component<any, ErrorBoundaryState> {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  componentDidUpdate(nextProps: Readonly<DetailsProps>, nextState: Readonly<any>, nextContext: any): void {
    if (this.state.hasError) {
      setTimeout(() => {
        // navigate('/'); // alternative to redirect element
        this.setState({ redirect: true })
      }, 5000);
    }

}

  render() {
    if (this.state.redirect) {
      return (<Redirect to={'/'}/>);
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to={'/'}>Click here</Link> to go back to the home page or wait 5 seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
