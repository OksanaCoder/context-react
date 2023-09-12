import React, { Component } from 'react';
import { UserContext } from './contexts';
import Tree from './components/Tree';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: 'Brad',
        lastName: 'Pitt',
        isSelect: false
      },
    };
  }

  selectorUser = (id) => {this.setState({user:{...this.state.user, isSelect: !this.state.user.isSelect}})}

  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={{ user, selectorUser: this.selectorUser }}>
        <Tree />
      </UserContext.Provider>
    );
  }
}

export default App;
