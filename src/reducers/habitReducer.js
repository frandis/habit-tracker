export const habitReducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      const habit = action.payload
      console.log(habit)
      //   console.log(state)
      //   const existHabit = state.find((x) => x.id === habit.id)
      const addedState = state.map((x) =>
        x.name === habit.name ? { ...x, count: x.count + 1 } : { ...x }
      )

      return addedState

    case 'DECREMENT':
      const toBeUpdated = state.find((x) => x.id === action.payload.id)
      const count = toBeUpdated.count > 0 ? toBeUpdated.count - 1 : 0
      const newState = state.map((x) =>
        x.id === action.payload.id ? { ...x, count } : { ...x }
      )
      return newState

    case 'ADD':
      const longerState = state.concat({
        id: state.length + 1,
        name: action.payload,
        count: 0,
      })
      console.log(longerState)
      return longerState
    case 'REMOVE':
      const updatedState = state.filter((x) => x.id !== action.payload.id)
      return updatedState
    case 'RESET':
      const resetState = state.map((x) => {
        x.count = 0
        return x
      })
      return resetState

    default:
      return state
  }
}
