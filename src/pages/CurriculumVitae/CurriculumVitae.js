import React from 'react';
import cv from 'assets/data/cv.json'
import { Accomplishments, General, ExperienceTimeline, EducationTimeline, Hobbies, Skills } from "components/Curriculum";
import classes from './CurriculumVitae.module.css';
import printClasses from './CurriculumVitae.print.module.css';
import { Fab } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';

const CurriculumVitae = () => {
  function printPage () {
    window.print();
  }

  return (
    <div>
      <section className={printClasses.cv}>
        <section className={printClasses.personal}>
          <General data={cv.general} />
          <Skills data={cv.skills} ></Skills>
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

      <Fab color="primary" className={classes.printButton} onClick={printPage}>
        <PrintIcon />
      </Fab>
    </div>
  );
};

export default CurriculumVitae;