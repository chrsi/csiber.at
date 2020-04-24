import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import './PageHeader.css';

export class PageHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false
    }
  }

  get menuClass() {
    // return this.state.isNavOpen ? 'show_list' : 'main_list';
    let className = 'main_list';
    if (this.state.isNavOpen) {
      className += ' show_list';
    }
    return className
  }

  get navTriggerClass() {
    let className = 'navTrigger';
    if (this.state.isNavOpen) {
      className += ' active';
    }
    return className;
  }

  toggleNav = () => {
    this.setState(state => ({
      isNavOpen: !state.isNavOpen
    }));
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <nav className="nav-bar">
            <div className="logo">
              <Link color="inherit" href="#">Christian Siber</Link>
            </div>
            <Typography component="div" id="mainListDiv" className={this.menuClass}>
              <ul className="navlinks">
                <li><Link underline="none" color="inherit" href="#">About</Link></li>
                <li><Link underline="none" color="inherit" href="#">Portfolio</Link></li>
                <li><Link underline="none" color="inherit" href="#">Services</Link></li>
                <li><Link underline="none" color="inherit" href="#">Contact</Link></li>
              </ul>
              <span className={this.navTriggerClass} onClick={this.toggleNav}>
                <i></i>
                <i></i>
                <i></i>
              </span>
            </Typography>
          </nav>
        </Toolbar>
       </AppBar>
    )
  }
}