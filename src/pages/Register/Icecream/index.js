import React, {useState} from "react";
import {Container} from "./styles";
import api from "../../../services/api";

export default function RegisterIC({ history }) {
  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit(evento) {
    evento.preventDefault();

    try {
      const icecream = {
        flavor,
        price,
        amount
      };
      
      await api.post("/icecream", icecream);
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
            <h1>Novo Sorvete</h1>
          </div>
          <div className="flavor">
            <label htmlFor="flavor">Sabor:</label>
            <input id="flavor" type="text" required value={flavor}
              onChange={e => setFlavor(e.target.value)}/>
          </div>
          <div className="price">
            <label htmlFor="price">Preço:</label>
            <input id="price" type="" required value={price}
              onChange={e => setPrice(e.target.value)}/>
          </div>
          <div className="amount">
            <label htmlFor="amount">Quantidade:</label>
            <input id="amount" type="" required value={amount}
              onChange={e => setAmount(e.target.value)}/>
          </div>
          <button type="submit">Concluir cadastro</button>
        </form>
      </section>
    </Container>
  );
}
