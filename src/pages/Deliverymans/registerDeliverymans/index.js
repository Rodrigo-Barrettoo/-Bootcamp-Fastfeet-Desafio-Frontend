import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import { Container, Content } from './styles';
import FileInput from './AvatarInput';

export default function registerDeliverymans() {
  return (
    <Container>
      <div>
        <h1>Cadastro de entregadores</h1>

        <div>
          <Link to="/deliverymans">
            <button type="button">
              <MdChevronLeft size={18} />
              <span>Voltar</span>
            </button>
          </Link>
          <button type="button">
            <MdCheck size={18} />
            <span>Salvar</span>
          </button>
        </div>
      </div>

      <Content>
        <Form action="">
          <div>
            <FileInput />
          </div>

          <span>Nome</span>
          <Input name="name" placeholder="Nome completo" />

          <span>E-mail</span>
          <Input
            name="email"
            type="email"
            autocomplete="off"
            placeholder="e-mail@example.com"
          />
        </Form>
      </Content>
    </Container>
  );
}
