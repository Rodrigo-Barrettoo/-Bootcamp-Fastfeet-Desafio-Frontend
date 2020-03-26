import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import { Container, Header, Content, OpSelect } from './styles';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const MyComponent = () => <Select options={options} />;

export default function registerDeliverymans() {
  return (
    <Container>
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
            <button type="button">
              <MdCheck size={18} />
              <p>Salvar</p>
            </button>
          </div>
        </div>
      </Header>

      <Content>
        <Form>
          <OpSelect>
            <p>Destinatário </p>
            <p>Entregador</p>
            <MyComponent />

            <MyComponent />
          </OpSelect>

          <p>Nome do produto</p>
          <Input name="product" type="text" placeholder="Produto" />
        </Form>
      </Content>
    </Container>
  );
}
