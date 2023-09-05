import React from 'react';
import PropTypes from 'prop-types';

const CardUser = (props) => {
  const {
    user: { id, firstName, lastName, isSelect },
    selectorUser,
  } = props;
  const selectHandle = () => {
    selectorUser(id);
  };
  const styles = { backgroundColor: isSelect ? 'pink' : 'grey' };
  return (
    <article onClick={selectHandle} style={styles}>
      <h3>
        {firstName} {lastName}
      </h3>
    </article>
  );
};

export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isSelect: PropTypes.bool,
});

CardUser.propTypes = {
  user: userShape.isRequired,
  selectorUser: PropTypes.func.isRequired,
};

export const defaultUser = {
  id: 0,
  firstName: 'noname',
  lastName: 'noname',
};

CardUser.defaultProps = {
  user: defaultUser,
  selectorUser: () => {},
};

export default CardUser;
