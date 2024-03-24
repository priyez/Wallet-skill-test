
import React from "react";
import Icon from "../../icon";
import './buyandsell.scss';

function Index({activeTab}) {
  return (
    <div className="buy-and-sell">
 
 <div className="container">
  <div className="comp">
    <span className="cover">
  <Icon icon="dollar" width={30} height={30} fill="#fff" />
  </span>

  <p>Buy  {activeTab === 'buy' ?  'BTC' :   'ETH'}</p>
  </div>
  <div className="comp">
    <span className="cover cover-r">
  <Icon icon="dollar" width={30} height={30} fill="#fff" />
  </span>
  <p>Sell {activeTab === 'buy' ?  'BTC' :   'ETH'}</p>
  </div>
 </div>
    </div>
  );
}

export default Index;
