import React from 'react';
import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import PageHeader from './components/PageHeader/PageHeader';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import About from './pages/About/About';

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
      <About></About>
    </ThemeProvider>
  );
}

export default App;
