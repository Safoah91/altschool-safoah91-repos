import React, { Component } from 'react';
import ShowErrorBoundary from './ShowErrorBoundary';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }


  render() {
    if (this.state.hasError) {
      return (
        <>
          <ShowErrorBoundary />
        </>

      )
    }
    return this.props.children
  }
}

export default ErrorBoundary;