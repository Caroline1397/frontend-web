import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import { logout } from "../../services/auth";

export default function Home() {
  function handleLogout() {
    logout();
}
  return (
    <Container>
      <NavLink to="/register">
        <span>Cadastro de Usuario</span>
      </NavLink>
      <NavLink to="/registeric">
        <span>Cadastro de Sorvete</span>
      </NavLink>
      <NavLink to="/list">
        <span>Lista de Usuários</span>
      </NavLink>
      <NavLink to="/listic">
        <span>Lista de Sorvetes</span>
      </NavLink>
      <NavLink to="/sale">
        <span>Venda</span>
      </NavLink>
      <NavLink to="/" onClick={handleLogout}>
        <span>Voltar</span>
      </NavLink>
    </Container>
  );
}