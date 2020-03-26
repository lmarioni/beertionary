import React from "react";
import { P, H5 } from "./styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from '@reach/router'

export const Cerveza = ({id = '', nombre = '', descripcion = '', imgUrl = '', txtBoton = ''}) => {

  return (
    <div className="col-md-4" style={{ marginTop: 10 }}>
      <div className="card" style={{ height: "100%" }}>
        
      <LazyLoadImage
      className="card-img-top card-img-listado"
      src={imgUrl}
       />
       
        <div className="card-body">
          <H5 className="card-title">{nombre}</H5>
          <P className="card-text">{descripcion}</P>
          <Link to={`/detail/${id}`} type="button" className="btn btn-outline-success btn-block">
          {txtBoton}
          </Link>
        </div>
      </div>
    </div>
  );
};
