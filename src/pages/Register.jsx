import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState(""); //for async

  const navigate = useNavigate();

  //side effects
  useEffect(() => {
    try {
      console.log(newUser);
      const users = JSON.parse(localStorage.getItem("users"));
      if (newUser && !users) {
        localStorage.setItem("users", JSON.stringify([newUser]));
        setSuccessText("User created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (newUser && users) {
        const existUser = users.filter((user) => user.email === newUser.email);
        if (!existUser.length) {
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
          setSuccessText("User created successfully");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          throw new Error("User with this email already exists");
        }
      }
    } catch (error) {
      setErrorText(error.message);
      console.log(error.message);
    }
  }, [newUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      window.alert("passwords do not match");
      return;
    }
    setNewUser({
      name,
      email,
      password,
    });
  };
  return (
    <div className="register">
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="mx-auto text-center text-danger">{errorText}</div>
        <div className="mx-auto text-center text-success">{successText}</div>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Enter confirmed password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="col-auto mx-auto">
          <button type="submit" className="btn btn-secondary my-2">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
