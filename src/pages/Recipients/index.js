import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

import Actions from '../../components/Actions';
import { Container, Content, OpSelect, Table } from './styles';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const MyComponent = () => <Select options={options} />;

export default function Recipients() {
  return (
    <Container>
      <h1>Gerenciamento de Destinatários</h1>
      <Content>
        <OpSelect>
          <MyComponent />
        </OpSelect>

        <Link to="/recipients/register">
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
            <th>Nome</th>
            <th>Endereço</th>
            <th className="acoes">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Rodrigo Barreto</td>
            <td>Rua arlindo morandine, 188 - SP</td>
            <td>
              <div className="action">
                <Actions none />
              </div>
            </td>
          </tr>
          <tr>
            <td>#02</td>

            <td>João da Silva</td>
            <td>Rua João Pedro, 08 - SP</td>
            <td>
              <div className="action">
                <Actions none />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
