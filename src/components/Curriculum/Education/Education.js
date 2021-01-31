import React from 'react';
import PropTypes from 'prop-types';
import Timespan from 'components/Curriculum/Timespan/Timespan'
import { Typography } from '@material-ui/core';
import classes from './Education.module.css';
import IconText from 'components/IconText/IconText';

const Education = props => {
  const startDate = new Date(props.data.start);
  const endDate = props.data.end ? new Date(props.data.end) : null;

  return (
    <section className={classes.education}>
      <Typography variant="h6" component="h1" gutterBottom>{props.data.title}</Typography>
      <Timespan start={startDate} end={endDate} />
      <IconText icon="school" text={props.data.facility}></IconText>
      {props.data.focus ? (<Typography className={`${classes.info} ${classes.iconless}`}>{props.data.focus}</Typography>) : null}
      <Typography component="p">{props.data.description}</Typography> 
    </section>
  );
};

Education.propTypes = {
  data: PropTypes.object
};

export default Education;