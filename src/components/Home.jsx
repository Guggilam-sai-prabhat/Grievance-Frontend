import React, { useEffect, useState } from 'react';
import convo from '../images/convo.png';
import '../styles/Home.css'; // Importing the CSS file

const Home = () => {
    const [userName, setUserName] = useState();
    const [show, setShow] = useState(false);

    const userHome = async () => {
        try {
            const res = await fetch("getdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserName(data.name);
            setShow(true);
            if (!res.status === 200) {
                const error = new Error(res.err);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        userHome();
    }, []);

    return (
        <div className="home-container"> {/* Added the container class */}
            {userName ? (
                <>
                    <img src={convo} alt="Conversation" className="img-responsive" />
                    <p className="maintext">Hello {userName}! Welcome Back!!</p>
                </>
            ) : (
                <>
                    <br />
                    <img src={convo} alt="Conversation" className="img-responsive" />
                    <p className="maintext">Please login to file a grievance</p>
                </>
            )}
        </div>
    );
};

export default Home;
