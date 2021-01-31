import React from 'react';
import PropTypes from 'prop-types';
import classes from './IconText.module.css'
import { Icon, Typography } from '@material-ui/core';

const IconText = props => {
  return (
    <Typography component="p" className={classes.container} gutterBottom={props.gutterBottom}>
      <Icon fontSize="small" className={classes.icon}>{props.icon}</Icon>
      <span>{props.text}</span> 
    </Typography>
  );
};

IconText.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  gutterBottom: PropTypes.bool
};

export default IconText;