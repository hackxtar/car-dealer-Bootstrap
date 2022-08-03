import AppBar from "./components/shared/AppBar";
import Home from "./components/home/Home";
import "./App.scss";
import Footer from "./components/shared/footer/Footer";
import Login from "./components/auth/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const { submitted, setSubmited } = useState(false);
  return (
    <BrowserRouter>
      {<AppBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {<Footer />}
    </BrowserRouter>
  );
}

export default App;
