import React from 'react'
import Header from './components/Header';
import HomeCategory from './components/HomeCategory';
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <div className='bg-black text-white'>
        <Header />
        <div className={'flex'}>
            <Menu/>
            <HomeCategory />
        </div>
      </div>
    </>
  );
}

export default App;
