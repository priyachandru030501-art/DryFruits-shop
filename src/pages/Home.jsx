
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./Home.css";

const fruits = [
  {
    name: "Premium Almonds",
    price: "₹350",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Cashew Nuts",
    price: "₹420",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XEExtfqa-VwgQh4RERcNk46s_HqTibQcyucrD1dRYapupPq7b2ERzyk&s=10",
  },
  {
    name: "Golden Raisins",
    price: "₹220",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGupvjQmFnkXQR7K6YJxQ2QP--HuuXptqVHQg8vz5kB2lTKzPK90ktujU&s=10",
  },
  {
    name: "Fresh Dates",
    price: "₹280",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTM1QO1dvZlJMtbuYuTgbw31l0XtvACI0B9I8-FI287EemblSUaPMfZQpo&s=10",
  },
];

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="dry-home">
      <nav className="navbar navbar-expand-lg dry-navbar">
        <div className="container">
          <Link className="navbar-brand dry-brand" to="/">
            <i className="bi bi-leaf-fill"></i> Nutri<span>Basket</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#dryNavbar"
            aria-controls="dryNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="dryNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stores">Stores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            <Link to="/cart" className="dry-cart-link">
              <i className="bi bi-bag"></i> Cart
            </Link>
          </div>
        </div>
      </nav>

      <section className="dry-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <p className="dry-tagline">
                <i className="bi bi-stars"></i> GOODNESS IN EVERY HANDFUL
              </p>

              <h1>
                Nature's Best
                <br />
                <span>Dry Fruits</span>
                <br />
                For Your Family
              </h1>

              <p className="dry-hero-text">
                Discover delicious nuts, wholesome dry fruits, and natural
                goodness for your everyday healthy lifestyle.
              </p>

              <Link to="/products" className="dry-primary-btn">
                Explore Products <i className="bi bi-arrow-right"></i>
              </Link>

              <div className="dry-trust">
                <span><i className="bi bi-check-circle-fill"></i> Quality Selection</span>
                <span><i className="bi bi-heart-fill"></i> Everyday Goodness</span>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="dry-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=1000&q=85"
                  alt="A selection of nuts and dry fruits"
                />
                <div className="dry-image-badge">
                  <i className="bi bi-leaf"></i>
                  <span>Nature's goodness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dry-products-section">
        <div className="container">
          <div className="dry-section-heading" data-aos="fade-up">
            <p>OUR COLLECTION</p>
            <h2>Popular Dry Fruits</h2>
            <span>Find your everyday favourites.</span>
          </div>

          <div className="row g-4">
            {fruits.map((fruit, index) => (
              <div className="col-sm-6 col-lg-3" key={fruit.name}>
                <div
                  className="dry-fruit-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img src={fruit.image} alt={fruit.name} />
                  <div className="dry-fruit-info">
                    <h5>{fruit.name}</h5>
                    <p>Starting from <strong>{fruit.price}</strong></p>
                    <Link to="/products">
                      View Product <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="dry-outline-btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="dry-benefits">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <i className="bi bi-patch-check"></i>
              <h5>Quality Selection</h5>
              <p>Carefully selected products for your daily needs.</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-box-seam"></i>
              <h5>Careful Packaging</h5>
              <p>Thoughtfully packed to help maintain freshness.</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-heart"></i>
              <h5>Everyday Nutrition</h5>
              <p>A tasty addition to a balanced everyday diet.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="dry-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-5">
              <h4><i className="bi bi-leaf-fill"></i> NutriBasket</h4>
              <p>Enjoy nature's goodness, one handful at a time.</p>
            </div>
            <div className="col-md-3">
              <h6>Quick Links</h6>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/stores">Stores</Link>
            </div>
            <div className="col-md-4">
              <h6>Contact</h6>
              <p><i className="bi bi-envelope"></i> hello@nutribasket.example</p>
              <p><i className="bi bi-geo-alt"></i> Visit our store locations</p>
            </div>
          </div>
          <hr />
          <p className="dry-copyright">
            © {new Date().getFullYear()} NutriBasket. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
