import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Layout from "./Components/Layout";
import Cursor from "./Components/Cursor";
import About from "./Pages/About";
import "./App.css";
import Loading from "./Components/Loading";
import P404 from "./Pages/P404";
// const Layout = lazy(() => import('./Components/Layout'))

function App() {
  return (
    <div className="App">
      <Cursor />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<P404 />} />
      </Routes>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
