import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.idInterval = null;
  }

  start = () => {
    if (this.idInterval === null) {
      this.idInterval = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    }
  };

  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
  };

  reset = () => {
    this.stop();
    this.setState({ count: 0 });
  };

  componentDidMount() {
    //this.start()
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    //this.stop()
  }

  render() {
    const { count } = this.state;
    return (
      <article>
        <h2>{count}</h2>
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.reset}>reset</button>
          <button onClick={this.stop}>stop</button>
        </div>
      </article>
    );
  }
}

export default StopWatch;
