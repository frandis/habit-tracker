import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, remove } from '../actions/habitActions'

const Habit = (props) => {
  const dispatch = useDispatch()
  const handleIncrement = (habit) => {
    dispatch(increment(habit))
  }
  const handleDecrement = (habit) => {
    dispatch(decrement(habit))
  }
  // handleIncrement = () => {
  //   this.props.onIncrement(this.props.habit)
  // }
  // handleDecrement = () => {
  //   this.props.onDecrement(this.props.habit)
  // }
  const handleDelete = (habit) => {
    dispatch(remove(habit))
  }

  const { name, count } = props.habit
  return (
    <li className='habit'>
      <span className='habit-name'>{name}</span>
      <span className='habit-count'>{count}</span>
      <button
        className='habit-button habit-increase'
        onClick={() => handleIncrement(props.habit)}
      >
        <i className='fas fa-plus-square'></i>
      </button>
      <button
        className='habit-button habit-decrease'
        onClick={() => handleDecrement(props.habit)}
      >
        <i className='fas fa-minus-square'></i>
      </button>
      <button
        className='habit-button habit-delete'
        onClick={() => handleDelete(props.habit)}
      >
        <i className='fas fa-trash'></i>
      </button>
    </li>
  )
}

export default Habit
