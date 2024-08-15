import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import Cookies from 'js-cookie';

const Logout=()=>{
    const {state,dispatch} = useContext(UserContext);
    const history=useHistory();
    useEffect(()=>{
        Cookies.remove('jwtoken'); // Remove the "jwtoken" cookie
        dispatch({type:"USER",payload:false})
        history.push("/login", {replace: true});
    });
    return(
       <>
        <h1>Logged out!!</h1>
       </>
    );
}

export default Logout;
