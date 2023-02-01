import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 1200px;
  margin: 10px auto;
`;

export const Input = styled.input`
  font-size: 17px;
  padding: 10px 0 10px 15px;
  width: 250px;
  border-radius: 6px 0 0 6px;
  background-color: #ff6c0055;
  width: 250px;
  border: none;
  outline: none;
  margin-right: auto;
`;

export const SearchBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  background-color: #ff6c0055;
  color: #222;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #ff6c00;
    color: #fff;
  }
`;
