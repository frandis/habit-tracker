import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import Habit from './habit'

const Habits = memo(() => {
  const habits = useSelector((state) => state.habits)
  console.log(habits)

  // state = {
  //   habits: [
  //     { id: 1, name: 'Reading', count: 0 },
  //     { id: 2, name: 'Coding', count: 0 },
  //     { id: 3, name: 'Biking', count: 0 },
  //   ],
  // }
  // handleIncrement = (habit) => {
  //   const habits = [...this.state.habits]
  //   const index = habits.indexOf(habit)
  //   habits[index].count++
  //   this.setState({ habits })
  //   console.log(this.state)
  // }

  // handleDecrement = (habit) => {
  //   const habits = [...this.state.habits]
  //   const index = habits.indexOf(habit)
  //   const count = habits[index].count - 1
  //   habits[index].count = count < 0 ? 0 : count
  //   this.setState({ habits })
  //   console.log(this.state)
  // }
  // handleDelete = (habit) => {
  //   const habits = this.state.habits.filter((item) => item.id !== habit.id)
  //   this.setState({ habits })
  // }

  // render() {
  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          // onIncrement={this.handleIncrement}
          // onDecrement={this.handleDecrement}
          // onDelete={this.handleDelete}
        />
      ))}
    </ul>
  )
})
// }

export default Habits
