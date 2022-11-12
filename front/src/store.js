import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducer/productReducer';
import { authReducer } from './reducer/userReducer';

const reducer= combineReducers ({
    productos:productsReducer,
    productodetalle: productDetailsReducer,
    auth: authReducer
})

let initialState = {}

const middleware= [thunk]
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;