import React, { useEffect, useState, Fragment } from "react";
import { Loading } from "../components/Loading";
import { ListadoCervezas } from "../components/ListadoCervezas";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [cervezas, setCervezas] = useState([]);

  useEffect(function() {
    setLoading(true);

    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=30")
      .then(res => res.json())
      .then(response => {
        setLoading(false);
        setCervezas(response);
      });
  }, []);

  if (loading) {
    return <Loading /> ;
  }

  return (
    <React.Fragment>
      <div className="container">
        <div>
          <h1>Cantidad: {cervezas.count}</h1>
          {console.log(cervezas)}
          <ListadoCervezas cervezas={cervezas} />
        </div>
      </div>
    </React.Fragment>
  );
};
