import CartActionTypes from './cart-types';
import Cart from '../../components/cart-dropdown/cart-dropown-component';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});