import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import RouteNotFound from "./components/RouteNotFound";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route exact path="/" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}

export default App;
