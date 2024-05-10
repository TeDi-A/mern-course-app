import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CoursePage from "./pages/CoursePage";
import Home from "./pages/Home";
import "./App.css";
import StudentPage from "./pages/StudentPage";

function App() {
  const [message, setMessage] = useState([]);

  async function handleClick() {
    const response = await fetch("/api/all");
    const data = await response.json();
    setMessage(data);
  }

  return (
    <BrowserRouter>

      <h1>MERN Stack Classes App</h1>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/classes"
          element={<CoursePage />}
        />
        <Route
          path="/students"
          element={<StudentPage />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App
