import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems,selectCartTotal } from '../../redux/cart/cart-selecters';

import CheckoutItem from '../../components/checkout-item/checkout-item-component';

import './checkout-styles.scss';
import CartItem from '../../components/cart-item/cart-item-compoent';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button-component';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quanity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                (<CheckoutItem key={CartItem.id} cartItem={cartItem} />
            ))}
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            * PLease use the following for test credit card payments *
            <br />
            4242 4242 4242 4242 - EXP: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);