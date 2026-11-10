import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [initialSection, setInitialSection] = useState('plants');

  const handleGetStartedClick = () => {
    setInitialSection('plants');
    setShowProductList(true);
  };

  const handleAboutUsClick = () => {
    setInitialSection('about');
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showProductList]);

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <div className="button-group">
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
              </button>
              <button className="about-us-btn" onClick={handleAboutUsClick}>
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList 
          onHomeClick={handleHomeClick} 
          initialSection={initialSection} 
        />
      </div>
    </div>
  );
}

export default App;
