import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const NewEvents = () => {
  return (
    <div className={styles.component}>
      <h2>NewEvents</h2>
      
    </div>
  );
};

NewEvents.propTypes = {
  id: PropTypes.string,
};

export default NewEvents;