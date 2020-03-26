import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
    /* width: 30% */
  }
`;

export const DivNumeros = styled.div`
       border: 1px solid #03d3ac;
    border-radius: 5px;
    padding: 5px;
`

export const Li = styled.li`
    list-style: none;
    font-size: 1.2rem;
    font-weight: 200;
    margin-bottom: 7px;
`
export const TextTips = styled.p`
    font-size: 1.2rem;
    font-weight: 200;
`
