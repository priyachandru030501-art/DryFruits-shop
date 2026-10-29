
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./Cart.css";

const initialItems = [
  {
    id: 1,
    name: "Premium Almonds",
    price: 350,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Cashew Nuts",
    price: 420,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1563412885-139e4045ebad?auto=format&fit=crop&w=300&q=80",
  },
];

function Cart() {
  const [items, setItems] = useState(initialItems);
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  function changeQuantity(id, amount) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
    setOrdered(false);
  }

  function removeItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    setOrdered(false);
  }

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <nav className="navbar navbar-expand-lg cart-navbar">
        <div className="container">
          <Link className="navbar-brand cart-brand" to="/"><i className="bi bi-leaf-fill"></i> NutriBasket</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#cartNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="cartNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/stores">Stores</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <Link className="cart-nav-button" to="/cart"><i className="bi bi-bag"></i> Cart ({items.length})</Link>
          </div>
        </div>
      </nav>

      <header className="cart-hero">
        <p>YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <span>Review your favourite dry fruits.</span>
      </header>

      <main className="container cart-content">
        <div className="row g-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="cart-items-box">
              <h3>Your Items ({items.length})</h3>

              {items.length === 0 ? (
                <div className="cart-empty">
                  <i className="bi bi-basket"></i>
                  <h4>Your cart is empty</h4>
                  <p>Explore our collection and choose your favourites.</p>
                  <Link className="cart-checkout-button" to="/products">Shop Products</Link>
                </div>
              ) : (
                items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h5>{item.name}</h5>
                      <p>₹{item.price} per item</p>
                      <button className="cart-remove" onClick={() => removeItem(item.id)}>
                        <i className="bi bi-trash"></i> Remove
                      </button>
                    </div>
                    <div className="cart-quantity">
                      <button aria-label={`Decrease ${item.name} quantity`} onClick={() => changeQuantity(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Increase ${item.name} quantity`} onClick={() => changeQuantity(item.id, 1)}>+</button>
                    </div>
                    <strong className="cart-item-total">₹{item.price * item.quantity}</strong>
                  </div>
                ))
              )}

              <Link to="/products" className="cart-continue">
                <i className="bi bi-arrow-left"></i> Continue Shopping
              </Link>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="cart-summary-line">
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>
              <div className="cart-summary-line">
                <span>Delivery</span>
                <strong>{items.length === 0 ? "₹0" : "Free"}</strong>
              </div>
              <hr />
              <div className="cart-summary-line cart-grand-total">
                <span>Total</span>
                <strong>₹{subtotal}</strong>
              </div>

              {ordered && (
                <div className="alert alert-success mt-3" role="status">
                  Demo order placed successfully!
                </div>
              )}

              <button
                className="cart-checkout-button w-100"
                disabled={items.length === 0}
                onClick={() => setOrdered(true)}
              >
                Place Demo Order <i className="bi bi-arrow-right"></i>
              </button>
              <p className="cart-demo-note">
                <i className="bi bi-info-circle"></i> Demo only. No payment or real order will be processed.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="cart-footer">
        <div className="container">
          <h4><i className="bi bi-leaf-fill"></i> NutriBasket</h4>
          <p>Thank you for shopping with us.</p>
          <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <hr />
          <p>© {new Date().getFullYear()} NutriBasket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
