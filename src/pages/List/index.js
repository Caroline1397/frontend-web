import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";

export default function List() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function allUsers() {
      const response = await api.get("/user");
      setUsers(response.data);
    }
    allUsers();
  }, [users]);
  return (
    <Container>
      <h1>Lista de Usuários</h1>
      {users &&
        users.map(user => (
          <div className="list">
            <div className="name">Nome:{user.name}</div>
            <div className="email">Email:{user.email} </div>
          </div>
        ))}
    </Container>
  );
}