import React, {useState, useEffect} from "react"
import config from "../../../config";
import { recuperarUsuario } from "../../../Models/Class/usuarioClass";

export default function User({...props}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = recuperarUsuario(); // Recupera o usuário do localStorage
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  return (
    <div tabIndex="0" role="button" className={`${props.className}`}>
      <div className={`${props.textColor}`}><b>Funcionário</b></div>
      <div className="divider divider-horizontal"></div>
      <div className={`${props.textColor}`}><b>{user ? user.nome : config.user}</b></div>
    </div>
  );
}






