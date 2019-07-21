import React from 'react';

export default class LoadingBoundary extends React.Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return {isError: true}
  }

  render() {
    if (this.state.isError) {
      return <div>Some error occured</div>
    }
    
    return this.props.children;
  }
}