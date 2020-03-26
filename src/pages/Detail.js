import React from 'react'
import { CervezaDetail } from '../components/CervezaDetail'
import { Layout } from '../components/Layout'

export const Detail = ({ idCerveza = 0 }) => {
  return (
    <Layout title={`Detalle`}>
      <CervezaDetail idCerveza={idCerveza} />
    </Layout>
  )
}
