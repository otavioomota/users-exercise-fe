import React, { useState, useEffect } from "react";
import User from "../../components/User";
import { Container, Content, Title, ButtonAdd, List } from "./styles";

import api from "../../services/api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadingData() {
      const response = await api.get("/");

      setUsers(response.data);
    }

    loadingData();
  }, [users]);

  async function handleDeleteUser(id) {
    const response = await api.delete(`/users/${id}`);
  }
  return (
    <Container>
      <Content>
        <Title>Usuarios</Title>
        <ButtonAdd to="/newuser"> Criar usuario</ButtonAdd>
        <List>
          {users.map(user => (
            <User
              key={user.id}
              name={user.name}
              id={user.id}
              handleDelete={handleDeleteUser}
            />
          ))}
        </List>
      </Content>
    </Container>
  );
}
