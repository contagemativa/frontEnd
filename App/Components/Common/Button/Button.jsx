import React from "react";

function onClick(){
  alert("Teste");
}

export default function App (){
  return (
    <>
      <button onClick={onClick}>Logar</button>
    </>
  )
}
