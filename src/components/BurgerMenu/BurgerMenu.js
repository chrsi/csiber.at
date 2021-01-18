 import React, { useState} from "react";
import './BurgerMenu.css';

const BurgerMenu = (props) => {
  const [isActive, setActive] = useState(false);

  if ((props.open !== undefined) && (props.open !== isActive)) {
    setActive(props.open);
  }
  const toggleMenu = () => {
    props.onChange(isActive);
    setActive(!isActive);
  }

  return (
    <span className={`${props.className} navTrigger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
      <i></i>
      <i></i>
      <i></i>
    </span>
  );
}

export default BurgerMenu