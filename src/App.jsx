import React from "react";
import { Routes, Route } from "react-router-dom";

import { Cart, Favorites, Header, Home, PageNotFound } from './components/index'

function App() {
  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    </div>
  );
}

export default App;
