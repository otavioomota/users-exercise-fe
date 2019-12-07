import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  background: #97caef;

  width: 100%;
  height: 100%;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;

export const ButtonAdd = styled(Link)`
  margin: 30px 0;
  color: black;
  padding: 8px;
  border-radius: 8px;
  border: none;
  background: rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: white;
  }
`;

export const List = styled.ul``;
