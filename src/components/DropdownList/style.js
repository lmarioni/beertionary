import styled from 'styled-components'
import { dropDown} from '../../styles/animation'

export const Dropeable = styled.div`
  padding: 5px;
  border: 1px solid #03d3ac;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const H2 = styled.h2`
    cursor: pointer;
    background: #5f636733;
    border-radius: 5px;
    margin: -5px;
    padding: 8px;
    font-weight: 200;
  &:hover{
    background: #797b7d33;
  }
`;

export const Ul = styled.ul`
  ${dropDown()};
  padding: 0px;

`
export const Li = styled.li`
  list-style: none;
  padding: 5px 10px 5px 10px;
  border-bottom: 1px solid #dcdcdc2b;
  &:last-child{
    border-bottom: none;
  }
  & small{
    font-style: italic;
  }
`
