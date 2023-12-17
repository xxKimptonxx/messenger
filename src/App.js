import './App.scss';
import Header from './comps/header';
import Drawer from './comps/drawer';
import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import HomePage from './comps/pages/home';
import AboutPage from './comps/pages/about';
import MPage from './comps/pages/messenger';
import PageNotFound from './comps/pages/404';

function App() {
  const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  function toggleDrawer(){
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <div>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
      <Header toggleDrawer={toggleDrawer} setIsDrawerOpen={setIsDrawerOpen}/>
      <Routes>
        <Route  path='/'element={<HomePage/>}/>
        <Route path='about'element={<AboutPage/>}/>
        <Route path='messenger'element={<MPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
