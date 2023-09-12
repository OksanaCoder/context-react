import React from 'react';
import { UserContext } from '../../contexts';

const Avatar = () => {
  const render = ({ user: { avatar } }) => {
    return (
      <div>
        <img src={avatar} alt="avatar" />
      </div>
    );
  };

  return <UserContext.Consumer>{render}</UserContext.Consumer>;
};

export default Avatar;
