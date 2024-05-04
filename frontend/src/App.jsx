import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/message");
        const data = await response.json();
        setMessage(data);
        console.log("Done!");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Users</h1>
      {/* Render each user */}
      {message.map(user => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App
