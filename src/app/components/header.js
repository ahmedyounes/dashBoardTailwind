import React from 'react'

const Header = (props) => {
  return (
    <div className='bg-bg-default dark:bg-darkbg pb-40 '>
      <div className='container py-9 flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-slate-800  dark:text-white font-bold text-3xl'>
            social media dashboard
          </h1>
          <span className='text-sm'> yotal followers : 12.3456 </span>
        </div>
        <div>
          <label className='mr-2' htmlFor='checkbox'>
            dark mode
          </label>
          <span>
            <input id='checkbox' type='checkbox' onChange={props.mode} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
