import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Layout from "./Components/Layout";
import Cursor from "./Components/Cursor";
import About from "./Pages/About";
import "./App.css";
import Loading from "./Components/Loading";
// const Layout = lazy(() => import('./Components/Layout'))

function App() {
  return (
    <div className="App">
      <Cursor />
      <Routes>
          <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <header className="App-header">
    
      </header>
    </div>
  );
}

export default App;
