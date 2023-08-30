import React from 'react'
import {RiSearch2Fill, RiNotification2Fill} from 'react-icons/ri'
import profileImg from '../assets/Profile picture.png'

const TopBar = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-slate-50 rounded-2xl p-2'>

        <div className='flex flex-row bg-slate-100 items-center rounded-2xl'>
          <RiSearch2Fill className='ml-[3px] text-slate-400'/>
          <input type="text" placeholder='Search' className=' rounded-2xl outline-none p-2 bg-slate-100 '/>
        </div>

      <div className='flex flex-row items-center gap-7'>
        <button className='rounded-full p-2 bg-slate-100'>
          <RiNotification2Fill/>
        </button>
        <div>
          <img src={profileImg} alt="" className='w-[48px] rounded-full' />
        </div>
      </div>
    </div>
  )
}

export default TopBar
