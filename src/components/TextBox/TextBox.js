import React, { useEffect, useState } from 'react';
import TextBoxSeparator from 'components/TextBoxSeparator/TextBoxSeparator'
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import classes from './TextBox.module.css'

const separatorHeightMobile = 80;
const separatorHeight = 120;

const useStyles = makeStyles(theme => ({
  textArea: {
    margin: `-${separatorHeight}px auto`,
    [theme.breakpoints.down('md')]: {
      margin: `-${separatorHeightMobile}px auto`
    }
  }
}))

const TextBox = props => {
  const theme = useTheme()
  const styles = useStyles()
  let isMobile = useMediaQuery(theme.breakpoints.down('md'))

  let [height, setHeight] = useState(separatorHeight);

  useEffect(() => {
    const newHeight = isMobile ?  separatorHeightMobile : separatorHeight
    setHeight(newHeight)
  }, [isMobile])

  return (
    <React.Fragment>
      <TextBoxSeparator top height={`${height}px`}></TextBoxSeparator>
      <div className={`${styles.textArea} ${classes.textArea}`}>
        { props.children }
      </div>
      <TextBoxSeparator bottom height={`${height}px`}></TextBoxSeparator>
    </React.Fragment>
  );
};

export default TextBox;