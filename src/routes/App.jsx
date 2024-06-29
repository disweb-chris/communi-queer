import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import EventoDetalle from "../components/EventoDetalle";
import Login from "../components/Login";
import Registro from "../components/Registro";
import Compra from "../components/Compra";
import { AppProvider } from "../context/AppContext";
import PrivateRoute from "../components/PrivateRoute";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evento/:id" element={<EventoDetalle />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route 
              path="/compra/:id" 
              element={
                <PrivateRoute>
                  <Compra />
                </PrivateRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;
