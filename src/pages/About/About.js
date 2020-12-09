import React from 'react';
import { Background, Parallax } from 'react-parallax';
import TextBox from 'components/TextBox/TextBox';
import Intro from 'components/Intro/Intro';
import AboveTheFold from 'components/AboveTheFold/AboveTheFold';

import bryceCanyon from 'assets/images/bryce-canyon.jpg';
import classes from './About.module.css';
import { makeStyles } from '@material-ui/core';

const useAboutTypography = makeStyles(theme => ({
  headline: {
    ...theme.typography.h2,
    textAlign: 'center',
    fontWeight: 200,
    margin: '0 0 2rem 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.75rem'
    }
  },
}))

const About = () => {
  return (
    <main>
      <TextBox>
        <AboveTheFold/>
      </TextBox>
      <Parallax bgImageAlt="Me at the Bryce Canyon" strength={-300}>
        <Background>
          <img src={bryceCanyon} className={classes.bryceCanyon} alt="Bryce Canyon"></img>
        </Background>
        <div className={classes.parallaxPlaceholder}></div>
      </Parallax>
      <TextBox>
        <Intro/>
      </TextBox>
    </main>
  );
};

export default About
export { useAboutTypography }