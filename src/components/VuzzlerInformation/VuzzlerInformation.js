import classes from './VuzzlerInformation.module.css';
import { Link, Typography } from '@material-ui/core';
import React from 'react';

const VuzzlerInformation = () => {
  return (
    <section className={classes.container}>
      <Typography variant="h2">Do you play foosball?</Typography>
      <Typography component="p" gutterBottom>Then you might be interested in <strong>Vuzzler</strong>!</Typography>
      <Typography component="p" gutterBottom>Vuzzler is a side project of mine, that collects your foosball matches and creates interesting statistics. Now you can finally show your friends who's the boss.</Typography>
      <Typography component="p" gutterBottom>With the help of NFC/QR-tags recording matches is as easy as placing your mobile onto the table. The built in slider let's you keep track of your scores in real time, so it doesn't affect your foosball habits.</Typography>
      <Typography component="p">
        <span>Check it out at </span>
        <Link href="https://vuzzler.com" color="inherit" underline="always" target="_blank" rel="noopener">www.vuzzler.com</Link>
        <span> and tell me what you think.</span>
      </Typography>
    </section>
  );
};

export default VuzzlerInformation;