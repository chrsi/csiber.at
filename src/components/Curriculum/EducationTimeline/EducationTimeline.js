import React from 'react';
import PropTypes from 'prop-types';
import Education from 'components/Curriculum/Education/Education';
import { Typography } from '@material-ui/core';

const EducationTimeline = props => {
  return (
    <section className="educationTimeline">
      <Typography variant="h4" component="h1" gutterBottom align="center">Education</Typography>
      {props.data.map((education, idx) => {
        return <Education data={education} key={idx}/>
      })}
    </section>
  );
};

EducationTimeline.propTypes = {
  data: PropTypes.array
};

export default EducationTimeline;