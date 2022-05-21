import React from "react";
import "./App.scss"
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import SocialMedia from "./SocialMedia/SocialMedia";
import Attribution from "./Attribution/Attribution";

const App = () => {
  return (
    <div className="app-main">
      <Header />
      <div className="app-content-area">
        <div className="content-left">
          <Content />
        </div>
        <div className="content-right">
          <SocialMedia />
          <Attribution />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
