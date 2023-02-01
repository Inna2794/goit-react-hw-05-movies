import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const GoBackBtn = styled(Link)`
  width: 50px;
  padding: 7px;
  display: flex;
  align-items: center;
  color: #333;
  border-radius: 7px;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #ff6c00;
    color: #fff;
  }
`;

export const FilmWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #ff6c00;
  padding-bottom: 15px;
`;

export const DescriptionWrap = styled.div`
  padding: 50px;
`;

export const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const PostTitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 36px;
`;

export const Text = styled.p`
  margin-bottom: 36px;
`;

export const InfoWrap = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid #ff6c00;
`;

export const JumpLink = styled(Link)`
  margin-bottom: 15px;
  color: #ff6c00;
  background-color: #fff;
  padding: 2px 9px;
  margin-left: 15px;
  border-radius: 5px;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #ff6c00;
    color: #fff;
  }
`;
