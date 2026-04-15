import { useState } from "react";
import './Sign.css';
import Welcome from "./Welcome";

export default function Sign() {

  const [login, setlogin] = useState(true);
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="container">
      <div className="form-container">

        {isLoggedIn ? (
          <Welcome 
            user={user} 
            onLogout={() => {
              setIsLoggedIn(false);
              setUser("");
            }} 
          />
        ) : (
          <>
            <div className="form-toggle">
              <button
                className={login ? 'activate' : ""}
                onClick={() => setlogin(true)}
              >
                LOGIN
              </button>

              <button
                className={!login ? 'activate' : ""}
                onClick={() => setlogin(false)}
              >
                SIGNUP
              </button>
            </div>

            {login ? (
              <form className="form" onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <input
                  placeholder="Enter your name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
              </form>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <h2>Sign Up Form</h2>
                <input
                  placeholder="Enter your name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="submit">Sign Up</button>
              </form>
            )}
          </>
        )}

      </div>
    </div>
  );
}