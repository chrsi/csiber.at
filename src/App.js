import React from 'react';
import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import PageHeader from './components/page-header/PageHeader';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = ()  => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageHeader />
    </ThemeProvider>
  );
}

export default App;
