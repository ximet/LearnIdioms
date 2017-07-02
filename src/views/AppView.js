import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('appView')
@observer
class AppView extends Component {
  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appView.timer}
        </button>
      </div>
    );
  }

  onReset = () => {
    this.props.store.appView.resetTimer();
  }
};

export default AppView;
