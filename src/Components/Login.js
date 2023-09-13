import {useState} from "react";
import Link, {useNavigate} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import {Button} from "react-bootstrap";
import GoogleButton from "react-google-button";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [login, setLogin] = useState("")
    const navigate = useNavigate();

    const handleSumbit = async (props) => {
        props.preventDefault();
        setError("");
        try {
            await login(email,password)
            navigate("/home")
        } catch (err) {
            setError(err.message)
        }
    };

    const handleGoogleSignIn = async (props) => {
        props.preventDefault();
        try {
            await handleGoogleSignIn();
            navigate("/home");
        } catch (error){
            console.log(Error.message);
        }
    };
    return (
        <main>
            <div className="p-4 box">
                <h2 className="mb-3">Login</h2>
                {error && <Alert variant = "Danger">{error}</Alert>}
                <Form onSubmit={handleSumbit}>
                    <Form.Group className="mb-3" controlId = "formBasicEmail">
                        <Form.Control 
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="sumbit"> 
                            Log In
                        </Button>
                    </div>
                </Form>
                <hr/>
                <div>
                    <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                    />
                </div>
            </div>
            <div>Don't have an account? <Link to = "/signup">Sign Up</Link></div>
        </main>
    )
}

export default Login;