import { Link, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.primary.light
  }
}))

const LinkRenderer = (props) => {
  const styles = useStyles();
  return (
    <Link className={styles.link} href={props.href} target="_blank" rel="noopener">{props.children[0]}</Link>
  );
};

export default LinkRenderer;