import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import "./styles/tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
