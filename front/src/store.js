import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productReducer';

const reducer = combineReducers({
     productos :productsReducer
})
const middleware =[thunk]
let initialState ={};

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;