import React from 'react';
import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import PageHeader from './components/PageHeader/PageHeader';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import CurriculumVitae from './pages/CurriculumVitae/CurriculumVitae';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const App = ()  => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <PageHeader />
        <Switch>
          <Route path="/skills">
            <Skills></Skills>
          </Route>
          <Route path="/cv">
            <CurriculumVitae></CurriculumVitae>
          </Route>
          <Route path="/">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
