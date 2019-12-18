import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {Container} from './styles';
import api from '../../services/api';

export default function Sale({ history }) {
  const [sale, setSale] = useState();
  const [icecream, setIcecream] = useState("");
  const [amount, setAmount] = useState("");
  const [saleName, setSaleName] = useState("");

  useEffect(() => {
    const populateIcecreams = async () => {
      const allIcecreams = await api.get(`/icecream`);
      setIcecream(allIcecreams.data);
    };
    populateIcecreams();
  }, []);

  function handleInputChange(e) {
    const { id, value } = e.target;
    setSale({
      ...sale,
      [id]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/sale`, sale);
      console.log('sale', response);
    } catch (err) {
      toast.error('Não foi possível enviar as informações!');
    }
  }

  return (
    <Container>
    <section>
      <form onSubmit={handleSubmit}>
        <div className="compra">
          <h1>Compre os seus sorvetes</h1>
        </div>
        <div className="name">
          <label htmlFor="name">Nome da Compra:</label>
          <input id="name" className="name" type="text" required value={saleName}
            onChange={e => setSaleName(e.target.value)}/>
        </div>
        <div className="icecream">
          <label htmlFor="icecream">Sabor:</label>
          <input id="icecream" type="text" list="icecreams"
            onChange={handleInputChange} required/>
          <datalist id="icecreams">
            {icecream &&
              icecream.map(IcecreamData => (
                <option key={IcecreamData._id} value={IcecreamData.flavor}>
                </option>
              ))}
          </datalist>
          </div>
          <div className="amount">
          <label htmlFor="amount">Quantidade:</label>
          <input id="amount" type="Number" required value={amount}
            onChange={e => setAmount(Number(e.target.value))}/>
        </div>
        <div type="button">
          <button type="submit">Comprar</button>
        </div>
      </form>
      </section>
    </Container>
  );
}
