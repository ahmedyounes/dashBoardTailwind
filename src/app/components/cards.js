'use client'
import React from 'react'
import CountUp from 'react-countup'

import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
const Cards = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
      <div className='card before:bg-facebook '>
        <div className='flex items-center justify-center gap-1 font-bold pb-6 '>
          <span className='text-facebook '>
            <FacebookIcon />
          </span>
          <span>@abcd</span>
        </div>
        <h2 className='text-slate-800 dark:text-white text-6xl '>
          <CountUp end={1987} />
        </h2>
        <p className='font-medium uppercase tracking-[0.3em] '>followers</p>
        <div className='flex items-center justify-center gap-1 font-bold pt-6'>
          <span className='text-maingreen   '>
            <ArrowDropUpIcon />
          </span>
          <span>today</span>
        </div>
      </div>
      <div className='card before:bg-facebook  '>
        <div className='flex items-center justify-center gap-1 font-bold pb-6 '>
          <span className='text-facebook '>
            <TwitterIcon />
          </span>
          <span>@abcd</span>
        </div>
        <h2 className='text-slate-800 dark:text-white text-6xl '>
          <CountUp end={1887} />
        </h2>
        <p className='font-medium uppercase tracking-[0.3em] '>followers</p>
        <div className='flex items-center justify-center gap-1 font-bold pt-6'>
          <span className='text-maingreen   '>
            <ArrowDropUpIcon />
          </span>
          <span>today</span>
        </div>
      </div>
      <div className='card before:bg-gradient-to-r before:from-amber-500 before:to-fuchsia-500 '>
        <div className='flex items-center justify-center gap-1 font-bold pb-6 '>
          <span className='text-fuchsia-600 '>
            <InstagramIcon />
          </span>
          <span>@abcd</span>
        </div>
        <h2 className='text-slate-800 dark:text-white text-6xl '>
          <CountUp end={1957} />
        </h2>
        <p className='font-medium uppercase tracking-[0.3em] '>followers</p>
        <div className='flex items-center justify-center gap-1 font-bold pt-6'>
          <span className='text-maingreen   '>
            <ArrowDropUpIcon />
          </span>
          <span>today</span>
        </div>
      </div>
      <div className='card before:bg-rose-700 '>
        <div className='flex items-center justify-center gap-1 font-bold pb-6 '>
          <span className='text-rose-700'>
            <YouTubeIcon />
          </span>
          <span>@abcd</span>
        </div>
        <h2 className='text-slate-800 dark:text-white text-6xl '>
          <CountUp end={2987} />
        </h2>
        <p className='font-medium uppercase tracking-[0.3em] '>followers</p>
        <div className='flex items-center justify-center gap-1 font-bold pt-6'>
          <span className='text-rose-700 '>
            <ArrowDropDownIcon />
          </span>
          <span>today</span>
        </div>
      </div>
    </div>
  )
}

export default Cards
