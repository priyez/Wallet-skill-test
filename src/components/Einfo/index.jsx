"use client"
import React, {useState} from "react";
import './e-info.scss';
import Graph from '../Graph'
import Buy from '../BuyandSell'

function Index({ showEinfo}) {
  const [activeTab, setActiveTab] = useState('buy');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="e-info">
         {showEinfo &&
     <div className='e-info-sh'>
        <span className={activeTab === 'buy' ? 'active' : ''} onClick={() => handleTabClick('buy')}>Buy</span>
        <span className={activeTab === 'sell' ? 'active' : ''} onClick={() => handleTabClick('sell')}>Sell</span>
      </div>
       }
      <div className="e-info-content">
       <Graph activeTab={activeTab} /> 
      </div>

      <Buy activeTab={activeTab}/>
    </div>
  );
}

export default Index;
