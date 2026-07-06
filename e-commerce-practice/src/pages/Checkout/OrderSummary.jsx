import { DeliveryOptions } from "../Checkout/DeliveryOptions";
import { DeliveryDate } from "../Checkout/DeliveryDate";
import { CartItemDetails } from "../Checkout/CartItemDetails";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => (
          <div
            key={cartItem.product.id}
            className="cart-item-container"
          >
            <DeliveryDate
              cartItem={cartItem}
              deliveryOptions={deliveryOptions}
            />

            <div className="cart-item-details-grid">
              <CartItemDetails cartItem={cartItem} />

              <DeliveryOptions
                cartItem={cartItem}
                deliveryOptions={deliveryOptions}
                loadCart={loadCart}
              />
            </div>
          </div>
        ))}
    </div>
  );
}