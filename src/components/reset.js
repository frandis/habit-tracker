import React from 'react'
import { useDispatch } from 'react-redux'

import { reset } from '../actions/habitActions'

const Reset = () => {
  const dispatch = useDispatch()

  const resetHandler = () => {
    dispatch(reset())
  }
  return (
    <button className='reset-button' onClick={resetHandler}>
      Reset All
    </button>
  )
}

export default Reset
