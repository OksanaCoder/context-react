import React from 'react';

const CardUser = (props) => {
  const {
    user: { id, firstName, isSelect },
    selectorUser,
  } = props;
  const selectHandle = () => {
    selectorUser(id);
  };
  const styles = { backgroundColor: isSelect ? 'pink' : 'grey' };
  return (
    <article onClick={selectHandle} style={styles}>
      <h3>{firstName}</h3>
    </article>
  );
};

export default CardUser;
