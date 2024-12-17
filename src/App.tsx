import React from "react";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Top Icon */}
      <div className="icon">
        <img
          src="https://www.gstatic.com/images/branding/product/2x/google_48dp.png"
          alt="Google Shield"
          className="shield"
        />
      </div>

      {/* Main Title */}
      <h1 className="main-title">
        Every Google product is <br />
        <span className="highlighted">designed for safety.</span>
      </h1>

      {/* Paragraph */}
      <p className="description">
        Every day, billions of people use Google to find reliable information,
        get to their destination, connect with loved ones, and more. When you
        use our products and services, it’s our responsibility to keep your
        personal information private, safe, and secure.
      </p>
    </div>
  );
};

export default App;
