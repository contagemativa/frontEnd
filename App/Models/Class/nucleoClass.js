import React, { createContext, useState } from 'react';

export const NucleoContext = createContext();

export const NucleoProvider = ({ children }) => {
const [nucleo, setNucleo] = useState({
    id: 0,
    nome: '',
    endereco: {
        id: 0,
        cep: '',
        rua: '',
        numero: 0,
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: ''
    },
    regional: 0
    });  

  return (
    <NucleoContext.Provider value={{ nucleo, setNucleo }}>
      {children}
    </NucleoContext.Provider>
  );
};
