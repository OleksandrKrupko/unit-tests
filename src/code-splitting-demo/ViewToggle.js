import React from 'react';

export class ViewToggle extends React.Component {
  state = {
    isOpened: false,
  }

  toggleView = () => {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened,
    }));
  }
  
  render() {
    const {isOpened} = this.state;

    return (
      <React.Fragment>
        <button onClick={this.toggleView}>
          {isOpened ? 'hide' : 'show'}
        </button>
        {
          isOpened && this.props.children
        }
      </React.Fragment>
    )
  }
}