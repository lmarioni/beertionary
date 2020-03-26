import React from 'react';
import { Loadingstyle } from './styles';
import { TiBeer } from "react-icons/ti";

export const Loading = () =>  {
  return (
    <Loadingstyle className="text-center"> <TiBeer size='60' animation="spin" className='spin' /> Cargando... </Loadingstyle>
  )
}
