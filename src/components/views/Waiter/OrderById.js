import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const OrderById = (props) => {
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>OrderById</h2>
      {id}
    </div>
  );
};

OrderById.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object,
};

export default OrderById;