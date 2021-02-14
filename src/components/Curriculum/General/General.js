import React from 'react';
import PropTypes from 'prop-types';
import classes from './General.module.css';
import { Avatar, Typography } from '@material-ui/core';
import profileImage from 'assets/images/me.jpg'

const General = props => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', { dateStyle: 'long' })
  const birthDate = dateTimeFormat.format(new Date(props.data.dateOfBirth));

  return (
    <section className={classes.general}>
      <Avatar src={profileImage} className={classes.profileImage}></Avatar>
      <section className={classes.infoBox}>
        <Typography component="span" style={{ gridColumnStart: 1, gridRowStart: 1 }} className={classes.infoField}>Name</Typography>
        <Typography component="span" style={{ gridColumnStart: 2, gridRowStart: 1 }}>{props.data.name}</Typography>

        <Typography component="span" style={{ gridColumnStart: 1, gridRowStart: 2 }} className={classes.infoField}>Residence</Typography>
        <Typography component="span" style={{ gridColumnStart: 2, gridRowStart: 2 }}>{props.data.residency}</Typography>

        <Typography component="span" style={{ gridColumnStart: 1, gridRowStart: 3 }}className={classes.infoField}>Birthday</Typography>
        <Typography component="span" style={{ gridColumnStart: 2, gridRowStart: 3 }}>{birthDate}</Typography>
      </section>
      <section className={classes.infoBoxPrint}>
        <Typography variant="h5" component="p" className={classes.name}>{props.data.name}</Typography>
        <Typography variant="h6" component="p" gutterBottom>{props.data.profession}</Typography>
        <Typography component="p">Living in: {props.data.residency}</Typography>
        <Typography component="p" gutterBottom>Born: {birthDate}</Typography>
        { props.data.contact.phone && <Typography component="p">Phone: {props.data.contact.phone}</Typography>}
        { props.data.contact.email && <Typography component="p">Email: {props.data.contact.email}</Typography>}
        <Typography component="p">Web: {props.data.contact.website}</Typography>
      </section>
      <section className={classes.descriptionPrint}>
        <Typography variant="h4" component="h1">Description</Typography>
        <Typography component="p">{props.data.description}</Typography>
      </section>
    </section>
  );
};

General.propTypes = {
  data: PropTypes.object
};

export default General;