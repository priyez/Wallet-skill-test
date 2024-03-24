
import React,{ useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar'
import Card from './components/Card'
import Einfo from './components/Einfo'
import BottomNav from './components/BottomNav'

const Main = ()=>{
  const [showEinfo, setShowEinfo] = useState(true);

  return (
    <>

      <NavBar/>
      <Card toggleEinfo={() => setShowEinfo(!showEinfo)} />
     <Einfo showEinfo={showEinfo} />
      <BottomNav />
    </>
  );
}

export default Main;
