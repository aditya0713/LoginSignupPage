// import React from "react";
// import styles from "./Dashboard.module.css";

// const Dashboard = () => {
//   return (
//     <div className={styles.dashboardContainer}>
//       <h1 className={styles.title}>Dashboard</h1>
//       <p className={styles.description}>
//         Welcome to your dashboard. Here you can manage your account and explore
//         more features.
//       </p>
//     </div>
//   );
// };

// export default Dashboard;

// src/pages/Dashboard/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout from context
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
