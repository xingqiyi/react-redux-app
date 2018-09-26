

import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';


import todos from './todos'
import visibilityFilter from './visibilityFilter'


const allReducers = {
    todos,
    visibilityFilter,
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;


