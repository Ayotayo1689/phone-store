import React from "react";
 import './App.css';
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal  from "../src/pages/Modal";

function App(){
  return (
    <>
     <Navbar />
     <Modal />
    </>
  ) ;
};

export default App; 