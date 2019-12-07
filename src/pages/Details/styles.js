import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  background: #97caef;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;

export const UserData = styled.div`
  background: #fefefe;
  width: 300px;
  height: auto;
  margin: 0 auto;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;

  padding: 30px;

  span {
    margin-bottom: 8px;
  }
`;

export const ButtonBack = styled(Link)`
  color: red;
  margin-top: 30px;

  &:hover {
    color: purple;
  }
`;
