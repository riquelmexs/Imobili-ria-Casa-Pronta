// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Imobiliária Casa Pronta</h1>
        <p>Encontre o lar dos seus sonhos</p>
      </header>
      <main className="listings">
        <div className="property-card">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Casa moderna"
          />
          <h2>Casa Moderna</h2>
          <p>3 quartos · 2 banheiros · 120m²</p>
          <p className="price">R$ 450.000</p>
        </div>

        <div className="property-card">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Apartamento urbano"
          />
          <h2>Apartamento Urbano</h2>
          <p>2 quartos · 1 banheiro · 75m²</p>
          <p className="price">R$ 320.000</p>
        </div>

        <div className="property-card">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            alt="Casa com jardim"
          />
          <h2>Casa com Jardim</h2>
          <p>4 quartos · 3 banheiros · 180m²</p>
          <p className="price">R$ 600.000</p>
        </div>
      </main>
    </div>
  );
}

export default App;
