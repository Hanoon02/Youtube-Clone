import React, {useState} from 'react'
import Header from './components/Header';
import Home from './components/Pages/Home';
import Menu from "./components/Menu";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Watch from "./components/Pages/Watch";
import Subscriptions from "./components/Pages/Subscriptions";
import Shorts from "./components/Pages/Shorts";
import Profile from "./components/Pages/Profile";
import Library from "./components/Pages/Library";
import Playlist from "./components/Pages/Playlist";
import History from "./components/Pages/History";
import Results from "./components/Pages/Results";
import Later from "./components/Pages/Later";
function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/watch" element={<Watch/>}/>
                <Route path={'/subscriptions'} element={<Subscriptions/>}/>
                <Route path={'/shorts'} element={<Shorts/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/library'} element={<Library/>}/>
                <Route path={'/playlist'} element={<Playlist/>}/>
                <Route path={'/history'} element={<History/>}/>
                <Route path={'/results'} element={<Results/>}/>
                <Route path={'/later'} element={<Later/>}/>
            </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
