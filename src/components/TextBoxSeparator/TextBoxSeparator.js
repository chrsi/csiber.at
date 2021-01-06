import React from 'react';
import PropTypes from 'prop-types';
import classes from './TextBoxSeparator.module.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  separator: props => ({
    height: `${props.height}px`
  }),
  top: props => ({
    top: `-${props.height}px`
  }),
  bottom: props => ({
    bottom: `-${props.height}px`
  }),
  primary: {
    fill: theme.palette.background.default
  },
  secondary: {
    fill: theme.palette.background.default,
    opacity: 0.7
  }
}))

const TextBoxSeparator = props => {
  const styles = useStyles(props);

  return props.top ? (
    <svg viewBox="0 0 2 2" preserveAspectRatio="none" className={ `${styles.separator} ${classes.separator} ${styles.top}`}>
      <polygon points="2,2, 0,1 0,2" className={styles.secondary} />
      <polygon points="0,2 2,0 2,2" className={styles.primary} />
    </svg>
  ) : props.bottom ? (
    <svg viewBox="0 0 4 4" preserveAspectRatio="none" className={ `${styles.separator} ${classes.separator} ${styles.bottom}`}>
      <polygon points="0,0 4,0 4,3" className={styles.secondary} />
      <polygon points="0,0 4,0 0,4" className={styles.primary} />
    </svg>
  ) : null
};

TextBoxSeparator.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  height: PropTypes.number
};

export default TextBoxSeparator;