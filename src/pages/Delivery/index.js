/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  MdAdd,
  MdFiberManualRecord,
  MdSearch,
  MdDeleteForever,
  MdEdit,
} from 'react-icons/md';

import history from '../../services/history';
import api from '../../services/api';

import {
  Container,
  Content,
  OpSelect,
  Table,
  Inicial,
  Status,
  Div,
} from './styles';
import Actions from '../../components/Actions';
import Modal from '../../components/Modal';

const Iniciais = name => {
  const iniciais = name.split(' ').map(i => i.charAt(0));

  const inicial = iniciais[0] + iniciais[iniciais.length - 1];

  return inicial;
};

const Cor = () => {
  const c1 = String(Math.floor(Math.random() * 255));
  const c2 = String(Math.floor(Math.random() * 255));
  const c3 = String(Math.floor(Math.random() * 255));
  const cor = String(`${c1},${c2},${c3}`);
  return cor;
};

// Encomenda
export default function Delivery() {
  const [delivery, setDelivery] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get('delivery', {
        params: { filter },
      });

      setDelivery(response.data);
    }

    loadDelivery();
  }, [filter]);

  async function handleDelete(id) {
    const confirmDelete = confirm(
      'Deseja excluir permanentemente está encomenda'
    );

    if (confirmDelete) {
      try {
        await api.delete(`delivery/${id}`);

        setDelivery(delivery.filter(d => d.id !== id));

        toast.success('Encomenda excluida!');
      } catch (error) {
        toast.error('Não é possivel excluir a encomenda no momento');
      }
    }
  }

  function handleEdit(deliveryEdit) {
    history.push({
      pathname: `deliveries/edit/${deliveryEdit.id}`,
      state: { deliveryEdit },
    });
  }

  return (
    <Container>
      <h1>Gerenciamento de Encomendas</h1>
      <Content>
        <OpSelect>
          <MdSearch size={20} />
          <input
            onChange={e => setFilter(e.target.value)}
            type="text"
            placeholder="Buscar por encomendas"
          />
        </OpSelect>

        <Link to="/deliveries/register">
          <button type="submit">
            <MdAdd size={16} />
            Cadastrar
          </button>
        </Link>
      </Content>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th className="acoes">Ações</th>
          </tr>
        </thead>
        <tbody>
          {delivery.map(d => (
            <tr key={d.id}>
              <td>{d.id < 10 ? `#0${d.id}` : `#${d.id}`}</td>
              <td>{d.recipient.name}</td>
              <td>
                <div>
                  <Inicial className="iniciais" cor={Cor()}>
                    {Iniciais(d.deliveryman.name)}
                  </Inicial>
                  <span>{d.deliveryman.name}</span>
                </div>
              </td>
              <td>{d.recipient.city}</td>
              <td>{d.recipient.state}</td>
              <td>
                <Status
                  status={
                    d.canceled_at
                      ? 'cancelada'
                      : d.start_date && d.end_date
                      ? 'entregue'
                      : d.start_date && d.end_date === null
                      ? 'retirada'
                      : d.start_date === null && d.end_date === null
                      ? 'pendente'
                      : ''
                  }
                >
                  <div>
                    <span>
                      <MdFiberManualRecord size={14} />
                    </span>
                    <p>
                      {d.canceled_at
                        ? 'Cancelada'
                        : d.start_date && d.end_date
                        ? 'Entregue'
                        : d.start_date && d.end_date === null
                        ? 'Retirada'
                        : d.start_date === null && d.end_date === null
                        ? 'Pendente'
                        : ''}
                    </p>
                  </div>
                </Status>
              </td>
              <td>
                <div className="action">
                  <Actions>
                    <Div>
                      <Modal data={d} />
                    </Div>
                    <Div>
                      <button
                        className="edit"
                        type="button"
                        onClick={() => handleEdit(d)}
                      >
                        <MdEdit size={18} color="#4D85EE" />
                        <span>Editar</span>
                      </button>
                    </Div>
                    <Div>
                      <button type="button" onClick={() => handleDelete(d.id)}>
                        <MdDeleteForever size={18} color="#DE3B3B" />
                        <span>Excluir</span>
                      </button>
                    </Div>
                  </Actions>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
