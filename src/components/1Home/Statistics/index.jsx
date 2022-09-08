import React from 'react';
import { BarChart, Bar, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';


let data = [
    {
        name: 'Groceries',
        amount: '1000'
    },
    {
        name: 'Whole Foods',
        amount: '500'
    },
    {
        name: 'Giant',
        amount: '200'
    }
]

const Statistics = () => {

    return (
        <div className="statWrapper">
            <div className=' border-top pt-3 row justify-content-evenly expenditureGrid'>
                <div className="mostExpenditure col-5 eachGrid">
                    <div className="gridName">
                        Most Buy Category
                    </div>
                    <div className="gridContent">
                        Groceries
                    </div>
                </div>
                <div className='leastExpenditure col-5 eachGrid'>
                    <div className="gridName">
                        Least Buy Category
                    </div>
                    <div className="gridContent">
                        
                    </div>
                </div>
                <div className='mostFrequent col-5 eachGrid'>
                    <div className="gridName">
                        Most Frequent Category
                    </div>
                    <div className="gridContent">
                        Groceries
                    </div>
                </div>
                <div className='leastFrequent col-5 eachGrid'>
                    <div className="gridName">
                        Least Frequent Category
                    </div>
                    <div className="gridContent">
                    
                    </div>
                </div>
                <div className='mostExpenditureDay col-5 eachGrid'>
                    <div className="gridName">
                        Most Spent Day
                    </div>
                    <div className="gridContent">
                        9/8/2022
                    </div>
                </div>
                <div className='leastExpenditureDay col-5 eachGrid'>
                    <div className="gridName">
                        Least Spent Day
                    </div>
                    <div className="gridContent">
                        
                    </div>
                </div>
            </div>
            <div className="categorized border-top pt-2 px-4 mt-1">
                <div className='w-100'>
                    Top 3 Categories
                </div>
                <div className='w-100'>
                    <div className='w-100'>
                        Mortgage
                        <ResponsiveContainer width='100%' height={50}>
                            <BarChart data={data} layout='vertical' width='100%' height={50}>
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" stackId="a" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        Groceries
                        <div>

                        </div>
                    </div>
                    <div>
                        Auto
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;