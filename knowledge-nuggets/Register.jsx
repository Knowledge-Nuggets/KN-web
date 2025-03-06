import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app, auth, db } from "./firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import "./Form.css"; // Ensure this includes the new styles

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[\s\S]{8,}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Add occupation state
  const [occupation, setOccupation] = useState("student");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = emailRegex.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = passwordRegex.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = emailRegex.test(user);
    const v2 = passwordRegex.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user,
        pwd
      );
      console.log("User registered: ", userCredential.user);

      // Save user details to Realtime Database with occupation
      await set(ref(db, "users/" + userCredential.user.uid), {
        email: user,
        occupation: occupation,
        createdAt: new Date().toISOString(),
      });

      setSuccess(true);
      navigate("/login"); // Navigate to the login page on success
    } catch (error) {
      console.error("Error registering user: ", error);
      setErrMsg(error.message);
      errRef.current.focus();
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
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email:
              <span className={validName ? "valid" : "hide"}>✓</span>
              <span className={validName || !user ? "hide" : "invalid"}>✗</span>
            </label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              Invalid Email Format.
            </p>

            <label htmlFor="password">
              Password:
              <span className={validPwd ? "valid" : "hide"}>✓</span>
              <span className={validPwd || !pwd ? "hide" : "invalid"}>✗</span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                ✓
              </span>
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                ✗
              </span>
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              Must match the first password input field.
            </p>

            {/* Occupation Dropdown */}
            <label htmlFor="occupation">Occupation:</label>
            <select
              id="occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
              className="occupation-dropdown"
            >
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="researcher">Researcher</option>
              <option value="content-creator">Content Creator</option>
            </select>

            <button disabled={!validName || !validPwd || !validMatch}>
              Sign Up
            </button>
          </form>

          <p className="already-registered">
            Already registered?
            <br />
            <Link to="/login" className="sign-in-link">
              Sign In
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Register;
