import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage/ExperiencePage';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { CheckFlexGap } from './shared/CheckFlexGap/CheckFlexGap';
import TopScroll from './shared/TopScroll/TopScroll';

function App() {
  return (
    <div className="App">
      <CheckFlexGap/>
      <BrowserRouter>
      <TopScroll/>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/projects'} element={<ProjectPage/>}/>
          <Route path={'/experience'} element={<ExperiencePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
