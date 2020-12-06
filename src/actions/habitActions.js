// export const removeFromCart = (id) => (dispatch, getState) => {
//     dispatch({
//         type: CART_REMOVE_ITEM,
//         payload: id
//     })
//     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
// }

export const increment = (habit) => (dispatch) => {
  dispatch({
    type: 'INCREMENT',
    payload: habit,
  })
}

export const decrement = (habit) => (dispatch) => {
  dispatch({
    type: 'DECREMENT',
    payload: habit,
  })
}

export const add = (habit) => (dispatch) => {
  dispatch({
    type: 'ADD',
    payload: habit,
  })
}

export const remove = (habit) => (dispatch) => {
  dispatch({
    type: 'REMOVE',
    payload: habit,
  })
}

export const reset = () => (dispatch) => {
  dispatch({
    type: 'RESET',
  })
}
