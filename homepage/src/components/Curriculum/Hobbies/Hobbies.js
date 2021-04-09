import React from 'react';
import PropTypes from 'prop-types';
import classes from './Hobbies.module.css';
import RoundedIcon from 'components/RoundedIcon/RoundedIcon';
import CrossfitIcon from 'assets/icons/hobbies/crossfit.svg';
import DevelopmentIcon from 'assets/icons/hobbies/development.svg';
import CyclingIcon from 'assets/icons/hobbies/cycling.svg';
import FoosballIcon from 'assets/icons/hobbies/foosball.svg';
import SourdoughIcon from 'assets/icons/hobbies/sourdough.svg';
import VolleyballIcon from 'assets/icons/hobbies/volleyball.svg';
import YogaIcon from 'assets/icons/hobbies/yoga.svg';
import DrawingIcon from 'assets/icons/hobbies/drawing.svg';
import { Typography } from '@material-ui/core';

const hobbyIcons = {
  "Software & Product Development": DevelopmentIcon,
  "Crossfit": CrossfitIcon,
  "Volleyball": VolleyballIcon,
  "Biking": CyclingIcon,
  "Drawing": DrawingIcon,
  "Foosball": FoosballIcon,
  "Baking / Sourdough": SourdoughIcon,
  "Yoga & Meditation": YogaIcon
}

const Hobbies = props => {
  return (
    <section className="hobbies">
      <Typography variant="h4" component="h1" gutterBottom align="center">Hobbies</Typography>
      <div className={classes.hobbyList}>
        { props.data.map(hobby =>
          <div key={hobby} className={classes.hobby}>
            <RoundedIcon icon={hobbyIcons[hobby]} className={classes.hobbyIcon}></RoundedIcon>
            <Typography className={classes.hobbyDescription}>{hobby}</Typography>
          </div>
        )}
      </div>
    </section>
  );
};

Hobbies.propTypes = {
  data: PropTypes.array
};

export default Hobbies;