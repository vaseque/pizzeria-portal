import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const EventsById = (props) => {
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>EventsById</h2>
      {id}
    </div>
  );
};

EventsById.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object,
};

export default EventsById;