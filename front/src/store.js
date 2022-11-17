import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer, newProductReducer, productReducer } from './reducer/productReducer';
import { authReducer, userReducer, forgotPasswordReducer, usersReducer} from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';
import { newOrderReducer } from './reducer/orderReducer';

const reducer = combineReducers({
    productos: productsReducer,
    users:usersReducer,
    productodetalle: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newProduct: newProductReducer,
    product: productReducer,
    newOrder: newOrderReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;