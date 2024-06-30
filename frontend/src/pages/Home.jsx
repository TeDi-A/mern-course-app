import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['token']);
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const verifyCookie = async () => {
            try {
                const response = await axios.post(
                    "https://mern-deploy-practice.onrender.com/api/",
                    {},
                    { withCredentials: true }
                );

                if (response && response.data) {
                    const { status, user } = response.data;
                    setUsername(user);
                    setCookies('token', cookies.token);
                    const greeted = localStorage.getItem('greeted');
                    if (!greeted) {
                        toast(`Hello ${user}`, { position: "top-right" });
                        localStorage.setItem('greeted', 'true');
                    }
                } else {
                    removeCookie("token");
                    navigate('/login');
                }
            } catch (error) {
                console.error("Error verifying cookie:", error);
                removeCookie("token");
                navigate('/login');
            }
        };

        if (!cookies.token) {
console.log('No token found, redirecting to login');
            navigate("/login");
            return;
        }

        verifyCookie();
    }, [cookies, navigate, removeCookie, setCookies]);

    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };


    return (
        <>
            <div className="home_page">
                <h4>
                    {" "}
                    Welcome <span>{username}</span>
                </h4>
                <button>Courses</button>
                <button ><Link to="/courses">Show All</Link></button>
                <button>Registered Courses</button>


                <button><Link to="/students">Students</Link></button>
                <button onClick={Logout}>LOGOUT</button>
            </div>
            <ToastContainer limit={1} />
        </>
    );
}
export default Home
