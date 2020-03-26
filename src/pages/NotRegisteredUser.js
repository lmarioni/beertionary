import React, {useContext} from 'react'
import {Context} from '../Context'
import {UserForm} from '../components/UserForm'
import {RegisterMutation} from '../container/RegisterMutation'
import {LoginMutation} from '../container/LoginMutation'

export const NotRegisteredUser = () => {

  const {activateAuth} = useContext(Context)


          return(
            <React.Fragment>
              <RegisterMutation>
                {
                  (register, { data, loading, error}) => {
                    const onSubmit = ({email, password}) => {
                      const input = { email, password };
                      const variables = { input };
                      //aca hacer fetch
                      register({variables}).then(({data}) => {
                        const {signup} = data
                        activateAuth(signup);
                      })
                    }

                    const errorMsg = error && 'El usuario ya existe o hay algun error'

                    return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title={`Registrarse`}  />
                  }
                }
              </RegisterMutation>
              <LoginMutation>
                {
                  (login, {data, loading, error}) => {
                    const onSubmit = ({email, password}) => {
                      const input = { email, password };
                      const variables = { input };
                      //aca hacer fetch
                      login({variables}).then(({data}) =>{
                        const {login} = data;
                        activateAuth(login, email)
                      })
                    }
                
                    const errorMsg = error && 'Email o contraseña invalida'

                    return(
                      <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title={`Iniciar sesión`} />
                    )
                  }
                }
              </LoginMutation>
              
            </React.Fragment>
          )
}
