import React, { useContext } from 'react'
import {Context} from '../Context'
import{FavsWithQuery} from '../container/getFavorites'
import { Layout } from '../components/Layout'


export default () => {
  const { email } = useContext(Context)
 
  return (
    <Layout title='Tus favoritos' subtitle='Aqui estan tus favoritos'>
      <h4>fav de: {email}</h4>
      <FavsWithQuery />
    </Layout>
  )
}
