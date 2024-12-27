// // import React, { useState, useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../../context/AuthContext";
// // import styles from "./Login.module.css";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const { login } = useContext(useAuth);
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (login(email, password)) {
// //       navigate("/dashboard");
// //     } else {
// //       alert("Invalid credentials");
// //     }
// //   };

// //   return (
// //     <div className={styles.loginContainer}>
// //       <form onSubmit={handleSubmit} className={styles.form}>
// //         <h2 className={styles.title}>Login</h2>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className={styles.input}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className={styles.input}
// //         />
// //         <button type="submit" className={styles.button}>
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext"; // Use the custom hook directly
// import styles from "./Login.module.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth(); // Use the custom hook to get login from context
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Example login logic
//     if (email === "user@example.com" && password === "password123") {
//       login(); // Call login from context (no need for email/password here)
//       navigate("/dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <h2 className={styles.title}>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const isValid = login(email, password); // login logic

    if (isValid) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
