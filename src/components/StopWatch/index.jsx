import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0), //object
    };
    this.idInterval = null;
  }

  tick = () => {
    // const { time } = this.state; //address
    // const newTime = new Date(time); //new copy time
    // newTime.setSeconds(newTime.getSeconds() + 1);
    // this.setState({ time: newTime });
    //add updater
    this.setState((state) => {
      const { time } = state; //address
      const newTime = new Date(time); //new copy time
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  start = () => {
    if (this.idInterval === null) {
      this.idInterval = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    //this.start()
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    //this.stop()
  }

  render() {
    const { time } = this.state;
    return (
      <article>
        <h2>{time.toLocaleTimeString('en-GB')}</h2>
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
