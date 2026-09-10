import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart ({totalItems})</a>
        </div>
      </nav>

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty</h2>

            <a href="/plants">
              <button>Continue Shopping</button>
            </a>
          </div>
        ) : (
          <div>
            <h2>Total Items: {totalItems}</h2>

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="120"
                  height="120"
                />

                <div>
                  <h3>{item.name}</h3>

                  <p>Unit Price: ₹{item.price}</p>

                  <p>
                    Item Total: ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => decreaseQuantity(item)}
                  >
                    −
                  </button>

                  <span> {item.quantity} </span>

                  <button
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </button>

                  <br />

                  <button
                    onClick={() =>
                      dispatch(removeItem(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>Total Amount: ₹{totalAmount}</h2>

            <button onClick={handleCheckout}>
              Checkout
            </button>

            <a href="/plants">
              <button>Continue Shopping</button>
            </a>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;
