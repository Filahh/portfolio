'use client';
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {

  return (
  <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
  </>
  );
}
