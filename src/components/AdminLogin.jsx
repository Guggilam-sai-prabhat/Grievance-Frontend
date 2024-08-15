import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../styles/AdminLogin.css"; // Ensure the CSS file is imported

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const getAccess = (e) => {
        e.preventDefault(); // Prevent form submission to see animations
        if(email === "admin@gmail.com" && password === "admin"){
            alert("Login Successful");
            history.push("/aAbBcC");
        } else if(email === "admin.edu@gmail.com" && password === "education"){
            alert("Login Successful");
            history.push("/education");
        } else if(email === "admin.health@gmail.com" && password === "health"){
            alert("Login Successful");
            history.push("/health");
        } else if(email === "admin.service@gmail.com" && password === "service"){
            alert("Login Successful");
            history.push("/service");
        } else {
            alert("You don't have this access");
        }
    }

    return (
        <div className="login-container">
            <h1 className="text-center">Admin Login</h1>
            <form className="login-form">
                <div className="input-group">
                    <label>Email ID:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email ID here" />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </div>
                <button type="submit" onClick={getAccess}>Log In</button>
            </form>
        </div>
    );
}

export default AdminLogin;
