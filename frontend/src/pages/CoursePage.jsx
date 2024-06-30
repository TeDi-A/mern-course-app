import React, { useState, useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import { useCookies } from "react-cookie";
import { openDialog, closeDialog } from "../Components/Modal";

function CoursePage() {
    const [message, setMessage] = useState([]);
    const [username, setUsername] = useState('');
    const [cookies, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const response = await fetch(
                    "https://divcourses.vercel.app/api/all"
                );
                const data = await response.json();
                setMessage(data);

            } catch (error) {
                console.error("Failed to fetch courses:", error);
            }
        };

        loadCourses();
    }, [cookies, navigate, removeCookie]);


    return (
        <>
            <h1>Courses Page</h1>
            <div className="course-bank">
                {message.map((item) => (
                    <div className="course-frame" key={item.course_id}>
                        <div className="course-item">
                            <p>{item.course_name}</p>
                        </div>
                        <span>
                            <button onClick={() => openDialog(item.course_id)}>Info</button>
                            <button>Register</button>
                        </span>
                        <dialog id={`dialog-${item.course_id}`} className="dialog">
                            <h2>{item.course_name}</h2>
                            <p>{item.course_description}.</p>
                            <button onClick={() => closeDialog(item.course_id)}>Close</button>
                        </dialog>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CoursePage;
