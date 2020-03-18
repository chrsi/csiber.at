import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const PageHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Christian Siber
        </Typography>
      </Toolbar>
     </AppBar>
  )
}