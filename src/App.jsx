/* eslint-disable no-unused-vars */
import { useState } from 'react'
import appFirebase from './credenciales'
import './App.css'
import {getAuth, onAuthStateChanged} from 'Firebase/auth'
const auth = getAuth(appFirebase)
import Login from './components/Login'
import Home from './components/Home'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirabase)=>{
    if(usuarioFirabase){
      setUsuario(usuarioFirabase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
      <div>
        {usuario ? (<Home correoUsuario = {usuario.email} />

         ) : (<Login />

         )}
        
      </div>
     
  )
}

export default App
