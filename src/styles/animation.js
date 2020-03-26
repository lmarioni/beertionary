import styled, {css, keyframes} from 'styled-components'




const dropDownframes = keyframes`
 0% {
    transform: translateY(1rem);
    opacity: 0;
  }
  100% {
    transform:translateY(0rem);
    opacity: 1;
  }
  0% {
    transform: translateY(1rem);
    opacity: 0;
  }
`
export const dropDown = () => 
css`animation: ${dropDownframes} 0.3s;`
