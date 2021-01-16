import React, { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import projects from 'assets/data/projects.json';
import WordCloud from 'wordcloud'
import classes from './SkillCloud.module.css';
import { getTechName } from 'utils/Technology';

const SkillCloud = props => {
  const wordCloudCanvas = useRef();

  const countSkills = (skills, currentSkill) => {
    const existingSkill = skills.find(skill => skill[0] === currentSkill);
    if (existingSkill === undefined) {
      skills.push([
        currentSkill,
        1
      ])
    } else {
      existingSkill[1]++
    }
    return skills;
  }

  const applyDisplayNames = (skill) => {
    const techKey = skill[0];
    const displayName = getTechName(techKey);
    return [displayName, skill[1], techKey];
  }

  const normalize = (lowerBound, upperBound) => (element, idx, array) => {
    const maxValue = array[0][1];
    const minValue = array[array.length-1][1];

    const elementCopy = [...element];
    elementCopy[1] = (minValue/maxValue)*element[1]*(upperBound-lowerBound)+lowerBound;
    return elementCopy
  }
  
  const skills = projects
    .flatMap(val => val.stack)
    .reduce(countSkills, [])
    .map(applyDisplayNames)
    .sort((a, b) => b[1]-a[1])
    .map(normalize(10, 40))

  const wordCloudOptions = useMemo(() => {
    const options = {
      list: skills,
      color: 'white',
      backgroundColor: 'transparent',
      shrinkToFit: true,
      minRotation: 0,
      maxRotation: 0,
      shuffle: false
    }

    if (props.onClick) {
      options.click = ([_, __, skill]) => {console.log(skill); props.onClick(skill)};
    }

    return options;
  }, [props, skills])

  useEffect(() => {
    if (wordCloudCanvas.current) {
      WordCloud(wordCloudCanvas.current, wordCloudOptions)
    }
  }, [wordCloudCanvas, wordCloudOptions])

  return (
    <div id="html-canvas" className={classes.skillCloud} ref={wordCloudCanvas} />
  );
};

SkillCloud.propTypes = {
  onClick: PropTypes.func
};

export default SkillCloud;