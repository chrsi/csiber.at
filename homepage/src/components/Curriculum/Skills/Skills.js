import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Skills = props => {
  return (
    <section>
      <Typography variant="h4" component="h1">Skills</Typography>
      { props.data.map((skillGroup, idx) => (
        <Typography component="p" gutterBottom key={idx}>
          { skillGroup.join(', ') }
        </Typography>
      ))
      }
    </section>
  );
};

Skills.propTypes = {
  data: PropTypes.array
};

export default Skills;
