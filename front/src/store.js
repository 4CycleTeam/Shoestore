import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productsReducer,productDetailsReducer } from './reducer/productReducer';

const reducer = combineReducers({
     productos :productsReducer,
     producto : productDetailsReducer
})
const middleware =[thunk]
let initialState ={};

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;