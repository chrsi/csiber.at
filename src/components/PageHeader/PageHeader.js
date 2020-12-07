import React, { useState } from 'react';
import { AppBar, Toolbar, Link, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './PageHeader.css';

const useStyles = makeStyles(theme => ({
  links:  {
    backgroundColor: theme.palette.primary.main,
    '& *': {
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.h4.fontSize
      }
    }
  }
}))

export default () => {
  const [isNavOpen, openNav] = useState(false);
  const classes = useStyles()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const toggleNav = () => {
    openNav(!isNavOpen)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <nav className={`nav-bar ${isMobile ? 'mobile' : ''}`}>
          <div className="logo">
            <Link color="inherit" href="#">
              Christian Siber
              <br/>
              Logo
            </Link>
          </div>
            <ul className={`links ${classes.links} ${isNavOpen ? 'open' : 'closed'} navlinks`}>
              <li><Link underline="none" color="inherit" href="#" variant="body1">About</Link></li>
            </ul>
          <BurgerMenu className="menu" onChange={toggleNav}></BurgerMenu>
        </nav>
      </Toolbar>
     </AppBar>
  )
}