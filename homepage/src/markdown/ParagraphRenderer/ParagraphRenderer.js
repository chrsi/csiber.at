import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';

const useStyles = makeStyles(theme => ({
  warn: {
    display: 'flex',
    flexDirection: 'row',
    borderLeft: `4px solid ${theme.palette.warning.main}`,
    backgroundColor: theme.palette.background.paper,
    padding: '.75rem'
  },
  symbol: {
    color: theme.palette.warning.main,
    marginRight: '.75rem',
    fontSize: '1.5rem'
  },
}))

const ParagraphRenderer = ({ className, children, ...props}) => {
  const styles = useStyles();

  if (typeof className === 'string' && className && className.includes('hint warn')) {
    const modifiedClassName = className.replace('hint warn', styles.warn);
    return (
      <Typography className={modifiedClassName} {...props} paragraph>
        <WarningIcon size={20} className={styles.symbol}/>
        <span>{children}</span>
      </Typography>
    )
  }

  return (
    <Typography className={className} {...props} paragraph>{children}</Typography>
  );
};

export default ParagraphRenderer;