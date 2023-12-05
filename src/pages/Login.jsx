import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    if (loginUser) console.log(loginUser);
  }, [loginUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoginUser({ email, password });
    console.log(loginUser);
  };
  return (
    <div className="register">
      <form className="row g-3" onSubmit={submitHandler}>
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
