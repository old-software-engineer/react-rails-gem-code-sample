import React, { useEffect, useState } from "react";
import { signUp } from "../../api/AirlineApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = ({ setToken, setLogin }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const [loading, setLoading] = useState(false);
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    setEnable(reg.test(user.email) && user.password.length > 5);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (confirmPassword == user.password) {
      signUp(user)
        .then((resp) => {
          setEnable(false);
          setLoading(false);
          setToken(resp.headers.authorization);
          document.cookie = `token=${resp.headers.authorization}`;
        })
        .catch((error) => {
          console.log("error", error);
          setLoading(false);
        });
    } else {
      toast.error("Mismatch password !");
    }
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
              Register
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
              <div className="field-input">
                <span className="form-label">Confirm Password</span>
                <input
                  onChange={handleConfirmPassword}
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
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
                setLogin(true);
              }}
              className="text-white link-center"
            >
              SignIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
