import React from 'react'
import Header from './components/Header';
import Home from './components/Pages/Home';
import Menu from "./components/Menu";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Watch from "./components/Pages/Watch";
import Subscriptions from "./components/Pages/Subscriptions";
import Shorts from "./components/Pages/Shorts";
function App() {
  return (
    <>
    <BrowserRouter>
      <div className='bg-black text-white'>
        <Header />
            <div className={'flex'}>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/watch" element={<Watch/>}/>
                    <Route path={'/subscriptions'} element={<Subscriptions/>}/>
                    <Route path={'/shorts'} element={<Shorts/>}/>
                </Routes>
            </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
