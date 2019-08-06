import CartActionTypes from './cart-types';
import Cart from '../../components/cart-dropdown/cart-dropdown-component';

const INITIAL_STATE = {
    hidden: true
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    };
}
export default CartReducer;
