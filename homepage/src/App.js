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
import Blog from 'pages/Blog/Blog';
import BlogEntry from 'pages/BlogEntry/BlogEntry';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#327196",
      light: "#6cb4e1"
    }
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
          <Route path="/blog/:id">
            <BlogEntry></BlogEntry>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
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
