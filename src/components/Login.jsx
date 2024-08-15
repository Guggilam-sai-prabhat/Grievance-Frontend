import React, { useContext, useState } from 'react';
import login from '../images/login.gif';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import phone from '../images/telephone.png';
import mail from '../images/email.png';
import address from '../images/address.png';
import Cookies from 'js-cookie';
// import "../styles/Login.css";


const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const loginUser = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch('signin', {
            method: 'POST',  // Ensure this is the method expected by the server
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            // Try to parse error message from the server if available
            const errorData = await res.json();
            console.error('Server error:', errorData.message || 'Unknown error');
            window.alert(`Error: ${errorData.message || 'Server error'}`);
            return;
        }

        const data = await res.json();  // Parse JSON only if the response was successful
        Cookies.set('jwtoken', data.token, { path: '/' });
        dispatch({ type: 'USER', payload: true });
        window.alert("Login Successful");
        history.push("/");
    } catch (error) {
        console.error('Error logging in:', error);
        window.alert("Invalid Credentials or Server Error");
    }
};


  return (

    <>
      <style>
        {`
      .contact_info {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #000; /* Or any other color you prefer */
        color: white; /* Text color */
        z-index: 10; /* Ensures the footer is above other content */
      }
      body, .container {
        padding-bottom: 120px; /* Adjust this value based on the actual height of your footer */
      }
      .signup-form {
  background: #f7f7f7; /* Light grey background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

h2 {
  color: #333; /* Dark grey color for headings */
  font-size: 24px; /* Larger font size for visibility */
  text-align: center; /* Centering the title */
  margin-bottom: 15px; /* Spacing below the header */
}

hr {
  margin-bottom: 20px; /* Space below the horizontal rule */
}

label {
  display: block;
  color: #666; /* Darker text for better readability */
  margin-bottom: 5px; /* Space below the label */
  font-weight: bold; /* Make labels bold */
}

input[type="email"], input[type="password"] {
  width: 100%; /* Full width inputs */
  padding: 10px;
  margin-bottom: 15px; /* Space below inputs */
  border: 1px solid #ccc; /* Subtle border */
  border-radius: 5px; /* Rounded corners */
  box-sizing: border-box; /* Includes padding and border in width */
}

input[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff; /* Bootstrap primary color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

input[type="submit"]:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

/* Additional responsive adjustments */
@media (max-width: 576px) {
  .signup-form {
    padding: 15px;
  }
}
    `}
      </style>

      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form row">
              <div className="signup-image col-md-6">
                <figure>
                  <img src={login} alt="not found" />
                </figure>
                <NavLink to="/signup" className="login-image-link">CREATE AN ACCOUNT  | </NavLink>
                <NavLink to="/AdminLogin" className="login-image-link"> &nbsp;LOGIN AS ADMIN</NavLink>
              </div>
              <div className="col-md-6">
                <h2>Log In</h2>
                <hr />
                <form method="POST" className="register-form" id="register-form">

                  <div className="form-group">
                    <label htmlFor="email">
                      Email ID:
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email ID here" className='mx-2'></input>
                  </div>

                  <br />
                  <div className="form-group">
                    <label htmlFor="password">
                      Password:
                    </label>
                    <input type="password" name="password" id="password" autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password" className='mx-2'></input>
                  </div>
                  <br />
                  <div className="form-group form-button">
                    <input type="submit" name="signin" id="signin" className="form-submit login btn btn-outline-primary"
                      onClick={loginUser} value="Log In" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Login;
