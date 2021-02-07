import React from 'react';
import cv from 'assets/data/cv.json'
import { Accomplishments, General, ExperienceTimeline, EducationTimeline, Hobbies } from "components/Curriculum";
import classes from './CurriculumVitae.module.css';
import printClasses from './CurriculumVitae.print.module.css';

const CurriculumVitae = () => {
  return (
    <div>
      <section className={printClasses.cv}>
        <section className={printClasses.personal}>
          <General data={cv.general} />
          <Hobbies data={cv.hobbies} />
        </section>
        <section className={printClasses.profession}>
          <ExperienceTimeline data={cv.experience} />
          <EducationTimeline data={cv.education} />
          <Accomplishments data={cv.accomplishments} />
        </section>
      </section>
      
      <section className={classes.cv}>
        <General data={cv.general} />
        <ExperienceTimeline data={cv.experience} />
        <EducationTimeline data={cv.education} />
        <Accomplishments data={cv.accomplishments} />
        <Hobbies data={cv.hobbies} />
      </section>
    </div>
  );
};

export default CurriculumVitae;