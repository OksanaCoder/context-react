import { Component } from 'react';
import CiaoList from './CiaoList';
import CiaoSort from './CiaoSort';
import { USERS } from '../../constants';

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
      isSortIdUp: true,
      isSortFirstNameUp: true,
    };
  }

  render() {
    const { users, isSortIdUp, isSortFirstNameUp } = this.state;
    return (
      <>
        <CiaoSort
          users={users}
          isSortIdUp={isSortIdUp}
          isSortFirstNameUp={isSortFirstNameUp}
        />
        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
