import React from "react";
import s from "./App.module.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import MainRoute from "./Routers/MainRoute/MainRoute";
import Subbar from "./Components/Subbar/Subbar";
import Footer from "./Components/Footer/Footer";
import reducer from "./Store/Reducers/RootReducer";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={s.App}>
          <Header />
          <Navbar />
          <div className={s.content}>
            <Switch>
              <MainRoute />
            </Switch>
          </div>
          <Subbar />
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
