import React, {useState} from "react";
import {Container} from "./styles";
import api from "../../services/api";

export default function Register({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("");

  async function handleSubmit(evento) {
    evento.preventDefault();

    try {
      const user = {
        name,
        email,
        password,
        isAdmin

      };
      await api.post("/user", user);
      history.push("/home");
    } catch (error) {
      alert("Cadastrado");
    }
  }
  return (
    <Container>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="cadastro">
            <h1>Novo Usuário</h1>
          </div>
          <div className="nome">
            <label htmlFor="name">Nome:</label>
            <input id="name" type="text" required value={name}
              onChange={e => setName(e.target.value)}/>
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" required value={email}
              onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="senha">
            <label htmlFor="password">Senha:</label>
            <input id="password" type="password" required value={password}
              onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="admin">
            <label htmlFor="isAdmin">Administrador:</label>
            <input id="isAdmin" type="text" required value={isAdmin}
              onChange={e => setIsAdmin(e.target.value)}/>
          </div>
          <button type="submit">Concluir cadastro</button>
        </form>
      </section>
    </Container>
  );
}
