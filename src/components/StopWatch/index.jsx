import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    //this.start();
    console.log('constructor');
  }

  start = () =>{
    setInterval(()=>{
      this.setState({count: this.state.count+1})
    }, 1000)
  }

  componentDidMount(){
    this.start();
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    //clearInterval()
    console.log('componentWillUnmount');
  }

  render() {
    const { count } = this.state;
    //this.start();
    //this.setState({count: this.state.count+1})
    console.log('render');
    return (
      <article>
        <h2>{count}</h2>
      </article>
    );
  }
}

export default StopWatch;
