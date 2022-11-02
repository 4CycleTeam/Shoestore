import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer,productDetailsReducer } from './reducer/productReducer';

const reducer = combineReducers({
     productos :productsReducer,
     producto : productDetailsReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;