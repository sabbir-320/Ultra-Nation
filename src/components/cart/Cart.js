import React from 'react';

const Cart = (props) => {
    const allCountry = props.cart
    const country = allCountry.reduce((x, y)=> x + y.name, 0)
    return (
        <div>
            <h3>this is: {country}</h3>
        </div>
    );
};

export default Cart;