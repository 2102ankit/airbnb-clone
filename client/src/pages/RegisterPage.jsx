// import Header from "../Header";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ReigsterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(ev) {
    ev.preventDefault();
    console.log("Registered");
    axios.post("/register",{
        name,
        email,
        password,
    });
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form onSubmit={registerUser} className=" max-w-md mx-auto">
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a Member?{" "}
            <Link to={"/login"} className="underline text-black">
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
