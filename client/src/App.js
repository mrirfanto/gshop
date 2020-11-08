import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartScreen from "./pages/CartScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/payment" component={Payment} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
