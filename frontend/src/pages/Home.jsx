import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "../App.css";

function App() {

    return (
        <>
            <button><Link to="/classes">Courses</Link></button>
            <button><Link to="/students">Students</Link></button>
        </>
    );
}

export default App
