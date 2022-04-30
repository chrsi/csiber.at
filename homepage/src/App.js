import React from 'react';
import './App.css';
import { ThemeProvider } from "@material-ui/styles";
import PageHeader from './components/PageHeader/PageHeader';
import { CssBaseline } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import CurriculumVitae from './pages/CurriculumVitae/CurriculumVitae';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import Blog from 'pages/Blog/Blog';
import BlogEntry from 'pages/BlogEntry/BlogEntry';

const theme = createTheme({
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
        <Routes>
          <Route path="/skills" element={<Skills/>} />
          <Route path="/cv" element={<CurriculumVitae/>} />
          <Route path="/blog/:id" element={<BlogEntry/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
