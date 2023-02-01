import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

export const Element = styled.li`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 45px) / 4);
`;

export const FilmLink = styled(Link)`
  padding-bottom: 10px;
  font-size: 19px;
  font-weight: 500;
  color: #000;
  background-color: #ff6c0055;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: color 300ms linear, box-shadow 300ms linear;
  &:hover {
    color: #ff6c00;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const FilmImage = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  margin-bottom: 10px;
`;
