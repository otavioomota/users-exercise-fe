import React, { useEffect, useState } from "react";

import { Container, UserData, ButtonBack } from "./styles";

import api from "../../services/api";

export default function User({ location }) {
  const { id } = location.state;
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadingData() {
      const response = await api.get(`/details/${id}`);

      setUser(response.data);
    }

    loadingData();
  }, [user]);

  return (
    <Container>
      <UserData>
        <span>{`ID: ${user.id}`}</span>
        <span>{`Nome: ${user.name}`}</span>
        <span>{`Idade: ${user.age} anos`}</span>
        <span>{`Sexo: ${user.gender}`}</span>
        <span>{`Email: ${user.email}`}</span>

        <ButtonBack to="/">Voltar</ButtonBack>
      </UserData>
    </Container>
  );
}
