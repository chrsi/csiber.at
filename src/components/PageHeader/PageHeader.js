import React, { useState } from 'react';
import { AppBar, Toolbar, Link, makeStyles, useMediaQuery, useTheme, useScrollTrigger } from '@material-ui/core';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './PageHeader.css';

const useStyles = makeStyles(theme => ({
  links:  {
    '& *': {
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.h4.fontSize
      }
    }
  }
}))

const PageHeader =  () => {
  const [isNavOpen, openNav] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const toggleNav = () => {
    openNav(!isNavOpen)
  }

  return (
    <AppBar position="sticky" elevation={trigger ? 4 : 0} color={trigger ? 'default' : 'transparent'}>
      <Toolbar>
        <nav className={`nav-bar ${isMobile ? 'mobile' : ''}`}>
          <div className="logo">
            <Link color="inherit" href="#" variant="h6">
              Christian Siber
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

export default PageHeader