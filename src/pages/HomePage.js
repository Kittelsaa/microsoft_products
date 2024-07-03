import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Common.css';
import signInButton from '../assets/signin.png';
import signUpButton from '../assets/signup.png';
import productsImage from '../assets/k.png';


const HomePage = () => {
  return (
    <div className="App">
      <Header /> 
      <section className="product-section">
        <div className="product-text">
          <h2>MICROSOFT PRODUCTS</h2>
          <p>Get productivity apps, security, and storage with Microsoft Products</p>
          <div className="buttons">
            <img src={signInButton} alt="Sign In" />
            <img src={signUpButton} alt="Sign Up" />
          </div>
        </div>
        <div className="product-image">
          <img src={productsImage} alt="Microsoft Products" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;

