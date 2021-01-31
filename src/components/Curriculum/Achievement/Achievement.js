import React from 'react';
import PropTypes from 'prop-types';
import TrophyIcon from 'assets/icons/trophy.svg';
import RoundedIcon from 'components/RoundedIcon/RoundedIcon';
import { Typography } from '@material-ui/core';
import classes from './Achievement.module.css';

const dateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

const Achievements = props => {
  const achievementDate = dateTimeFormat.format(new Date(props.data.date));

  return (
    <section className={classes.achievements}>
      <RoundedIcon icon={TrophyIcon}></RoundedIcon>
      <div className={classes.info}>
        <Typography className={classes.title}>{props.data.name}</Typography>
        <Typography gutterBottom>{props.data.facility}</Typography>
        <Typography>{props.data.description}</Typography>
        <Typography>{achievementDate}</Typography>
      </div>
    </section>
  );
};

Achievements.propTypes = {
  data: PropTypes.object
};

export default Achievements;