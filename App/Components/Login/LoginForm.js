import React from "react";
import Logo from "../Logo/Logo";

export default function LoginForm() {
  return (
    <div>
      <Logo />
      <div className="card shrink-0 w-full max-w-sm shadow-xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Login</span>
            </label>
            <input
              type="Login"
              placeholder="login"
              className="input input-bordered"
              id="usuario"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Senha</span>
            </label>
            <input
              type="password"
              placeholder="senha"
              className="input input-bordered"
              id="senha"
              required
            />
            <label className="label">
              <a href="" className="label-text-alt link link-hover">
                Esqueceu sua senha?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="button" id="btnLogin" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
