import React, { useState, useEffect } from "react";
import { signIn } from "../../api/AirlineApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({ setToken, setLogin }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setEnable(reg.test(user.email) && user.password.length > 5);
  }, [user]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    signIn(user)
      .then((resp) => {
        setLoading(false);
        setEnable(false);
        setToken(resp.headers.authorization);
        document.cookie = `token=${resp.headers.authorization}`;
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div id="background-cover" className="section">
      <ToastContainer theme="dark" closeOnClick position="bottom-right" />
      <div className="section-center">
        <div className="container">
          <div className="user-form" style={{ maxWidth: "768px" }}>
            <h1
              className="text-white"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Sign In
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="field-input">
                <span className="form-label">Email</span>
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                />
              </div>
              <div className="field-input">
                <span className="form-label">Password</span>
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                  name="password"
                  value={user.password}
                />
              </div>
              <div
                className="row"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    padding: "0",
                    margin: "1rem 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      width: "20rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    disabled={!enable}
                    className={!enable ? "submit-btn-disabled" : "submit-btn"}
                  >
                    {loading ? <div className="spinner-login"></div> : "Submit"}
                  </button>
                </div>
              </div>
            </form>
            <a
              onClick={() => {
                setLogin(false);
              }}
              className="text-white link-center"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
