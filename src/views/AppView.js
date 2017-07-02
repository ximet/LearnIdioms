import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class AppView extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
};

export default AppView;
