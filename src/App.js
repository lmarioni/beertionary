import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router'

import {GlobalStyle} from './styles/GlobalStyles'

import {Home} from './pages/Home'
import {Detail} from './pages/Detail'
import { NotFound } from './pages/NotFound'

import {NavBar} from './components/NavBar'

import {Context}  from './Context'

export const App = () => {
const {isAuth} = useContext(Context)
console.log('auth', isAuth)

  return(
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <NavBar />
    <Router>
          <NotFound default />
          <Home path='/' />
          <Detail path='/detail/:idCerveza' />
    </Router>

  </Suspense>
  )
}
