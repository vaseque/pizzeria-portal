import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const NewBooking = () => {
  return (
    <div className={styles.component}>
      <h2>NewBooking</h2>
      
    </div>
  );
};

NewBooking.propTypes = {
  id: PropTypes.string,
};

export default NewBooking;