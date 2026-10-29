
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./Stores.css";

const stores = [
  { name: "Green Garden Store", city: "Chennai", address: "Add your store address here", icon: "bi-shop" },
  { name: "Nature Basket Store", city: "Coimbatore", address: "Add your store address here", icon: "bi-geo-alt" },
  { name: "Healthy Harvest Store", city: "Trichy", address: "Add your store address here", icon: "bi-basket2" },
];

function Stores() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="stores-page">
      <nav className="navbar navbar-expand-lg stores-navbar">
        <div className="container">
          <Link className="navbar-brand stores-brand" to="/"><i className="bi bi-leaf-fill"></i> NutriBasket</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#storesNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="storesNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/stores">Stores</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <Link className="stores-cart" to="/cart"><i className="bi bi-bag"></i> Cart</Link>
          </div>
        </div>
      </nav>

      <header className="stores-hero">
        <p>COME SAY HELLO</p>
        <h1>Find Our Stores</h1>
        <span>Discover a convenient location for your dry fruit shopping.</span>
      </header>

      <main className="container stores-content">
        <div className="text-center stores-intro" data-aos="fade-up">
          <h2>Our Store Locations</h2>
          <p>Sample locations for your website design. Replace these details with your actual stores.</p>
        </div>

        <div className="row g-4">
          {stores.map((store, index) => (
            <div className="col-md-6 col-lg-4" key={store.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <article className="store-card">
                <div className="store-icon"><i className={`bi ${store.icon}`}></i></div>
                <h4>{store.name}</h4>
                <p className="store-city"><i className="bi bi-geo-alt-fill"></i> {store.city}</p>
                <p>{store.address}</p>
                <Link to="/contact" className="store-link">Contact Us <i className="bi bi-arrow-right"></i></Link>
              </article>
            </div>
          ))}
        </div>
      </main>

      <footer className="stores-footer">
        <div className="container">
          <h4><i className="bi bi-leaf-fill"></i> NutriBasket</h4>
          <p>Goodness from nature, close to you.</p>
          <div className="stores-footer-links">
            <Link to="/">Home</Link><Link to="/products">Products</Link><Link to="/contact">Contact</Link>
          </div>
          <hr />
          <p>© {new Date().getFullYear()} NutriBasket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Stores;
