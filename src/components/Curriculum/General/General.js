import React from 'react';
import PropTypes from 'prop-types';
import classes from './General.module.css';
import { Avatar, Typography } from '@material-ui/core';
import profileImage from 'assets/images/me.jpg'

const GeneralInfoLine = props => {
  return (
    <>
      <Typography component="span" className={classes.infoField}>{props.title}</Typography>
      <Typography component="span">{props.value}</Typography>
    </>
  )
}

const General = props => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', { dateStyle: 'long' })
  const birthDate = dateTimeFormat.format(new Date(props.data.dateOfBirth));

  return (
    <section className="general">
      <Avatar src={profileImage} className={classes.profileImage}></Avatar>
      <section className={classes.infoBox}>
        <GeneralInfoLine title="Name" value={props.data.name} />
        <GeneralInfoLine title="Residence" value={props.data.residency} />
        <GeneralInfoLine title="Birthday" value={birthDate} />
      </section>
    </section>
  );
};

General.propTypes = {
  data: PropTypes.object
};

export default General;