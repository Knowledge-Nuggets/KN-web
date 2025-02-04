import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase/firebase"; // Import your Firebase auth
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav className="navbar">
      <h1>Knowledge Nuggets</h1>
      <div className="nav-links">
        {currentUser && <span>Hello, {currentUser.email}</span>}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
