
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./Products.css";

const products = [
  { id: 1, name: "Premium Almonds", price: 350, category: "Nuts", icon: "bi-nut", image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Cashew Nuts", price: 420, category: "Nuts", icon: "bi-circle", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XEExtfqa-VwgQh4RERcNk46s_HqTibQcyucrD1dRYapupPq7b2ERzyk&s=10" },
  { id: 3, name: "Pistachios", price: 480, category: "Nuts", icon: "bi-leaf", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRe-Sr8NOUdyU1j2ptfVi-althZxRR94rm2SnjduBSviSb1OpoP6HckvM&s=10" },
  { id: 4, name: "Golden Raisins", price: 220, category: "Dried Fruits", icon: "bi-stars", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGupvjQmFnkXQR7K6YJxQ2QP--HuuXptqVHQg8vz5kB2lTKzPK90ktujU&s=10" },
  { id: 5, name: "Sweet Dates", price: 280, category: "Dried Fruits", icon: "bi-heart", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM1QO1dvZlJMtbuYuTgbw31l0XtvACI0B9I8-FI287EemblSUaPMfZQpo&s=10" },
  { id: 6, name: "Mixed Dry Fruits", price: 550, category: "Combos", icon: "bi-basket", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviVEMEk1oPmW5i0ECZdOgEICnOc5ssuw1SU9IkPwk1A&s=10" },
];

function Products() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="products-page">
      <nav className="navbar navbar-expand-lg products-navbar">
        <div className="container">
          <Link className="navbar-brand products-brand" to="/">
            <i className="bi bi-leaf-fill"></i> NutriBasket
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#productsNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="productsNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/stores">Stores</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <Link className="products-cart" to="/cart"><i className="bi bi-bag"></i> Cart</Link>
          </div>
        </div>
      </nav>

      <header className="products-hero">
        <p>FRESH PICKS FOR YOU</p>
        <h1>Our Dry Fruits Collection</h1>
        <span>Delicious choices for your everyday routine.</span>
      </header>

      <main className="container products-content">
        <div className="products-toolbar">
          <div>
            <h2>Shop Our Products</h2>
            <p>Explore our selection of nuts and dried fruits.</p>
          </div>
          <span><i className="bi bi-grid"></i> {products.length} products</span>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-sm-6 col-lg-4" key={product.id} data-aos="fade-up" data-aos-delay={index * 70}>
              <article className="product-card">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="product-category">{product.category}</span>
                </div>
                <div className="product-info">
                  <h5>{product.name}</h5>
                  <p className="product-description">A delicious choice for your pantry.</p>
                  <div className="product-bottom">
                    <strong>₹{product.price}</strong>
                    <Link to="/cart" className="product-add">
                      <i className="bi bi-bag-plus"></i> View Cart
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </main>

      <footer className="about-footer">
        <div className="container">
          <h4><i className="bi bi-leaf-fill"></i> NutriBasket</h4>
          <p>Small handfuls. Everyday goodness.</p>
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

export default Products;
