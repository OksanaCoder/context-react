import React, { Component } from 'react';
import { USERS } from '../../constants';
import CardUser from './CardUser';

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS.map((user) => ({ ...user, isSelect: false })),
    };
  }
  selectorUser = (id) => {
    const { users } = this.state;
    const newUsers = JSON.parse(JSON.stringify(users));
    const newUsersWithSelect = newUsers.map((user) => ({
      ...user,
      isSelect: user.id === id ? !user.isSelect : user.isSelect,
    }));
    this.setState({ users: newUsersWithSelect });
  };
  createCard = (user) => (
    <CardUser key={user.id} user={user} selectorUser={this.selectorUser} />
  );
  render() {
    const { users } = this.state;
    return <section>{users.map(this.createCard)}</section>;
  }
}

export default CardSection;
