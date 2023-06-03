import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  
  const controlenvio = (event) => {
    event.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setAlertType("danger");
      setAlertMessage("Por favor, ingrese su correo electrónico y contraseña");
      setShowAlert(true);
      return;
    }

    setAlertType("success");
    setAlertMessage("Inicio de sesión exitoso!");
    setShowAlert(true);
  };

  return (
    <div>
      <form onSubmit={controlenvio}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={email.trim() === "" || password.trim() === ""}
        >
          Iniciar sesión
        </button>
      </form>
      {showAlert && (
        <div className={`alert alert-${alertType}`} role="alert">
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
