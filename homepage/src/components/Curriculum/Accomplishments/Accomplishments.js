import React from 'react';
import PropTypes from 'prop-types';
import Achievement from 'components/Curriculum/Achievement/Achievement';
import Certification from 'components/Curriculum/Certification/Certification';
import { makeStyles, Typography } from '@material-ui/core';
import classes from './Accomplishments.module.css';

const AccomplishmentComponents = {
  'achievement': Achievement,
  'certification': Certification
}

const listStyle = {
  flexDirection: 'column',
  flexWrap: 'nowrap'
}

const gridStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const useStyles = makeStyles(theme => ({
  accomplishments: {
    [theme.breakpoints.down('sm')]: {
      '@media screen': listStyle
    },
    '@media print': gridStyle,
    display: 'flex',
    ...gridStyle,
    '&>*': {
      flexBasis: '50%',
      flexGrow: 1,
    }
  }
}))

function createAccomplishment(accomplishment, key) {
  return React.createElement(AccomplishmentComponents[accomplishment.type], {
    key,
    data: accomplishment
  });
}

const Accomplishments = props => {
  const styles = useStyles();

  return (
    <section>
      <Typography variant="h4" component="h1" gutterBottom align="center">Accomplishments</Typography>
      <div className={`${styles.accomplishments} ${classes.accomplishments}`}>
        { props.data.map((accomplishment, idx) => createAccomplishment(accomplishment, idx)) }
      </div>
    </section>
  );
};

Accomplishments.propTypes = {
  data: PropTypes.array
};

export default Accomplishments;