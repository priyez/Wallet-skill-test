import Icon from "../../icon";
import './bottomNav.scss';
import { Link } from "react-router-dom";


function Index() {
  return (
    <div className="bottomNav">
    <a href="">
   <Icon icon="wallet" width={23} height={23} fill="#aeb8c4" />
   </a>
   <a href="">
   <Icon icon="explore" width={23} height={23} fill="#aeb8c4" />
   </a>
   <a href="">
   <Icon icon="notification" width={23} height={23} fill="#aeb8c4" />
   </a>
   <a href="">
  <Icon icon="settings" width={23} height={23} fill="#aeb8c4" />
  </a>
    </div>
  );
}

export default Index;
