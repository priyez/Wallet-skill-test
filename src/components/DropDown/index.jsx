
import React from "react";
import './dropdown.scss';
import Icon from "../../icon";

function Index() {
 
  return (
    <div className="dropdown">
      <ul>
<li><a href="" >
 <p>Wallet</p>
    <Icon icon="wallet" width={18} height={18} fill="#3a3a3b" />
     </a> 
     </li>
     <li><a href="" >
 <p>Explore</p>
    <Icon icon="explore" width={18} height={18} fill="#3a3a3b" />
     </a> 
     </li>
     <li><a href="" >
 <p>Notifications</p>
    <Icon icon="notification" width={18} height={18} fill="#3a3a3b" />
     </a> 
     </li>
     <li><a href="" >
 <p>Text One </p>
    <Icon icon="wallet" width={18} height={18} fill="#3a3a3b" />
     </a> 
     </li>
        </ul>
    </div>
  );
}

export default Index;
