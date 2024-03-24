
import './graph.scss';
import Text from './text'
import Charts from "../Charts";



function Graph({activeTab}) {

  return (
    <div className="graph">
          <div className='graph-header'>
  {activeTab === 'buy' ? 
          <>
            <Text text={4.242} />
            <Text text={6.242}/>
          </>
          :
          <>
             <>
            <Text text={6.242} />
            <Text text={4.242}/>
          </>
          </>
        }
         </div> 
     
      <div className='graph-fig'>

<Charts activeTab={activeTab}/>
      </div>
      <div className='graph-footer'>
      {activeTab === 'buy' ?  <Text text={'Bitcoin'} />:  <Text text={'Ethereum'} />}
     
      </div>
    </div>
  );
}

export default Graph;
