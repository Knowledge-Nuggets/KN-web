import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import Bubbles from "./bubbles";
import { auth } from "./firebase/firebase"; // Import your Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate(); // To navigate to Home.jsx

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  useEffect(() => {
    setUser("");
    setPwd("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user, pwd);
      console.log("User logged in: ", userCredential.user);
      setSuccess(true);
      navigate("/home"); // Redirect to Home.jsx
    } catch (error) {
      console.error("Error logging in: ", error);
      setErrMsg("Invalid username or password");
      errRef.current.focus();
    }
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
        <p>
          Need an Account?
          <br />
          <span className="line">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
