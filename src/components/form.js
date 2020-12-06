import React, { useRef } from 'react'

import { useDispatch } from 'react-redux'
import { add } from '../actions/habitActions'
const Form = () => {
  const inputEl = useRef(null)
  const dispatch = useDispatch()
  const handleAdd = (event) => {
    event.preventDefault()
    const newHabit = inputEl.current.value
    newHabit && dispatch(add(newHabit))
    inputEl.current.value = ''
  }
  return (
    <form className='habit-form' onSubmit={handleAdd}>
      <label className='form-input'>
        New Habit:
        <input
          ref={inputEl}
          className='form-inputBox'
          type='text'
          name='newHabit'
        />
      </label>
      <input className='add-button' type='submit' value='Add' />
    </form>
  )
}

export default Form
