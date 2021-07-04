import React from "react";

const Login = () => (
  <section className="coffe-login">
    <div className="coffe-container">
      <button className="coffe-fb">
        <i className="fab fa-facebook-f"></i>
        Login with Facebook
      </button>
      <button className="coffe-tw">
        <i className="fab fa-twitter"></i>
        Login with Twitter
      </button>
      <form action="">
        <label htmlFor="email">
          <input autocomplete="email" type="text" placeholder="Your email" />
        </label>
        <label htmlFor="email">
          <input
            autocomplete="password"
            type="text"
            placeholder="Your password"
          />
        </label>
      </form>
    </div>
  </section>
);

export default Login;
