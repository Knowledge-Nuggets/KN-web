import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import "./Form.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const errRef = useRef();
  
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setErrMsg("Please enter your email address");
      return;
    }

    setLoading(true);
    setErrMsg("");
    
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (error) {
      console.error("Error sending reset email:", error);
      
      // Handle different error codes
      if (error.code === "auth/user-not-found") {
        setErrMsg("No account exists with this email address");
      } else if (error.code === "auth/invalid-email") {
        setErrMsg("Invalid email format");
      } else {
        setErrMsg(`Failed to send reset email: ${error.message}`);
      }
      
      errRef.current.focus();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="split-screen">
      <div className="left">
        {/* Logo */}
        <img
          src="assets/kn-knowledge-nuggets.png"
          alt="Knowledge Nuggets Logo"
          className="logo"
        />
        {/* Info Section */}
        <div className="info">
          <h2>AI Video Summarization Tool for Learning</h2>
          <br />
          <p>
            Knowledge Nuggets uses a customized AI to increase your efficiency
            in learning
          </p>
        </div>
      </div>
      <div className="right">
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          
          {success ? (
            <>
              <h1>Email Sent</h1>
              <p className="success-message">
                A password reset link has been sent to your email address.
                Please check your inbox and follow the instructions to reset your password.
              </p>
              <p className="back-to-login">
                <Link to="/login" className="sign-in-link">
                  Back to Login
                </Link>
              </p>
            </>
          ) : (
            <>
              <h1>Forgot Password</h1>
              <p className="instructions">
                Enter your email address, and we'll send you a link to reset your password.
              </p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  disabled={loading}
                />
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
              <p className="back-to-login">
                <Link to="/login" className="sign-in-link">
                  Back to Login
                </Link>
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;