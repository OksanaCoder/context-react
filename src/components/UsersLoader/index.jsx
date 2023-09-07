import React, { Component } from 'react';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: false,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('https://randomuser.me/api/?results=5&seed=fm20231')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data.results });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render() {
    const { isFetching, error, users } = this.state;
    if (isFetching) {
      return <h2>Loading...</h2>;
    }
    if (error) {
      return <h2>Error: {error.message}</h2>;
    }
    return (
      <section>
        <h2>Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.login.uuid}>{user.email}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default UsersLoader;
