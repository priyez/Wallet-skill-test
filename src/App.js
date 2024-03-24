
import React,{ useState } from 'react';
import Main from './Main'

const App = ()=>{


  return (
    <div className="App">
      <div className='documentation' > 
      <div>
        Unavailable On Desktop.
        <br/>
        Please use ur Mobile
      </div>
      </div>
      <div className='main'>
      <Main/>
      </div>

    </div>
  );
}

export default App;
