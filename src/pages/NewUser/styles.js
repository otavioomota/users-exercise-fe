import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(to bottom right, #97caef, #999999);
`;

export const Form = styled.form`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  width: 300px;
  padding-top: 100px;

  input {
    margin-bottom: 8px;

    padding: 4px;
    border-radius: 4px;
    border: 1px solid #999999;
  }

  button {
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #999999;
    margin-top: 10px;

    &:hover {
      background: purple;
      color: #fafafa;
    }
  }

  a {
    align-self: center;
    margin-top: 10px;
    color: red;

    &:hover {
      color: purple;
    }
  }
`;
