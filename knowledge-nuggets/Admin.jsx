import React, { useState, useEffect } from "react";
import { ref, onValue, remove } from "firebase/database";
import { db } from "./firebase/firebase";
import { FiSearch, FiTrash2, FiUserX, FiClock } from "react-icons/fi";
import "./Admin.css";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterOccupation, setFilterOccupation] = useState("all");

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
    <div className="admin-container">
      <div className="admin-header">
        <h1>
          <FiUserX className="header-icon" />
          User Administration
        </h1>
        <div className="controls">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>
              <FiClock className="filter-icon" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </label>

            <label>
              <span className="filter-icon">👤</span>
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
            </label>
          </div>
        </div>
      </div>

      <div className="users-grid">
        {filteredUsers.map((user, index) => (
          <div
            key={user.id}
            className="user-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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
                <span className="detail-label">Occupation</span>
                <span className="detail-value">{user.occupation}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Registered</span>
                <span className="detail-value">
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
  );
};

export default AdminPage;
