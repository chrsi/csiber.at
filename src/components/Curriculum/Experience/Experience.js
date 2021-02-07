import React from 'react';
import PropTypes from 'prop-types';
import Timespan from 'components/Curriculum/Timespan/Timespan'
import { Typography, useMediaQuery } from '@material-ui/core';
import classes from './Experience.module.css';
import IconText from 'components/IconText/IconText';

const Experience = props => {
  const startDate = new Date(props.data.start);
  const endDate = props.data.end ? new Date(props.data.end) : null;
  const isPrintMedia = useMediaQuery('print')

  return (
    <section className={classes.experience}>
      <Typography variant="h6" component="h2" gutterBottom={!isPrintMedia}>{props.data.title}</Typography>
      <Timespan start={startDate} end={endDate} />
      <IconText icon="business" text={`${props.data.employer} (${props.data.location})`} gutterBottom={!isPrintMedia}></IconText>
      <Typography component="p">{props.data.description}</Typography> 
    </section>
  );
};

Experience.propTypes = {
  data: PropTypes.object
};

export default Experience;