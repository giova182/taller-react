/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import usuario from '../assets/usuario.jpg';
import registro from '../assets/registro.png';
import appFirebase from '../credenciales'
import { getAuth, createUserWhithEmailAndPassword, singInWithEmailAndPassword} from 'Firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent default form submission

        try{
        if (registrando) {
          await createUserWhithEmailAndPassword(auth, email, password);
          // Handle successful registration (e.g., redirect to another page)
        } else {
          await singInWithEmailAndPassword(auth, email, password);
          // Handle successful login (e.g., redirect to another page)
        }
      } catch (error) {
        console.error('Authentication error:', error);
        // Handle authentication errors (e.g., display an error message)
      }
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="padre">
              <div className="card card-body">
                <img src={usuario} alt="" className="estilo-profile" />
                <form onSubmit={handleLogin}>
                  <input
                    type="text"
                    placeholder="Ingresar Email"
                    className="cajatexto"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Ingresar Contraseña"
                    className="cajatexto"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="btnform">
                    {registrando ? "Registrate" : "Inicia Sesion"}
                  </button>
                </form>
                <h4 className="texto">
                  {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
                  <button
                    className="btnswich"
                    onClick={() => setRegistrando(!registrando)}
                  >
                    {registrando ? "Inicia sesion" : "Registrate"}
                  </button>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <img src={registro} alt="" className="tamaño-img" />
          </div>
        </div>
      </div>
    );
  };
  

export default Login
