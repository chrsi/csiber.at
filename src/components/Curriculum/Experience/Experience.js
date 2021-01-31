import React from 'react';
import PropTypes from 'prop-types';
import Timespan from 'components/Curriculum/Timespan/Timespan'
import { Icon, Typography } from '@material-ui/core';
import classes from './Experience.module.css';

const Experience = props => {
  const startDate = new Date(props.data.start);
  const endDate = props.data.end ? new Date(props.data.end) : null;

  return (
    <section className={classes.experience}>
      <Typography variant="h6" component="h1" gutterBottom>{props.data.title}</Typography>
      <Timespan start={startDate} end={endDate} />
      <Typography component="p" className={classes.info} gutterBottom>
        <Icon fontSize="small" className={classes.icon}>business</Icon>
        <span>{props.data.employer} ({props.data.location})</span> 
      </Typography>
      <Typography component="p">{props.data.description}</Typography> 
    </section>
  );
};

Experience.propTypes = {
  data: PropTypes.object
};

export default Experience;