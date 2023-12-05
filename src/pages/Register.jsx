import { useEffect, useState } from "react";

export default function Register() {
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState(null);

  //side effects
  useEffect(() => {
    if (newUser) {
      console.log(newUser);
    }
  }, [newUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
    if (password !== confirmPassword) {
      window.alert("passwords do not match");
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
            onChage={(e) => setEmail(e.target.value)}
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
