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
    <section className={classes.general}>
      <Avatar src={profileImage} className={classes.profileImage}></Avatar>
      <section className={classes.infoBox}>
        <GeneralInfoLine title="Name" value={props.data.name} />
        <GeneralInfoLine title="Residence" value={props.data.residency} />
        <GeneralInfoLine title="Birthday" value={birthDate} />
      </section>
      <section className={classes.infoBoxPrint}>
        <Typography variant="h5" component="p" className={classes.name}>{props.data.name}</Typography>
        <Typography variant="h6" component="p" gutterBottom>{props.data.profession}</Typography>
        <Typography component="p">Living in: {props.data.residency}</Typography>
        <Typography component="p">Born: {birthDate}</Typography>
      </section>
      <section className={classes.descriptionPrint}>
        <Typography variant="h4" component="h1">Description</Typography>
        <Typography component="p">{props.data.description}</Typography>
      </section>
      <section className={classes.contact}>
        <Typography variant="h4" component="h1">Contact</Typography>
        { props.data.contact.phone && <Typography component="p">Phone: {props.data.contact.phone}</Typography>}
        { props.data.contact.email && <Typography component="p">Email: {props.data.contact.email}</Typography>}
        <Typography component="p">Web: {props.data.contact.website}</Typography>
      </section>
    </section>
  );
};

General.propTypes = {
  data: PropTypes.object
};

export default General;