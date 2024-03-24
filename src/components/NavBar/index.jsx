import React,{ useState } from 'react';
import './navbar.scss';
import Icon from "../../icon";
import Dropdown from "../DropDown"

function Index() {
  const [dropMenu, setDropMenu] = useState(false)
  return (
    <>
    <div className="navbar">
  <a hef="">
  <Icon icon="back" width={23} height={23} fill="blue" />
  </a>
  <h1>Bitcon Wallet</h1>
  <button onClick={()=>setDropMenu((prev) =>!prev)}>
    
  <Icon icon="menu" width={23} height={23} fill="#aeb8c4" />
  </button>
    </div>
    {
dropMenu &&
<>
<div onClick={()=>setDropMenu((prev) =>!prev)} className="bgDropdown"/>
<Dropdown/>
</>
    }
   
    </>
  );
}

export default Index;
