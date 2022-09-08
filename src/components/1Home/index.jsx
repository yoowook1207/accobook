import React from 'react';
import Statistics from './Statistics';
import PieGraph from './PieGraph';

const Home = () => {
  return (
    <div className="home">
        <div className="p-2 monthlySpending">
          <div className="monthly">
            <div className='textAmount'>
              This month
            </div>
            <div className="thisAmount">
              $6,000
            </div>
          </div>
          <div className="monthly">
            <div className='textAmount'>
              Last month
            </div>
            <div className="lastAmount">
              $5,000
            </div>
          </div>
        </div>
        <div className="pieGraph">
          <PieGraph/>
        </div>
        <div className="mostLeast">
          <Statistics/>
        </div>
    </div>
  );
};

export default Home;
