import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Text from "./text.js"
import Checkout from './Checkout';
import Header from './Header';
import Main from './Main';
import Order from './Order';
import MainCheckout from './MainCheckout';
import Product from './Product';
import LoginPage from './Loginpage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainCheckout />} /> //one way to write the code

        <Route path="/checkout" element={<Main component={<Checkout />} />} /> //another way

        <Route path="/order" element={<Order />}/>

        <Route path="/product" element={<Product />}/>

        <Route path="/Loginpage" element={<Main component={<LoginPage />} />} />

        {/* <Route path="/main-checkout" element={<MainCheckout />} />

        <Route path="/main-order" element={<MainOrder />} /> */}

        {/* <Route path="/" element={<Text name="avyakta" age="21"/> }/>

        <Route path="/a" element={<Text name="avya" age="2"/> }/> */}

        {/* <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" /> */}

      </Routes>
    </Router>
  );
}

export default App;
