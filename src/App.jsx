import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  // Scrolling down on the landing page navigates cleanly to the plants page
  const handleWheel = (e) => {
    if (!showProductList && e.deltaY > 40) {
      setShowProductList(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showProductList]);

  return (
    <div className="app-container">
      <div 
        className={`landing-page ${showProductList ? 'fade-out' : ''}`}
        onWheel={handleWheel}
      >
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;
