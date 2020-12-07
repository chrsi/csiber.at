import React, { useState} from "react";
import './BurgerMenu.css';

export default (props) => {
  const [isActive, setActive] = useState(false);

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