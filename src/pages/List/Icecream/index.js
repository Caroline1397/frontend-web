import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { Container } from "./styles";

export default function ListIC() {
  const [icecreams, setIcecreams] = useState([]);

  useEffect(() => {
    async function allIcecreams() {
      const response = await api.get("/icecream");
      setIcecreams(response.data);
    }
    allIcecreams();
  }, [icecreams]);
  return (
    <Container>
      <h1>Lista de Sorvetes</h1>
      {icecreams &&
        icecreams.map(icecream => (
          <div className="list">
            <div className="flavor">Sabor:{icecream.flavor}</div>
            <div className="price">Preço:{icecream.price} </div>
            <div className="amount">Quantidade:{icecream.amount} </div>
          </div>
        ))}
    </Container>
  );
}