import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const BookingById = (props) => {
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>BookingById</h2>
      {id}
    </div>
  );
};

BookingById.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object,
};

export default BookingById;