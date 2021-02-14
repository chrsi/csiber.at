import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Skills = props => {
  return (
    <section>
      <Typography variant="h4" component="h1">Skills</Typography>
      { props.data.map(skillGroup => (
        <Typography component="p">
          { skillGroup.join(', ') }
        </Typography>
      ))
      }
    </section>
  );
};

Skills.propTypes = {
  data: PropTypes.object
};

export default Skills;