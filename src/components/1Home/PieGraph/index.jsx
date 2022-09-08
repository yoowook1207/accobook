import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

let data =[
    {name: 'Geeksforgeeks', amount: 400},
    {name: 'Technical scripter', amount: 700},
    {name: 'Geek-i-knack', amount: 200},
    {name: 'Geek-o-mania', amount: 1000}
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, Text }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieGraph = () => {


    return (
            <ResponsiveContainer width="95%" height="95%">
                <PieChart>
                    <Text textAnchor="inherit">
                        August
                    </Text>
                    <Pie data={data} innerRadius="50%" outerRadius="100%" labelLine={false} dataKey="amount" label={renderCustomizedLabel}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>

    );
};

export default PieGraph;