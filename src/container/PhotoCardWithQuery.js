import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { GET_SINGLE_PHOTO } from '../hoc/query'
import {Query} from 'react-apollo'

const renderProp =  ({loading, error, data = {photo: {}}}) => { 
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>
  const {photo = {}} = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{id}}>
    { renderProp }
  </Query>
)

