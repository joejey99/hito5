import React, { useState } from 'react';

const LoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailAlert, setEmailAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');

    const validateForm = (e) => {
        e.preventDefault();
        let valid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
          setEmailAlert("Debes completar el campo de email");
          valid = false;
        } else if (!emailPattern.test(email)) {
          setEmailAlert("El formato del email no es correcto");
          valid = false;
        } else {
          setEmailAlert("");
        }

        if (password === "") {
          setPasswordAlert("Debes completar el campo de contraseña");
          valid = false;
        } else if (password.length < 6) {
          setPasswordAlert("La contraseña debe tener al menos 6 caracteres");
          valid = false;
        } else {
          setPasswordAlert("");
        }

        if (valid) {
          alert("Inicio de sesión exitoso");
          onLoginSuccess(email);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <form onSubmit={validateForm}>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                    {emailAlert && <p className="text-danger">{emailAlert}</p>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordAlert && <p className="text-danger">{passwordAlert}</p>}
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
