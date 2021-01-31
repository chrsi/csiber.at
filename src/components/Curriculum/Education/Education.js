import React from 'react';
import PropTypes from 'prop-types';
import Timespan from 'components/Curriculum/Timespan/Timespan'
import { Icon, Typography } from '@material-ui/core';
import classes from './Education.module.css';

const Education = props => {
  const startDate = new Date(props.data.start);
  const endDate = props.data.end ? new Date(props.data.end) : null;

  return (
    <section className={classes.education}>
      <Typography variant="h6" component="h1" gutterBottom>{props.data.title}</Typography>
      <Timespan start={startDate} end={endDate} />
      <Typography component="p" className={classes.info}>
        <Icon fontSize="small" className={classes.icon}>school</Icon>
        <span>{props.data.facility}</span> 
      </Typography>
      {props.data.focus ? (<Typography className={`${classes.info} ${classes.iconless}`}>{props.data.focus}</Typography>) : null}
      <Typography component="p">{props.data.description}</Typography> 
    </section>
  );
};

Education.propTypes = {
  data: PropTypes.object
};

export default Education;