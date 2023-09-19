import { Link } from "react-router-dom"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Auth/Firebase";

const Login = () => {
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
    const handleLogin= (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, formVal.email, formVal.password)
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
            <form className="Sign-in" onSubmit={handleLogin}>
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
                <button className = "submit" type = "submit">Log in</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                </div>
                <div className="link"><Link to = "/signup" style={{ textDecoration: 'none' }}>Don't have an account? Click here to Signup</Link></div>
            </form>
        </main>
    )
}

export default Login