import React from "react";
import { H5 } from "./styles";

import {Cerveza} from '../Cerveza'


export const ListadoCervezas = ({ cervezas = [] }) => {
  // console.log(cervezas);
  return (
    <React.Fragment>
      <div className="container">

        <div className="row">
              {
              cervezas.map(cerveza => (
                <Cerveza id={cerveza.id} nombre={cerveza.name} descripcion={cerveza.tagline} imgUrl={cerveza.image_url} txtBoton={`ir`} />
              ))
              }
        </div>
      </div>
    </React.Fragment>
  );
};
