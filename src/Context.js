import React, {createContext, useState} from 'react';

export const Context = createContext();

const Provider = ({children}) => {
  const [isAuth, setIsAuth] = useState(() => {
    if(window.sessionStorage.getItem('token')){
      return true
    }else{
      return false
    }
  });

  const [email, setEmail] = useState('')

  
  const value = {
      isAuth,
      email,
      activateAuth: (token, email = '') => {
        setIsAuth(true)
        window.sessionStorage.setItem('token',token)
        setEmail(email)
      },
      removeAuth: () =>{
        setIsAuth(false)
        window.sessionStorage.removeItem('token')
      }
  }

  return(
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
};
