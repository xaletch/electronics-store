import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from './components/index';

import Home from "./page/Home";
import Cart from "./page/Cart";
import Favorites from "./page/Favorites";
import PageNotFound from "./page/PageNotFound/PageNotFound";

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
