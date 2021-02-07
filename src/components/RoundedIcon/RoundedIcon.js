import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, makeStyles } from '@material-ui/core';
import classes from './RoundedIcon.module.css';

const useStyles = makeStyles(theme => ({
  iconAvatar: props => ({
    backgroundColor: theme.palette.text.primary,
  })
}));

const RoundedIcon = props => {
  const styles = useStyles(props);
  
  return (
    <div className={classes.iconContainer}>
      <Avatar src={props.icon} className={`${styles.iconAvatar} ${classes.iconAvatar} ${props.className}`} imgProps={{className: classes.icon}}></Avatar>
    </div>
  );
};

RoundedIcon.propTypes = {
  icon: PropTypes.string,
};

export default RoundedIcon;