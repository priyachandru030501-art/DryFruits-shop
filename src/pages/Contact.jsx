
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <div className="contact-page">
      <nav className="navbar navbar-expand-lg contact-navbar">
        <div className="container">
          <Link className="navbar-brand contact-brand" to="/"><i className="bi bi-leaf-fill"></i> NutriBasket</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#contactNav" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="contactNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/stores">Stores</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/contact">Contact</Link></li>
            </ul>
            <Link className="contact-cart" to="/cart"><i className="bi bi-bag"></i> Cart</Link>
          </div>
        </div>
      </nav>

      <header className="contact-hero">
        <p>WE'RE HERE TO HELP</p>
        <h1>Get In Touch</h1>
        <span>Have a question? We'd love to hear from you.</span>
      </header>

      <main className="container contact-content">
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right">
            <p className="contact-label">CONTACT INFORMATION</p>
            <h2>Let's Talk About Your Needs</h2>
            <p className="contact-description">
              Contact us for product questions, store information, or general enquiries.
            </p>

            <div className="contact-info-item">
              <i className="bi bi-envelope"></i>
              <div>
                <h6>Email Us</h6>
                <p>hello@nutribasket.example</p>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="bi bi-geo-alt"></i>
              <div>
                <h6>Our Location</h6>
                <p>Add your business address here</p>
              </div>
            </div>

            <div className="contact-info-item">
              <i className="bi bi-clock"></i>
              <div>
                <h6>Business Hours</h6>
                <p>Monday – Saturday: 9 AM – 6 PM</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <p>Fill in the details below and we'll be happy to help.</p>

              {submitted && (
                <div className="alert alert-success" role="status">
                  Thank you! Your sample message has been submitted.
                </div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="contactName">Your Name</label>
                  <input id="contactName" name="name" type="text" placeholder="Enter your name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input id="contactEmail" name="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="col-12">
                  <label htmlFor="contactSubject">Subject</label>
                  <input id="contactSubject" name="subject" type="text" placeholder="What is your enquiry about?" required />
                </div>
                <div className="col-12">
                  <label htmlFor="contactMessage">Message</label>
                  <textarea id="contactMessage" name="message" rows="5" placeholder="Write your message..." required></textarea>
                </div>
                <div className="col-12">
                  <button className="contact-submit" type="submit">
                    Send Message <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="contact-footer">
        <div className="container">
          <h4><i className="bi bi-leaf-fill"></i> NutriBasket</h4>
          <p>We are happy to hear from you.</p>
          <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
          </div>
          <hr />
          <p>© {new Date().getFullYear()} NutriBasket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
