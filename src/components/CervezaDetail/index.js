import React, {useState, useEffect} from 'react'
import { Loading } from "../Loading";
import { DropdownList } from "../DropdownList";
import {Img, Li, TextTips} from './styles'
import { IoIosArrowForward } from "react-icons/io";

export const CervezaDetail = ({idCerveza = 0}) => {
  const [loading, setLoading] = useState(false);
  const [cerveza, setCerveza] = useState([]);
  const [maltas, setMaltas] = useState([]);
  const [lupulos, setLupulos] = useState([]);

  const acomodarMaltas = (cerv) => {
    if(cerv.ingredients){
      if(cerv.ingredients.malt){
        var rtaMaltas = []
        cerv.ingredients.malt.map(malta => {
          rtaMaltas.push({
            titulo: malta.name,
            subtitulo: malta.amount.value + ' ' + malta.amount.unit
          })
        })
        setMaltas(rtaMaltas)
      }
      
    }
  }

  const acomodarLupulos = (cerv) => {
    if(cerv.ingredients){
      if(cerv.ingredients.hops){
        var rtaLupulos = []
        cerv.ingredients.hops.map(lupulo => {
          rtaLupulos.push({
            titulo: lupulo.name + ' (' + lupulo.attribute + ')',
            subtitulo: lupulo.amount.value + ' ' + lupulo.amount.unit
          })
        })
        setLupulos(rtaLupulos)
      }
      
    }
  }

  useEffect(function() {
    setLoading(true);

    fetch(`https://api.punkapi.com/v2/beers/${idCerveza}`)
      .then(res => res.json())
      .then(response => {
        setLoading(false);
        setCerveza(response[0])

        acomodarMaltas(response[0])
        acomodarLupulos(response[0])
      });
  }, []);

  if (loading) {
    return <Loading /> ;
  }

  console.log('lupulos', lupulos)
  

  return (
    <div class="container">
      <div className="row">
        <div className="col-md-12 text-center">
        <h1>{cerveza.name}</h1>
        <h5>{cerveza.tagline}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
        <Img src={cerveza.image_url}  />
        </div>
        <div className="col-md-1">

        </div>
        <div className="col-md-8">
                <div className="row mt-4">
                  <div className="col-md-3 text-center">
                    <h1 style={{color: '#03d3ac'}}>IBU</h1>
                    <h4>{cerveza.ibu}</h4>
                    <p>(no) amargor</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <h1 style={{color: '#03d3ac'}}>ABV</h1>
                    <h4>{cerveza.abv}</h4>
                    <p>% alcohol</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <h1 style={{color: '#03d3ac'}}>EBC</h1>
                    <h4>{cerveza.ebc}</h4>
                    <p>color</p>
                  </div>
                  <div className="col-md-3 text-center">
                    <h1 style={{color: '#03d3ac'}}>SRM</h1>
                    <h4>{cerveza.srm}</h4>
                    <p>color</p>
                  </div>
                </div>
                {
                  cerveza.ingredients &&
                  <React.Fragment>
                    <div className="row">
                      <div className="col-md-12">
                          <h2 className="mt-5 text-center" style={{fontWeight: 300}}>Ingredientes</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {
                          cerveza.ingredients.malt && <DropdownList title='Maltas' list={maltas} />
                        }
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {
                          cerveza.ingredients.hops && <DropdownList title='Lúpulos' list={lupulos} />
                        }
                      </div>
                    </div>
                    
                  </React.Fragment>    
                }

                {
                  cerveza.food_pairing &&
                    <React.Fragment>
                      <div className="row">
                        <div className="col-md-12">
                        <h2 className="mt-5 text-center" style={{fontWeight: 300}}>Comidas Recomendadas</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <ul>
                              {
                                cerveza.food_pairing.map( food => (
                                  <Li> <IoIosArrowForward size='20' /> { food }</Li>
                                ))
                              }
                          </ul>
                        </div>
                      </div>
                    </React.Fragment>
                }
                {
                  cerveza.brewers_tips &&
                    <React.Fragment>
                      <div className="row">
                        <div className="col-md-12">
                        <h2 className="mt-5 text-center" style={{fontWeight: 300}}>Tips</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <TextTips>{cerveza.brewers_tips}</TextTips>
                        </div>
                      </div>
                    </React.Fragment>
                }
        </div>
      </div>
    </div>
  )
}
