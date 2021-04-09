import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import projects from 'assets/data/projects.json';
import WordCloud from 'wordcloud'
import classes from './SkillCloud.module.css';
import { getTechName } from 'utils/Technology';
import { normalizeSkills, countSkills } from 'utils/Skill';

const applyDisplayNames = (skill) => {
  const techKey = skill[0];
  const displayName = getTechName(techKey);
  return [displayName, skill[1], techKey];
}

const skills = projects
  .flatMap(val => val.stack)
  .reduce(countSkills, [])
  .map(applyDisplayNames)
  .sort((a, b) => b[1]-a[1])
  .map(normalizeSkills(10, 40))

const wordCloudOptions = {
  list: skills,
  color: 'white',
  backgroundColor: 'transparent',
  shrinkToFit: true,
  minRotation: 0,
  maxRotation: 0,
  shuffle: false
}

const SkillCloud = props => {
  const wordCloudCanvas = useRef();

  if (props.onClick) {
    wordCloudOptions.click = ([_, __, skill]) => props.onClick(skill);
  }

  useEffect(() => {
    if (wordCloudCanvas.current) {
      WordCloud(wordCloudCanvas.current, wordCloudOptions)
    }
  }, [wordCloudCanvas])

  return (
    <div id="html-canvas" className={classes.skillCloud} ref={wordCloudCanvas} />
  );
};

SkillCloud.propTypes = {
  onClick: PropTypes.func
};

export default SkillCloud;