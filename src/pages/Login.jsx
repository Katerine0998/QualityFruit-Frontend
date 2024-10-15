import React, { useState, useEffect, useRef } from "react";
import "../styles/loginStyle.css";
import { useNavigate } from "react-router-dom";
// USO DE LA LIBRERIA DE TOASFY https://fkhadra.github.io/react-toastify/introduction
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../services/loginServices";

const Login = () => {
  const passwordRef = useRef(null);
  const userRef = useRef(null);
  const btnSubmitRef = useRef(null);

  const [inputUsuario, setinputUsuario] = useState("");
  const [inputPassword, setinputPassword] = useState("");

  const navigate = useNavigate();

  const handleUserKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      passwordRef.current.focus();
    }
  };

  const handlePasswordKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      btnSubmitRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputUsuario === "") {
      userRef.current.focus();
      toast.warn("El usuario no puede ser vacio", {
        theme: "colored",
        pauseOnHover: false,
        autoClose: 5000,
        ideProgressBar: false,
        loseOnClick: true,
        auseOnHover: true,
        raggable: true,
        rogress: undefined,
      });
      return;
    }
    if (inputPassword == "") {
      passwordRef.current.focus();
      toast.warn("La contraseña no puede ser vacia", {
        theme: "colored",
        pauseOnHover: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const respLogin = await login(inputUsuario, inputPassword);
    console.log(respLogin)
    if(!respLogin.login){
      toast.error(respLogin.msj, {
            theme: "colored",
            pauseOnHover: false,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      return false
    }
    navigate("/dashboard");

  };

  return (
    <div className="contenedorLogin col-12">
      <ToastContainer />

      <div id="contendorLogin">
        {/* TODO:: COLOCAR LOGO */}
        <form onSubmit={handleSubmit}>
          <div className="col-1">
            <label className="form-label">Usuario</label>
          </div>
          <div className="col-12">
            <input
              ref={userRef}
              className="form-control inputLogin"
              id="usuario"
              name="usuario"
              placeholder="Ingresa Usuario"
              autoFocus
              onKeyDown={handleUserKeyDown}
              value={inputUsuario}
              onChange={(e) => setinputUsuario(e.target.value.toUpperCase())}
            />
          </div>

          <div className="col-1">
            <label className="form-label">Contraseña</label>
          </div>
          <div className="col-12">
            <input
              ref={passwordRef}
              className="form-control inputLogin"
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese contraseña"
              onKeyDown={handlePasswordKeyDown}
              value={inputPassword}
              onChange={(e) => setinputPassword(e.target.value)}
              // required
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-success w-100"
            id="btnSend"
            ref={btnSubmitRef}
          >
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
