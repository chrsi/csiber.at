import React, { useEffect, useState } from 'react';
import classes from './Skills.module.css'
import projects from 'assets/data/projects.json';
import SkillCloud from 'components/SkillCloud/SkillCloud';
import ProjectList from 'components/ProjectList/ProjectList';
import Typography from '@material-ui/core/Typography';
import { Icon, makeStyles } from '@material-ui/core';
import { getTechName } from 'utils/Technology';

const useStyles = makeStyles(theme => ({
  badgeColor: () => ({
    backgroundColor: theme.palette.grey.A700
  })
}))

const Skills = () => {
  const styles = useStyles();

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const projectsWithSkill = selectedSkill != null ? projects.filter(project => project.stack.includes(selectedSkill)) : [];
    setFilteredProjects(projectsWithSkill);
  }, [selectedSkill])

  return (
    <div className={classes.content}>
      <section className={classes.skills}>
        <SkillCloud onClick={setSelectedSkill}></SkillCloud>
      </section>
      
      { selectedSkill ? 
        <section className={classes.projects}>
          <section className={classes.header}>
            <Typography display="inline" variant="h4" component="h1" className={classes.preText}>Projects with: </Typography>
            <span className={`${classes.skillBadge} ${styles.badgeColor}`}>
              <code>{getTechName(selectedSkill)}</code>
            </span>
          </section>

          <ProjectList projects={filteredProjects}></ProjectList>
        </section>
          :
        <p className={classes.selectionHint}>
          <Icon >info</Icon>
          <span>Select a technology, to see the projects i used it in.</span>
        </p>
      }
    </div>
  );
};

export default Skills;