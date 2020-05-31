import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavbarLeft from "./Components/NavbarLeft/NavbarLeft";
import Content from "./Components/Content/Content";
import NavbarRight from "./Components/NavbarRight/NavbarRight";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarLeft />
      <Content />
      <NavbarRight />
      <Footer />
    </div>
  );
}

export default App;
