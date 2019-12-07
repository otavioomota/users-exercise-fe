import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";

import api from "../../services/api";

export default function NewUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  function handleCleanFields() {
    setName("");
    setAge("");
    setGender("");
    setEmail("");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await api.post("/users", { name, age, gender, email });
    handleCleanFields();
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <input
          placeholder="Idade"
          value={age}
          onChange={e => setAge(e.target.value)}
          type="text"
        />
        <input
          placeholder="Sexo"
          value={gender}
          onChange={e => setGender(e.target.value)}
          type="text"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />

        <button type="submit">Enviar</button>
        <Link to="/">Voltar</Link>
      </Form>
    </Container>
  );
}
