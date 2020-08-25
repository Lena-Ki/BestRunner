import styled from '@emotion/styled'
import { Input } from 'reactstrap'

export const StyledInput = styled(Input)`
  height: 50px;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  &:focus {
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
  }
  &::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
  }
  &::-webkit-inner-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
  }
`