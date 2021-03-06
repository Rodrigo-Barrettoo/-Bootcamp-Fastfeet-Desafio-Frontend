import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import history from '../../../services/history';
import api from '../../../services/api';

import { Container, Header, Content, OpSelect } from './styles';

export default function RegisterDeliverymans() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  async function loadRecipientsOptions(query) {
    // Esse query é do input text
    const response = await api
      .get('recipients', { params: { filter: query } })
      .then(resp => {
        const options = resp.data.map(recipient => ({
          value: recipient.id,
          label: recipient.name,
        }));
        return options;
      })
      .catch(error => {
        toast.error('Erro ao carregar a lista de Destinatários!', error);
      });

    return response;
  }

  async function loadDeliverymanOptions(query) {
    // Esse query é do input text
    const response = await api
      .get('deliverymans', { params: { filter: query } })
      .then(resp => {
        const options = resp.data.map(deliveryman => ({
          value: deliveryman.id,
          label: deliveryman.name,
        }));
        return options;
      })
      .catch(error => {
        toast.error('Erro ao carregar a lista Entregadores!', error);
      });
    return response;
  }

  async function handleAddDelivery({ product }) {
    try {
      await api.post('/delivery', {
        recipient_id: recipients,
        deliveryman_id: deliverymans,
        product,
      });

      toast.success('Pedido cadastrado com sucesso!');

      history.push('/deliveries');
    } catch (error) {
      toast.error('Erro ao cadastrar pedido');
    }
  }

  function recipientSelected(selectedOption) {
    setRecipients(selectedOption.value);
  }

  function deliverymanSelected(selectedOption) {
    setDeliverymans(selectedOption.value);
  }
  return (
    <Container>
      <Form onSubmit={handleAddDelivery}>
        <Header>
          <div>
            <h1>Cadastro de encomendas</h1>
          </div>
          <div>
            <div>
              <Link to="/deliveries">
                <button type="button">
                  <MdChevronLeft size={18} />
                  <p>Voltar</p>
                </button>
              </Link>
              <button type="submit">
                <MdCheck size={18} />
                <p>Salvar</p>
              </button>
            </div>
          </div>
        </Header>

        <Content>
          <OpSelect>
            <p>Destinatário </p>
            <p>Entregador </p>

            <AsyncSelect
              noOptionsMessage={() => 'Nenhum destinatário encontrado'}
              loadOptions={loadRecipientsOptions}
              name="recipient_id" // Obrigatório por o name
              placeholder="Digite para buscar destinarario"
              onChange={recipientSelected}
              defaultOptions
              type="text"
            />

            <AsyncSelect
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={loadDeliverymanOptions}
              name="deliveryman_id" // Obrigatório por o name
              placeholder="Digite para buscar entregador"
              onChange={deliverymanSelected}
              defaultOptions
              type="text"
            />
          </OpSelect>

          <p>Nome do produto</p>
          <Input name="product" type="text" placeholder="Produto" />
        </Content>
      </Form>
    </Container>
  );
}
