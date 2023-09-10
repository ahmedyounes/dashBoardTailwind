'use client'
import { useState } from 'react'
import Header from './components/header'
import Cards from './components/cards'
import SmallCard from './components/smallcard'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const handleCheckChange = () => {
    console.log(darkMode)
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode && 'dark '}`}>
      <div className=' text-slate-400 dark:text-slate-300 pb-8 dark:bg-darkbg-dark '>
        <Header mode={handleCheckChange} type={darkMode} />
        <div className='container -mt-40'>
          <Cards />
          <SmallCard />
        </div>
      </div>
    </div>
  )
}
