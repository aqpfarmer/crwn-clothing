import CartActionTypes from './cart-types';
import Cart from '../../components/cart-dropdown/cart-dropdown-component';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        default:
            return state;
    };
}
export default CartReducer;
