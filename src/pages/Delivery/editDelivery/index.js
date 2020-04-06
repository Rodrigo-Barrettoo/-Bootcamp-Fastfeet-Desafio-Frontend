/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import history from '../../../services/history';
import api from '../../../services/api';

import { Container, Header, Content, OpSelect } from './styles';

export default function RegisterDeliverymans({ location }) {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([null]);
  const [deliveryEdit] = useState(location.state.deliveryEdit);

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

  async function handleEdit({ product }) {
    try {
      await api.put(`/delivery/${deliveryEdit.id}`, {
        recipient_id: recipients,
        deliveryman_id: deliverymans,
        product,
      });

      toast.success('Pedido editado com sucesso!');

      history.push('/deliveries');
    } catch (error) {
      toast.error(`Erro ao editar pedido. PREENCHA TODOS OS CAMPOS!`);
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
      <Form onSubmit={handleEdit}>
        <Header>
          <div>
            <h1>Edição de encomendas</h1>
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
              placeholder={
                deliveryEdit
                  ? deliveryEdit.recipient.name
                  : 'Digite para buscar destinarario'
              }
              onChange={recipientSelected}
              defaultOptions
              type="text"
            />

            <AsyncSelect
              noOptionsMessage={() => 'Nenhum entregador encontrado'}
              loadOptions={loadDeliverymanOptions}
              name="deliveryman_id" // Obrigatório por o name
              placeholder={
                deliveryEdit
                  ? deliveryEdit.deliveryman.name
                  : 'Digite para buscar entregador'
              }
              onChange={deliverymanSelected}
              defaultOptions
              type="text"
            />
          </OpSelect>

          <p>Nome do produto</p>
          <Input
            name="product"
            type="text"
            placeholder={
              deliveryEdit.product ? deliveryEdit.product : 'Produto'
            }
          />
        </Content>
      </Form>
    </Container>
  );
}
