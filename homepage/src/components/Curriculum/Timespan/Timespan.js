import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Typography } from '@material-ui/core';
import classes from './Timespan.module.css';

const Timespan = props => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

  const startValue = dateTimeFormat.format(props.start)
  const endValue = props.end ? dateTimeFormat.format(props.end) : 'now'

  return (
    <Typography component="p" className={classes.timespan}>
      <Icon fontSize="small" className={classes.icon}>schedule</Icon>
      <span className={classes.startValue}>{startValue}</span>
       - 
      <span className={classes.endValue}>{endValue}</span> 
    </Typography>
  );
};

Timespan.propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object
};

export default Timespan;