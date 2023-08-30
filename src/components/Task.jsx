import React from 'react'
import {IoMdAddCircle} from 'react-icons/io'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GrAttachment} from 'react-icons/gr'
import ProgressBar from '@ramonak/react-progress-bar'

const lists = [
  {
    title: "DESIGN SYSTEM UPDATE",
    subTitle: "Website project",
    chat: 9,
    attachment: 9,
    completed: 3,
    toal: 10,
  },
  {
    title: "DESIGN SYSTEM UPDATE",
    subTitle: "Website project",
    chat: 11,
    attachment: 7,
    completed: 6,
    toal: 10,
  },
  {
    title: "DESIGN SYSTEM UPDATE",
    subTitle: "Website project",
    chat: 16,
    attachment: 5,
    completed: 8,
    toal: 10,
  },
]

const Task = () => {
  return (
    <div className='bg-slate-50 flex flex-col p-2 rounded-2xl w-full mt-4'>
      <div className='flex flex-row justify-between items-center mb-3'>
        <h3 className='font-bold'>TASKS</h3>
        <button className='flex flex-row items-center gap-3'>
          <IoMdAddCircle/>
          <p className='font-normal'>Add new task</p>
        </button>
      </div>

      <div>
        {
          lists.map((list, index) => (
            <div key={index} className='flex flex-col gap-3 items-start mb-8'>
                <div className='flex flex-row justify-between items-center w-full'>
                  <div className='flex flex-col items-start'>
                    <h2 className='font-semibold'>{list.title}</h2>
                    <p className='text-slate-300'>{list.subTitle}</p>
                  </div>
                  
                  <button className='p-2 rounded-full bg-slate-100'>
                    <BsThreeDotsVertical/>
                  </button>
                </div>

                {/* progress bar  */}
                <div className='w-[96%] flex flex-col gap-1'>
                  <div className='flex flex-row justify-between items-center'>
                    <p>Progress</p>
                    <p>{list.completed}/{list.toal}</p>
                  </div>
                  <ProgressBar
                    completed={list.completed*10}
                    bgColor='#f6cdd8'
                    animateOnRender={true}
                  />
                </div>

                {/* chats and attachment  */}
                <div className='flex flex-row gap-5 items-start'>
                  <div className='flex flex-row gap-1 text-slate-300 items-center'>
                    <BiMessageSquareDetail className='text-slate-300'/>
                    <p>{list.chat}</p>
                  </div>
                  <div className='flex flex-row gap-1 text-slate-300 items-center'>
                    <GrAttachment className='text-slate-300'/>
                    <p>{list.attachment}</p>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Task
