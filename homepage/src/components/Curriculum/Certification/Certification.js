import React from 'react';
import PropTypes from 'prop-types';
import { Link, Typography } from '@material-ui/core';
import classes from './Certification.module.css';
import CertificateIcon from 'assets/icons/certificate.svg';
import RoundedIcon from 'components/RoundedIcon/RoundedIcon';
import LinkIcon from '@material-ui/icons/Link';

const dateTimeFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })

const Certification = props => {
  const certificationDate = dateTimeFormat.format(new Date(props.data.date));

  return (
    <section className={classes.certification}>
      <RoundedIcon icon={CertificateIcon}></RoundedIcon>
      <div className={classes.info}>
        <Link href={props.data.link} className={classes.link} color="inherit" target="_blank" rel="noopener">
          <Typography className={classes.title} display="inline">{props.data.name}</Typography>
          <LinkIcon className={classes.icon}/>
        </Link>
        <Typography>{props.data.organization}</Typography>
        <Typography>{certificationDate}</Typography>
      </div>
    </section>
  );
};

Certification.propTypes = {
  data: PropTypes.object
};

export default Certification;