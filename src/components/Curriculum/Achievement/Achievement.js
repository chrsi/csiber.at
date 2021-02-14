import React from 'react';
import PropTypes from 'prop-types';
import TrophyIcon from 'assets/icons/trophy.svg';
import RoundedIcon from 'components/RoundedIcon/RoundedIcon';
import { Link, Typography } from '@material-ui/core';
import classes from './Achievement.module.css';
import LinkIcon from '@material-ui/icons/Link';

const dateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

const Achievements = props => {
  const achievementDate = dateTimeFormat.format(new Date(props.data.date));

  const Title = props.data.link ? (
    <Link href={props.data.link} className={classes.link} color="inherit" target="_blank" rel="noopener">
      <Typography className={classes.title} display="inline">{props.data.name}</Typography>
      <LinkIcon className={classes.icon}/>
    </Link>
  ) : (
    <Typography className={classes.title}>{props.data.name}</Typography>
  )

  return (
    <section className={classes.achievements}>
      <RoundedIcon icon={TrophyIcon}></RoundedIcon>
      <div className={classes.info}>
        { Title }
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