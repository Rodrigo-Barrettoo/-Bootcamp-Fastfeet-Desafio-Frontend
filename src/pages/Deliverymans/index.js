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

export default function Deliverymans() {
  return (
    <Container>
      <h1>Gerenciamento de Entregadores</h1>
      <Content>
        <OpSelect>
          <MyComponent />
        </OpSelect>

        <Link to="/deliverymans/register">
          <button type="button">
            <MdAdd size={16} />
            Cadastrar
          </button>
        </Link>
      </Content>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th className="acoes">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt=""
                />
              </div>
            </td>
            <td>Rodrigo Barreto</td>
            <td>rodrigo@gmail.com</td>
            <td>
              <div className="action">
                <Actions none />
              </div>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt=""
                />
              </div>
            </td>
            <td>João da Silva</td>
            <td>joao@gmail.com</td>
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
