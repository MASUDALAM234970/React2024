import React, { useState } from "react";
import Style from "./form.module.css";

export default function FORM() {
  let [user, setUser] = useState({ name: "", email: "", password: "" });
  let { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("Form is submitted");
    e.preventDefault();
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);

    // Optional: Reset form after submission
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={Style.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={Style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={Style.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={Style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
