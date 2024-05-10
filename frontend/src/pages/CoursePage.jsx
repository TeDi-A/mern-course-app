import { useState, useEffect } from "react";
import "../App.css";

function CoursePage() {

    const [message, setMessage] = useState([]);

    async function handleOnClick() {
        const response = await fetch("/api/all");
        const data = await response.json();
        setMessage(data);
    }

    return (
        <>
            <h1>Courses Page</h1>
            <button onClick={handleOnClick}>Show All</button>
            {message.map(item => (
                <div key={item.id}>
                    <p>Day: {item.day_name}</p>
                    <p>Courses: {item.subjects.join(', ')}</p>
                </div>
            ))}
        </>
    )
}

export default CoursePage