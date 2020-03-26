import React, { useState } from 'react'
import { H2, Ul, Li, Dropeable } from './style'

export const DropdownList = ({title = '', list = [] }) => {

  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <React.Fragment>
        <Dropeable>
        <H2 className="text-center" onClick={handleClick} >{title}</H2>
        <Ul style={{display: visible ? 'block' : 'none' }} >
          {
            list.map((item, key) => (
            <Li key={key}>{item.titulo} 
            { item.subtitulo && 
                <React.Fragment>
                  <br /> 
                  <small>{item.subtitulo}</small> 
                </React.Fragment>
            }
             </Li>
            ))
          }
        </Ul>
        </Dropeable>
        
    </React.Fragment>
  )
}
