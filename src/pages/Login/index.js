import React, { useState } from "react";
import api from "../../services/api";
import {Container} from "./styles";
import {login} from "../../services/auth";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(evento) {
    evento.preventDefault();

    try {
      const user = {
        email,
        password
      };
      const response = await api.post("/session", user);
      const { token, user: userData } = response.data;
      if (token) {
        login(token, userData);
      }

      history.push("/home");
    } catch (error) {
      alert("Inválido");
    }
  }
  return (
    <Container>
      <section>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <h1>Login</h1>
        </div>
        <div className="email">Email:
          <input type="email"required value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="senha">Senha:
          <input type="password" required value={password}
            onChange={e => setPassword(e.target.value)}/>
        </div>
        <div type="button">
          <button type="submit">Entrar</button>
        </div>
      </form>
      </section>
    </Container>
  );
}
