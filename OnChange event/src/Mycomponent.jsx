import React, { useState } from 'react';

function Mycomponent() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} placeholder="Enter name" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} placeholder="Enter quantity" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter comment"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment method</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
            </select>
            <p>Payment Method: {payment}</p>

            <div>
                <label>
                    <input type="radio" value="standard" checked={shipping === 'standard'} onChange={handleShippingChange} />
                    Standard Shipping
                </label>
                <label>
                    <input type="radio" value="express" checked={shipping === 'express'} onChange={handleShippingChange} />
                    Express Shipping
                </label>
                <label>
                    <input type="radio" value="overnight" checked={shipping === 'overnight'} onChange={handleShippingChange} />
                    Overnight Shipping
                </label>
            </div>
            <p>Shipping Method: {shipping}</p>
        </div>
    )
}

export default Mycomponent;