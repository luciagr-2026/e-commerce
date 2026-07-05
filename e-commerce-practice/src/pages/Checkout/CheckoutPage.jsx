import axios from 'axios'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import '.././Checkout/CheckoutHeader'
import { CheckoutHeader } from './CheckoutHeader'
import { PaymentSummary } from './PaymentSummary'
import './CheckoutPage.css'
import { DeliveryOptions } from './DeliveryOptions'



export function CheckoutPage({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null)

    useEffect(() => {

        axios.get('/api/delivery-options?expand=estimatedDelivaryTime')
            .then((response) => {
                setDeliveryOptions(response.data)
            })

        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data)
            })

    }, []);


    return (
        <>

            <title>Checkout</title>
            <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />


            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {deliveryOptions.length > 0 && cart.map((cartItem) => {

                            const selectedDeliveryOption = deliveryOptions
                                .find((deliveryOption) => {
                                    return deliveryOption.id === cartItem.deliveryOptionId
                                })

                            return (
                                <div key={cartItem.product.id} className="cart-item-container">
                                    <div className="delivery-date">
                                        Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                    </div>

                                    <div className="cart-item-details-grid">
                                        <img className="product-image"
                                            src={cartItem.product.image} />

                                        <div className="cart-item-details">
                                            <div className="product-name">
                                                {cartItem.product.name}
                                            </div>
                                            <div className="product-price">
                                                {formatMoney(cartItem.product.priceCents)}
                                            </div>
                                            <div className="product-quantity">
                                                <span>
                                                    Quantity: <span className="quantity-label"> {cartItem.quantity} </span>
                                                </span>
                                                <span className="update-quantity-link link-primary">
                                                    Update
                                                </span>
                                                <span className="delete-quantity-link link-primary">
                                                    Delete
                                                </span>
                                            </div>
                                        </div>

                                        <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} /> 
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                 <PaymentSummary paymentSummary={paymentSummary} />

                </div>
            </div>
        </>
    )
}