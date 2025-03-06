import React, { useState, useEffect } from "react";
import { ref, onValue, remove } from "firebase/database";
import { db, auth } from "./firebase/firebase";
import {
  FiPieChart,
  FiUsers,
  FiTrash2,
  FiLogOut,
  FiSearch,
} from "react-icons/fi";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterOccupation, setFilterOccupation] = useState("all");

  // Add logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const usersData = snapshot.val();
      if (usersData) {
        const usersList = Object.keys(usersData).map((key) => ({
          id: key,
          ...usersData[key],
        }));
        setUsers(usersList);
        setFilteredUsers(usersList);
      }
    });
  }, []);

  useEffect(() => {
    let filtered = users.filter(
      (user) =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterOccupation === "all" || user.occupation === filterOccupation)
    );

    filtered.sort((a, b) =>
      sortBy === "newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

    setFilteredUsers(filtered);
  }, [searchQuery, sortBy, filterOccupation, users]);

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const userRef = ref(db, `users/${userId}`);
      remove(userRef)
        .then(() => {
          setUsers((prev) => prev.filter((user) => user.id !== userId));
        })
        .catch((error) => {
          console.error("Error deleting user: ", error);
          alert("Failed to delete user.");
        });
    }
  };

  return (
    <div className="admin-layout">
      {/* Admin Container */}
      <div className="admin-container">
        <div className="admin-header">
          <h1>
            <FiUsers /> User Management
          </h1>
          <button onClick={handleLogout} className="logout-btn">
            <FiLogOut /> Logout
          </button>
        </div>

        {/* Controls */}
        <div className="controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="search-icon" />
          </div>

          <div className="filter-group">
            <select
              value={filterOccupation}
              onChange={(e) => setFilterOccupation(e.target.value)}
            >
              <option value="all">All Occupations</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="researcher">Researcher</option>
              <option value="content-creator">Content Creator</option>
            </select>
          </div>
        </div>

        {/* Users Grid */}
        <div className="users-grid">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-header">
                <span className="user-email">{user.email}</span>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="delete-btn"
                >
                  <FiTrash2 />
                </button>
              </div>
              <div className="user-details">
                <div className="detail-item">
                  <span>Occupation:</span>
                  <span>{user.occupation}</span>
                </div>
                <div className="detail-item">
                  <span>Registered:</span>
                  <span>
                    {new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Container */}
      <div className="stats-container">
        <h2>
          <FiPieChart /> User Occupation Distribution
        </h2>
        <div className="chart-container">
          {getOccupationData(filteredUsers).map((item, index) => (
            <div key={item.occupation} className="chart-item">
              <div className="chart-label">
                <span className="occupation">{item.occupation}</span>
                <span className="count">
                  {item.count} users ({item.percentage}%)
                </span>
              </div>
              <div className="chart-bar">
                <div
                  className="bar-fill"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: `hsl(${index * 60}, 70%, 45%)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function for occupation stats
const getOccupationData = (users) => {
  const occupationCount = users.reduce((acc, user) => {
    acc[user.occupation] = (acc[user.occupation] || 0) + 1;
    return acc;
  }, {});

  const total = users.length;
  return Object.entries(occupationCount)
    .map(([occupation, count]) => ({
      occupation,
      count,
      percentage: total > 0 ? Math.round((count / total) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);
};

export default AdminPage;
