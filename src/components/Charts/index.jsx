import React from 'react';
import { AreaChart, ResponsiveContainer, CartesianGrid,  Tooltip, Area } from 'recharts';

const data = [
  { date: '2024-01-01', uv: 590 },
  { date: '2024-01-02', uv: 790 },
  { date: '2024-01-03', uv: 868 },
  { date: '2024-01-04', uv: 1397 },
  { date: '2024-01-05', uv: 1480 },
  { date: '2024-01-06', uv: 1395 },

];

function Charts({activeTab}) {
  return (
    <div style={{ width: '100%', height: 175}}>
      <ResponsiveContainer height="98%">
      
      <AreaChart data={data}
      margin={{ top: 2, right: 0, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="date" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke= {activeTab === 'buy' ?"#ef8d01" :"#004085"}
          fill={activeTab === 'buy' ?"#ffa72aab" :"#004085"} />
        </AreaChart>
   
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
