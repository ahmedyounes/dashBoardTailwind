'use client'
import { useState } from 'react'
import Header from './components/header'
import Cards from './components/cards'
import SmallCard from './components/smallcard'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const handleCheckChange = (e) => {
    setDarkMode(e.target.checked)
  }
  return (
    <div className={`${darkMode && 'dark '}`}>
      <div className='text-slate-400 dark:text-slate-300 pb-8 dark:bg-darkbg-dark '>
        <Header mode={handleCheckChange} />
        <div className='container -mt-40'>
          <Cards />
          <SmallCard />
        </div>
      </div>
    </div>
  )
}
