import React, { useState } from 'react';

function MyComponent2() {
    // State hooks
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick Up");

    // Event handlers
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityeChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            {/* Input field for name */}
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            {/* Input field for quantity */}
            <input value={quantity} onChange={handleQuantityeChange} type="number" />
            <p>Quantity: {quantity}</p>

            {/* Textarea for comments */}
            <textarea
                placeholder="Enter delivery instructions"
                value={comment}
                onChange={handleCommentChange}
            />
            <p>Comment: {comment}</p>

            {/* Dropdown for payment */}
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Paypal">Paypal</option>
            </select>
            <p>Payment: {payment}</p>

            {/* Radio buttons for shipping */}
            <label>
                <input
                    type="radio"
                    value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShippingChange}
                />
                Pick Up
            </label><br />

            <label>
                <input
                    type="radio"
                    value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}
                />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent2;
