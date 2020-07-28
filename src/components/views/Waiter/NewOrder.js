import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const NewOrder = () => {
  return (
    <div className={styles.component}>
      <h2>NewOrder</h2>
      
    </div>
  );
};

NewOrder.propTypes = {
  id: PropTypes.string,
};

export default NewOrder;