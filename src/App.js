import Login from "./components/login";
import Alert from "./components/alert";
import React, { useState } from 'react';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const controlLogin = (email, password) => {
    if (email === 'example@example.com' && password === 'password') {
      setLoggedIn(true);
      setAlertType('success');
      setAlertMessage('Sesión iniciada correctamente');
    } else {
      setLoggedIn(false);
      setAlertType('danger');
      setAlertMessage('Email o contraseña incorrectos');
    }
  };

  const controlAlerts = () => {
    setAlertType('');
    setAlertMessage('');
  };

  return (
    <div className="container mt-5">
      {loggedIn ? (
        <div>
          <h1>Bienvenido!</h1>
        </div>
      ) : (
        <Login controlLogin={controlLogin} />
      )}
      {alertType && alertMessage && (
        <Alert type={alertType} message={alertMessage} onDismiss={controlAlerts} />
      )}
    </div>
  );
};

export default App;

  