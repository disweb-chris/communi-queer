import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import EventoDetalle from "../components/EventoDetalle";
import Login from "../components/Login";
import Registro from "../components/Registro";
import Compra from "../components/Compra";
import Carrito from "../containers/Carrito";
import UserProfile from "../components/UserProfile";
import PurchaseHistory from "../components/PurchaseHistory";
import { AppProvider } from "../context/AppContext";
import PrivateRoute from "../components/PrivateRoute";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <AppProvider>
      <Router basename="/communi-queer">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evento/:id" element={<EventoDetalle />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route 
              path="/carrito" 
              element={
                <PrivateRoute>
                  <Carrito />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/compra"  // Asegúrate de que esta ruta coincide con la que usas en navigate
              element={
                <PrivateRoute>
                  <Compra />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/perfil" 
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/historial-compras" 
              element={
                <PrivateRoute>
                  <PurchaseHistory />
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