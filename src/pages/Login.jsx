import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/authServices";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setLoginUser] = useState(null);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const navigate = useNavigate();
  //side effects
  useEffect(() => {
    try {
      const users = JSON.parse(localStorage.getItem("users"));
      if (loginUser && users) {
        const existUser = users.filter(
          (user) => user.email === loginUser.email,
        );
        if (existUser.length) {
          if (existUser[0].password === loginUser.password) {
            setSuccessText("successful found user");
            ///found cookie, nav home
            Cookies.set("user", JSON.stringify(existUser[0]));
            login(existUser[0]);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            throw new Error("Wrong Invalid Email or Password");
          }
        } else {
          throw new Error("User with this credentials does not exists");
        }
      } else if (loginUser && !users) {
        throw new Error("There is no user in database");
      }
    } catch (error) {
      setErrorText(error.message);
      console.log(error.message);
    }
  }, [loginUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoginUser({ email, password });
    console.log(loginUser);
  };
  return (
    <div className="register">
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="mx-auto text-center text-danger">{errorText}</div>
        <div className="mx-auto text-center text-success">{successText}</div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-auto mx-auto">
          <button type="submit" className="btn btn-primary my-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
