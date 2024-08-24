import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./Redux/store.js"; // Dosya adı ve yolu doğru mu?
import Deneme from "./deneme.jsx"; // Dosya adı ve yolu doğru mu?
import Header from "./Header.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import List from "./List.jsx"; // Dosya adı ve yolu doğru mu?

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="grid place-items-center mt-[100px]">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
