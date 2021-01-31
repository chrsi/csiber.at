import React from 'react';
import PropTypes from 'prop-types';
import Experience from 'components/Curriculum/Experience/Experience';
import { Typography } from '@material-ui/core';

const ExperienceTimeline = props => {
  return (
    <section className="experienceTimeline">
      <Typography variant="h4" component="h1" gutterBottom align="center">Experience</Typography>
      {props.data.map((experience, idx) => {
        return <Experience data={experience} key={idx}/>
      })}
    </section>
  );
};

ExperienceTimeline.propTypes = {
  data: PropTypes.array
};

export default ExperienceTimeline;