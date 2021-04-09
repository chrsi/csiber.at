import React, { useState } from 'react';
import { AppBar, Toolbar, makeStyles, useMediaQuery, useTheme, useScrollTrigger, Link as ReactLink } from '@material-ui/core';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './PageHeader.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  links:  {
    '& *': {
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.h4.fontSize
      }
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.background.default,
      opacity: 0.9
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

  const HeaderLink = React.forwardRef((props, _) => {
    const { navigate, ...reactLinkProps } = props;
    return (<ReactLink underline="none" color="inherit" onClick={toggleNav} {...reactLinkProps}>{props.children}</ReactLink>)
  })

  return (
    <AppBar position="sticky" elevation={trigger ? 4 : 0} color={trigger ? 'default' : 'transparent'}>
      <Toolbar>
        <nav className={`nav-bar ${isMobile ? 'mobile' : ''}`}>
          <div className="logo">
            <Link to="/" variant="h6" component={HeaderLink}>
              Christian Siber
            </Link>
          </div>
          <ul className={`links ${classes.links} ${isNavOpen ? 'open' : 'closed'} navlinks`}>
            <li><Link to="/" variant="body1" component={HeaderLink}>About</Link></li>
            <li><Link to="/skills" variant="body1" component={HeaderLink}>Skills</Link></li>
            <li><Link to="/cv" variant="body1" component={HeaderLink}>CV</Link></li>
          </ul>
          <BurgerMenu className="menu" open={isNavOpen} onChange={toggleNav}></BurgerMenu>
        </nav>
      </Toolbar>
     </AppBar>
  )
}

export default PageHeader