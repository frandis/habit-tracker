import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { habitReducer } from './reducers/habitReducer'
// import {productListReducers, productDetailsReducers} from './reducers/productReducers'
// import {cartReducer} from './reducers/cartReducers'
// import {userLoginReducer} from './reducers/userReducers'
const reducer = combineReducers({
  habits: habitReducer,
})

// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]
// const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null

const initialState = {
  habits: [
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Biking', count: 0 },
  ],
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
