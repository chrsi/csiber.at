import React from 'react';
import { IconButton, SvgIcon, makeStyles } from '@material-ui/core';
import { ReactComponent as GithubLogo } from 'assets/icons/github.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/facebook.svg';
import { ReactComponent as DevToLogo } from 'assets/icons/devto.svg';
import { ReactComponent as LinkedInLogo } from 'assets/icons/linkedin.svg';
import { ReactComponent as XingLogo } from 'assets/icons/xing.svg';
import classes from './AboveTheFold.module.css';
import { useAboutTypography } from 'pages/About/About';

const useStyles = makeStyles(theme => ({
  description: {
    ...theme.typography.body1
  },
}))

const AboveTheFold = () => {
  const styles = useStyles();
  const aboutTypography = useAboutTypography();
  

  return (
    <section className={classes.aboveTheFold}>
      <h1 className={aboutTypography.headline}>
        Christian Siber
      </h1>
      <p className={`${classes.description} ${styles.description}`}>
        full stack developer. user-centered designer. code connoisseur. agile enthusiast. clean architect.
      </p>
      <section className={classes.socialLinks}>
        <IconButton size="small" href="https://github.com/chrsi" target="_blank">
          <SvgIcon fontSize="large" component={GithubLogo}></SvgIcon>
        </IconButton>
        <IconButton size="small" href="https://dev.to/chrsi" target="_blank">
          <SvgIcon fontSize="large" component={DevToLogo}></SvgIcon>
        </IconButton>
        <IconButton size="small" href="https://www.facebook.com/christian.siber" target="_blank">
          <SvgIcon fontSize="large" component={FacebookLogo}></SvgIcon>
        </IconButton>
        <IconButton size="small" href="https://www.linkedin.com/in/christian-siber-65b672127/" target="_blank">
          <SvgIcon fontSize="large" component={LinkedInLogo}></SvgIcon>
        </IconButton>
        <IconButton size="small" href="https://www.xing.com/profile/Christian_Siber" target="_blank">
          <SvgIcon fontSize="large" component={XingLogo}></SvgIcon>
        </IconButton>
      </section>
    </section>
  );
};

AboveTheFold.propTypes = {
  
};

export default AboveTheFold;