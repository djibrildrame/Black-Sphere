import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Apropos from "./Apropos/Apropos";
import NotFound from "./Accueil/Accueil";
import User from "./User/User";
import Footer from "../src/HeaderFooter/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/user" element={<User />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App