import React, { useEffect, useState } from 'react';
import { Background, Parallax } from 'react-parallax';
import TextBox from 'components/TextBox/TextBox';
import Intro from 'components/Intro/Intro';
import AboveTheFold from 'components/AboveTheFold/AboveTheFold';
import VuzzlerInformation from 'components/VuzzlerInformation/VuzzlerInformation';
import bryceCanyon from 'assets/images/bryce.jpg';
import homeMobile from 'assets/images/homeMobile.jpg';
import homeDesktop from 'assets/images/home.jpg';
import classes from './About.module.css';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [homeImage, setHomeImage] = useState(homeDesktop);

  useEffect(() => {
    setHomeImage(isMobile ? homeMobile: homeDesktop);
  }, [isMobile])


  return (
    <main>
      <TextBox>
        <AboveTheFold/>
      </TextBox>
      <Parallax bgImageAlt="Me at the Bryce Canyon" strength={-300}>
        <Background>
          <img src={bryceCanyon} className={`${classes.bryceCanyon} ${classes.separatorImages}`} alt="Bryce Canyon"></img>
        </Background>
        <div className={classes.parallaxPlaceholder}></div>
      </Parallax>
      <TextBox>
        <Intro/>
      </TextBox>
      <Parallax bgImageAlt="Me at the Bryce Canyon" strength={-300}>
        <Background>
          <img src={homeImage} className={`${classes.bryceCanyon} ${classes.separatorImages}`} alt="Bryce Canyon"></img> : 
        </Background>
        <div className={classes.parallaxPlaceholder}></div>
      </Parallax>
      <TextBox>
        <VuzzlerInformation />
      </TextBox>
    </main>
  );
};

export default About
export { useAboutTypography }