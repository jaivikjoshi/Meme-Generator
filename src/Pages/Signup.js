import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/Firebase";

const Signup = () => {
    const [formVal, setFormVal] = useState({
        email: "",
        password: ""
    }
    );
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormVal(prevFromVal => {
           return {
            ...prevFromVal,
            [name]: value
           } 
        })
    }
    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, formVal.email, formVal.password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
        setSignInState(true);
    }
    const [signInState, setSignInState] = useState(false);

    if (signInState) {
        return <Navigate to = "/"/>
    }
    return (
        <main>
            <div className="background"></div>
            <form className="Sign-in" onSubmit={handleSignup}>
                <p className="back-btn" onClick={() => {setSignInState(true);}}>← Home</p>
                <label>
                    Email
                    <input 
                        type = "text" 
                        placeholder = "Email" 
                        name = "email" 
                        onChange={handleChange} 
                        value = {formVal.email}
                    />
                </label>
                <label>
                    Password
                    <input 
                        type = "text" 
                        placeholder="Password" 
                        name = "password"
                        onChange={handleChange} 
                        value = {formVal.password}
                    />
                </label>
                <button type = "submit" className="submit">Sign Up</button>
                <div className = "social">
                    <div className ="go"><i className ="fab fa-google"></i>  Google</div>
                </div>
                <div className="link"><Link to = "/login" className="login-link" style={{ textDecoration: 'none' }}>Already have a account? Click here to Login</Link></div>
            </form>
            
        </main>
    )
}

export default Signup;