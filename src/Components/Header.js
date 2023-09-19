import { useState } from "react";
import { Navigate } from "react-router-dom";
const Header = () => {
    const [signInState, setSignInState] = useState(false);
    
    if (signInState) {
        return <Navigate to = "/signup"/>
    }

    return (
        <header>
                <h1>Meme Generator</h1>
                <h4 className="signin" onClick={() => {setSignInState(true);}}>
                    Sign In
                </h4>
        </header>
    )
}

export default Header;