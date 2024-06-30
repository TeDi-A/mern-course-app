import { Routes, Route, Link } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import Home from "./pages/Home";
import { Login, Signup } from "./pages";
import StudentPage from "./pages/StudentPage";

function App() {

  return (

    <>
      <h1>MERN Stack Classes App</h1>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/students" element={<StudentPage />}
        />
      </Routes>
    </>
  );
}

export default App
