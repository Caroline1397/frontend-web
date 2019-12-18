import React, {useState} from 'react';
import {Container} from './styles';
import {NavLink, Redirect} from 'react-router-dom';
import {logout} from '../../services/auth';

export default function Admin() {
  const [loged, setLoged] = useState(true);
  function handleLogout() {
    logout();
    setLoged(!loged);
  }
  return (
    <Container>
      {!loged && <Redirect to="/" />}
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/register">
        <span>Cadastro de Usuário</span>
      </NavLink>
      <NavLink to="/registeric">
        <span>Cadastro de Sorvete</span>
      </NavLink>
      <button type="button" onClick={handleLogout}>
        <span>Sair</span>
      </button>
    </Container>
  );
}
