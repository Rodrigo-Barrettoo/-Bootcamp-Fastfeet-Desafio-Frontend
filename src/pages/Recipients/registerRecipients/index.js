import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import { Container, Header, Content } from './styles';

export default function registerDeliverymans() {
  return (
    <Container>
      <Header>
        <div>
          <h1>Cadastro de destinatários</h1>
        </div>
        <div>
          <div>
            <Link to="/recipients">
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
          <p>Nome </p>
          <Input name="name" type="text" placeholder="Nome" />

          <div className="row1">
            <p>Rua </p>
            <p>Numero </p>
            <p>Complemento </p>

            <Input name="name" type="text" placeholder="Rua" />
            <Input name="number" type="number" placeholder="0000" />
            <Input name="complement" type="text" />
          </div>

          <div className="row2">
            <p>Cidade </p>
            <p>Estado </p>
            <p>Cep </p>

            <Input name="city" type="text" placeholder="Cidade" />
            <Input name="state" type="text" placeholder="Estado" />
            <Input name="zipcode" type="zipcode" placeholder="00.000-000" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}
