import React, { memo } from 'react'
import { useSelector } from 'react-redux'

// import 'semantic-ui/dist/semantic.min.css'

const Navbar = memo(() => {
  const habits = useSelector((state) => state.habits)
  const activeHabits = habits.filter((x) => x.count > 0).length
  return (
    <nav>
      <div className='navbar'>
        <i className='navbar-logo fas fa-leaf'></i>
        <span className='navbar-text'>Habit Tracker</span>
        <span className='navbar-count'>{activeHabits}</span>
      </div>
    </nav>
  )
})

export default Navbar
