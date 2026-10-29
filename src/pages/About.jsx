
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about-page">
      <nav className="navbar navbar-expand-lg about-navbar">
        <div className="container">
          <Link className="navbar-brand about-brand" to="/"><i className="bi bi-leaf-fill"></i> NutriBasket</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#aboutNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="aboutNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/stores">Stores</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            <Link className="about-cart" to="/cart"><i className="bi bi-bag"></i> Cart</Link>
          </div>
        </div>
      </nav>

      <header className="about-hero">
        <p>OUR STORY</p>
        <h1>Good Food. Good Life.</h1>
        <span>Bringing nature's goodness to your everyday routine.</span>
      </header>

      <section className="container about-story">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              className="about-story-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQag6pWTMHiB3VfxB_3dz9ghbnYw-tfVotnjNEBuRzAuqBiuNDSZql2G0o&s=10"
              alt="A variety of nuts and dry fruits"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <p className="about-label">WHO WE ARE</p>
            <h2>Nature's Goodness, Selected With Care</h2>
            <p>
              NutriBasket is a dry fruits store concept created to make
              everyday nut and dried fruit shopping simple and enjoyable.
              We believe that good food can bring small moments of happiness
              to every home.
            </p>
            <p>
              Our collection features popular nuts, dates, raisins, and
              mixed dry fruits. We aim to offer a welcoming shopping
              experience with clear product information and thoughtful
              presentation.
            </p>
            <Link to="/products" className="about-button">Explore Our Collection</Link>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="text-center about-values-heading" data-aos="fade-up">
            <p className="about-label">WHAT MATTERS TO US</p>
            <h2>Our Values</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="about-value-card">
                <i className="bi bi-patch-check"></i>
                <h4>Quality</h4>
                <p>We focus on thoughtful product selection and clear product details.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="about-value-card">
                <i className="bi bi-heart"></i>
                <h4>Care</h4>
                <p>We want every customer to enjoy a simple and friendly experience.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="about-value-card">
                <i className="bi bi-people"></i>
                <h4>Community</h4>
                <p>We hope to become a convenient choice for families and everyday shoppers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default About;
