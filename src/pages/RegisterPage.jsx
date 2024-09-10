import React from "react";
import { useState } from "react";


const RegisterPage = ({ onRegisterSuccess }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nombreAlert, setNombreAlert] = useState('');
    const [emailAlert, setEmailAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');
    const [confirmPasswordAlert, setConfirmPasswordAlert] = useState('');

    const validateForm = (e) => {
        e.preventDefault();
        let valid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nombre === "") {
          setNombreAlert("Debes completar el campo de nombre");
          valid = false;
        } else if (nombre.length < 2) {
          setNombreAlert("El largo mínimo del nombre no se cumple");
          valid = false;
        } else {
          setNombreAlert("");
        }

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

        if (confirmPassword === "") {
          setConfirmPasswordAlert("Debes confirmar tu contraseña");
          valid = false;
        } else if (password !== confirmPassword) {
          setConfirmPasswordAlert("Las contraseñas deben ser iguales");
          valid = false;
        } else {
          setConfirmPasswordAlert("");
        }

        if (valid) {
          alert("Registro exitoso");
          onRegisterSuccess(nombre);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Registro</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={validateForm}>
                                <div className="mb-3">
                                    <label className="form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                    {nombreAlert && <div className="alert alert-danger mt-2">{nombreAlert}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailAlert && <div className="alert alert-danger mt-2">{emailAlert}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordAlert && <div className="alert alert-danger mt-2">{passwordAlert}</div>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirmar Contraseña:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {confirmPasswordAlert && <div className="alert alert-danger mt-2">{confirmPasswordAlert}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Registrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;