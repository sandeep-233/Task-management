import React from 'react'
import {ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from 'recharts'
import {BsThreeDotsVertical} from 'react-icons/bs'

const Data = [
  {
    day: "Mon",
    progress: 90
  },
  {
    day: "Tue",
    progress: 89
  },
  {
    day: "Wed",
    progress: 79
  },
  {
    day: "Thu",
    progress: 59
  },
  {
    day: "Fri",
    progress: 79
  },
  {
    day: "Sat",
    progress: 80
  },
  {
    day: "Sun",
    progress: 89
  },
]

const Statistics = () => {
  return (
    <div className='w-full flex flex-col gap-3 p-1 rounded-2xl mt-4 bg-slate-50'>
      <div className='flex justify-between'>
        <h3 className='text-black font-bold'>ACTIVITY STATISTICS</h3>
        <button className='p-2 rounded-full bg-slate-100'>
          <BsThreeDotsVertical/>
        </button>
      </div>
     <ResponsiveContainer width="100%" aspect={3} className='rounded-t-2xl'>
        <BarChart data={Data} width={200} height={200} >
          <XAxis dataKey="day"/>
          <Tooltip/>
          <Bar dataKey="progress" fill='#adb9f3'/>  
        </BarChart> 
     </ResponsiveContainer> 
    </div>
  )
}

export default Statistics
