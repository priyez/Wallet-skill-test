"use client"
import React from "react";
import Bitcoin from '../../images/iconbitcoin.svg'
import Icon from "../../icon";
import './card.scss';

function Index({ toggleEinfo }) {
  return (
    <div className="box-one">
      <div className='box-one-header'>
<div className="box-one-header-BTCicon">
<img className='btc-icon' src={Bitcoin}/>

<p>Bitcoin</p>
  </div>
  <p className="box-one-header-BTCtext">BTC</p>
  </div>
  <div className='box-one-fig'>
    <h1>3.5290920 BTC</h1>
    <div className='box-one-fig-s'>
      <p>$19,495 USD</p>
      <p className='red'>-2.23%</p>
    </div>

  </div>
  <div className='box-one-dropdown-icon' onClick={toggleEinfo}>
  <Icon icon="more" width={30} height={40} fill="#3a3a3b" />
  
  </div>
    </div>
  );
}

export default Index;
