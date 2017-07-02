import React, { Component } from 'react';
import { observer } from 'mobx-react';

class AppView extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.store.appView.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.store.appView.resetTimer();
  }
};

export default observer(['store'], AppView);
