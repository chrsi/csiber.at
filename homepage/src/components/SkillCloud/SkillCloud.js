import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import projects from 'assets/data/projects.json';
import WordCloud from 'wordcloud'
import classes from './SkillCloud.module.css';
import { getTechName } from 'utils/Technology';
import { normalizeSkills, mergeSkills, evaluateSkill } from 'utils/Skill';

const applyDisplayNames = (skill) => {
  const techKey = skill[0];
  const displayName = getTechName(techKey);
  return [displayName, skill[1], techKey];
}

const formatForWordCloud = (skill) => {
  return [ skill.name, skill.score ]
}

const skills = projects
  .flatMap(({ stack, start, end, weight }) => stack.map(name => ({ name, start, end, weight })))
  .reduce(mergeSkills, [])
  .map(evaluateSkill)
  .map(formatForWordCloud)
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
