import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login, ForgotPassword, ResetPassword} from "./container/auth";
import { Model, Home, Navbar, Transit } from "./container/homeContent";
import { Smart, Tablet, Basic } from './container/homeContent/categories';
import { Footer, Contact, Product, Society, Newsletter } from './container/footerContent';
import NotFound from './container/notFound';
import Header from './container/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route index element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="home">
          <Route index element={<Home />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="Model" element={<Model />} />
          <Route path="transit" element={<Transit />} />
        </Route>
        <Route path="categories">
          <Route index element={<Home />} />
          <Route path="smartphone" element={<Smart />} />
          <Route path="tablette" element={<Tablet />} />
          <Route path="basic" element={<Basic />} />
        </Route>
        <Route path="footer">
          <Route index element={<Footer />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
          <Route path="society" element={<Society />} />
          <Route path="newsletter" element={<Newsletter />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="header" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
