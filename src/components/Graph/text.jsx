
import './graph.scss';

function Text({text}) {
  return (

  <div className="graph-header-l">
<span className='box' style={{ backgroundColor: text < 5 ? 'red' : text === 'Bitcoin' ? '#ef8d01' : text === 'Ethereum' ? '#004085' : 'green' }}></span>
<p>{text < 5 ? `Lower: ${text}` : text >= 5 ? `Higher: ${text}` : text}</p>
  </div>
  
 
  );
}

export default Text;
