import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, makeStyles } from '@material-ui/core';
import classes from './RoundedIcon.module.css';

const useStyles = makeStyles(theme => ({
  iconAvatar: props => ({
    backgroundColor: theme.palette.text.primary,
    height: props.size ?? '40px',
    width: props.size ?? '40px'
  })
}));

const RoundedIcon = props => {
  const styles = useStyles(props);
  
  return (
    <div className={classes.iconContainer}>
      <Avatar src={props.icon} className={`${styles.iconAvatar} ${classes.iconAvatar}`} imgProps={{className: classes.icon}}></Avatar>
    </div>
  );
};

RoundedIcon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string
};

export default RoundedIcon;