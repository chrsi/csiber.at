import React from 'react';
import cv from 'assets/data/cv.json'
import { Accomplishments, General, ExperienceTimeline, EducationTimeline, Hobbies } from "components/Curriculum";
import classes from './CurriculumVitae.module.css';

const CurriculumVitae = () => {
  return (
    <section className={classes.cv}>
      <General data={cv.general} />
      <ExperienceTimeline data={cv.experience} />
      <EducationTimeline data={cv.education} />
      <Accomplishments data={cv.accomplishments} />
      <Hobbies data={cv.hobbies} />
    </section>
  );
};

export default CurriculumVitae;