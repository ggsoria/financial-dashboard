import React from 'react'
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import './Chart.css'
import { ChartTopBar } from './ChartTopBar';
const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page B', uv: 300, pv: 2400, amt: 2400}, 
    {name: 'Page C', uv: 300, pv: 2400, amt: 2400}, 
    {name: 'Page E', uv: 450, pv: 6300, amt: 2400}, 
    {name: 'Page F', uv: 540, pv: 2300, amt: 2400}, 
    {name: 'Page G', uv: 620, pv: 2500, amt: 2400}, 
    {name: 'Page H', uv: 300, pv: 3400, amt: 2400}, 

];

export const Chart = () => {
  return (
    <div className="chart__container">
        <ChartTopBar />
        <ResponsiveContainer width='100%' height='80%'>
            <AreaChart data={data} margin={{left: -20}}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="1.43%" stopColor="rgba(172, 172, 172)" stopOpacity={0.8}/>
                <stop offset="75%" stopColor="rgba(28, 104, 170)" stopOpacity={0}/>
                </linearGradient>

            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid vertical={false} strokeDasharray="4"/>
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="rgba(0, 118, 184, 1)" strokeWidth='3.75' fillOpacity={1} fill="url(#colorUv)" />
            {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

