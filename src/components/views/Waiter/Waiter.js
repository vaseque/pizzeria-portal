import React from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';

const Waiter = () => {
  const id = 'xyz';
  return (
    <div className={styles.component}>
      <h2>Waiter</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New Order</Link> 
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/${id}`}>Order By Id</Link>
    </div>
  );
};

export default Waiter;