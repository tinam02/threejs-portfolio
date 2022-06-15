import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import Layout from "./Components/Layout";
import Cursor from "./Components/Cursor";
import About from "./Pages/About";
import "./App.css";
import Loading from "./Components/Loading";
import P404 from "./Pages/P404";
// const Layout = lazy(() => import('./Components/Layout'))

function App() {
  const countRef = useRef();
  const [view, setView] = useState();
  useEffect(() => {
    const updateCount = async () => {
     await fetch("https://api.countapi.xyz/update/tina-m.vercel.app/count/?amount=1")
        .then((res) =>  res.json())
        .then((res) => {
          setView(res.value);  
        });
    };
    updateCount();console.log(view);
    }, []);
// Test1
  return (
    <div className="App">
      <div style={{opacity:0}} ref={countRef}>{view}</div>
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
