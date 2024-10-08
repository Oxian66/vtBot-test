import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import store from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <>
        <Header />
        <App />
      </>
    </Provider>
  </>
);
