import React from 'react';
import PropTypes from 'prop-types';
import Achievement from 'components/Curriculum/Achievement/Achievement';
import Certification from 'components/Curriculum/Certification/Certification';
import { Typography } from '@material-ui/core';
import classes from './Accomplishments.module.css';

const AccomplishmentComponents = {
  'achievement': Achievement,
  'certification': Certification
}

function createAccomplishment(accomplishment, key) {
  return React.createElement(AccomplishmentComponents[accomplishment.type], {
    key,
    data: accomplishment
  });
}

const Accomplishments = props => {
  return (
    <section className={classes.accomplishments}>
      <Typography variant="h4" component="h1" gutterBottom align="center">Accomplishments</Typography>
      <div className={classes.accomplishmentsGrid}>
        { props.data.map((accomplishment, idx) => createAccomplishment(accomplishment, idx)) }
      </div>
    </section>
  );
};

Accomplishments.propTypes = {
  data: PropTypes.array
};

export default Accomplishments;