import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Tables.module.scss';

const Tables = () => {
  const id = 'abc';
  return (
    <div className={styles.component}>
      <h2>Tables</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>New Booking</Link> 
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/${id}`}>Booking By Id</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Events</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/${id}`}>Events By Id</Link>
    </div>
  );
};
export default Tables;