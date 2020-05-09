import React from "react";
import CustomButton from "./Components/customButton";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import DemoButton from "./Components/demoButton";
import customButton from "./Components/customButton";

function App() {
  return (
    <div className="App">
      <CustomButton />
    </div>
  );
}

export default App;
