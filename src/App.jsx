import React from "react";

import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload.jsx";
import Login from "./components/Login.jsx";
// import Signup from "./components/Signup.jsx";
import Signup from "./components/Signup";
const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/singup" element={<Signup />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
