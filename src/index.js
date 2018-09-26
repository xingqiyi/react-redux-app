
import store from './store';
import { addToCart } from './actions/cart-actions';
import { updateCart } from './actions/cart-actions';
import { deleteFromCart } from './actions/cart-actions';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

console.log("initial state: ", store.getState());


let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);



store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));



// Update Cart
store.dispatch(updateCart('Flour 1kg', 5, 110));

// Delete from Cart
store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscribe();



ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);