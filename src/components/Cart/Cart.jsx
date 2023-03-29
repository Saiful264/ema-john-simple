import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart; //option 1
    // const {cart} = props; // option 2

    console.log(cart);
    let total = 0;
    let totalShiping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // product.quantity == product.quantity || 1;

        total = total + product.price * product.quantity;
        totalShiping = totalShiping + product.shipping;
        quantity = quantity + product.quantity
    }
    
    const tex = total*7/100;

    const grandTotal = total + totalShiping + tex;

    return (
        <div className='cart'>
             <h4>Order Summery</h4>
                <p>Selecet Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: $ {totalShiping.toFixed(2)}</p>
                <p>Tax: ${tex}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;