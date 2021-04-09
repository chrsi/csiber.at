import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classes from './ProjectList.module.css';
import Icon from '@material-ui/core/Icon';
import { Link, Tooltip } from '@material-ui/core';

const ProjectList = props => {
  return (
    <div className={classes.projectList}>
      {props.projects.map(project => 
        <Card className={classes.project} key={project.name}>
          <CardContent>
            <Typography variant="h6" component="h2" >{project.name}</Typography>
            <p>{project.description}</p>
            <section>
              { project.company && 
                <Typography variant="body2" className={classes.additionalInfo}>
                  <Icon className={classes.infoIcon}>business</Icon>
                  <span>{project.company}</span>
                </Typography>
              }
              { project.url && 
                <Typography variant="body2" className={classes.additionalInfo}>
                  <Icon className={classes.infoIcon}>link</Icon>
                  <Link color="textPrimary" underline="always" className={classes.link} href={project.url} target="_blank" rel="noopener">{project.url}</Link>
                </Typography>
              }
              { project.repository && 
                <Typography variant="body2" className={classes.additionalInfo}>
                  <Icon className={classes.infoIcon}>code</Icon>
                  <Link color="textPrimary" underline="always" className={classes.link} href={project.repository} target="_blank" rel="noopener">{project.repository}</Link>
                </Typography>
              }
              { project.teamSize && 
                <Typography variant="body2" className={classes.additionalInfo}>
                  <Tooltip title="Team size">
                    <Icon className={classes.infoIcon}>people</Icon>
                  </Tooltip>
                  <span>{project.teamSize}</span>
                </Typography>
              }
            </section>
            
          </CardContent>
        </Card>
      )}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array
};

export default ProjectList;