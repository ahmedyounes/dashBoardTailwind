import React from 'react'
import CountUp from 'react-countup'

import FacebookIcon from '@mui/icons-material/Facebook'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

const smallcard = () => {
  return (
    <div className='mt-12'>
      <h2 className='text-2xl font-bold'>overview - today</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6'>
        {Array(12)
          .fill('')
          .map((el) => (
            <div className='card-sm' key={Math.random()}>
              <div className='flex items-center justify-between'>
                <h4 className='font-bold'> pages view</h4>
                <FacebookIcon className='text-facebook' />
              </div>
              <div className='flex items-center justify-between mt-8'>
                <h3 className='font-black text-2xl text-slate-800  dark:text-white'>
                  <CountUp end={1887} />
                </h3>
                <div className='flex items-center gap-1 text-maingreen text-sm'>
                  <span>
                    <ArrowDropUpIcon />
                  </span>
                  <span>300%</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default smallcard
