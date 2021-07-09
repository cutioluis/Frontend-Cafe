import React from "react";
import '../assets/styles/Login.scss'

const Login = () => {
  return (
    <div className="container">
    <section className="container-login">
      <h2 className="login-title">Iniciar Sesion</h2>
      <div className="login">
        <form action="">
          <label className="login-label" htmlFor="correo">
            <p className="login-letter">Correo Electronico</p>
            <br />
            <input
              className="login-input"
              placeholder="Tu email"
              type="email"
              name="correo"
              id="correo"
              autoComplete="email"
              required
            />
          </label>
          <label htmlFor="password">
            <p className="login-letter">Contraseña</p>
            <input
              className="login-input"
              placeholder="Tu contraseña"
              type="password"
              name="password"
              id="password" 
              autoComplete="email"
              required
            />
            <br />
            <span className="login-letter-send">Olvidate tu contraseña</span>
            <br />
          </label>
          <label  htmlFor="">
            <div className="label2">
                  <button className="login-button">Iniciar Seasion</button>
            <button className="login-signin">Registrarse</button>
            </div>
          </label>
        </form>
      </div>
    </section>
  </div>
  )
}
  


export default Login;
