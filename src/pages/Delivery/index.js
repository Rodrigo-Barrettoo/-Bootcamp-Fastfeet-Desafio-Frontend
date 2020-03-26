import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import { MdAdd, MdFiberManualRecord } from 'react-icons/md';

import { Container, Content, OpSelect, Table, Status } from './styles';
import Actions from '../../components/Actions';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const MyComponent = () => <Select options={options} />;

// Encomenda
export default function Delivery() {
  return (
    <Container>
      <h1>Gerenciamento de Encomendas</h1>
      <Content>
        <OpSelect>
          <MyComponent />
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
          <tr>
            <td>#01</td>
            <td>Rodrigo</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt=""
                />
                <span>Pedro Gomes</span>
              </div>
            </td>
            <td>São João</td>
            <td>São Paulo</td>
            <td>
              <Status status="cancelada">
                <div>
                  <MdFiberManualRecord size={15} />
                  Cancelada
                </div>
              </Status>
            </td>
            <td>
              <div className="action">
                <Actions />
              </div>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>João da Silva</td>
            <td>
              <div>
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt=""
                />
                <span>José Carlos</span>
              </div>
            </td>
            <td>São João</td>
            <td>São Paulo</td>
            <td>
              <Status status="retirada">
                <div>
                  <MdFiberManualRecord size={15} />
                  Retirada
                </div>
              </Status>
            </td>
            <td>
              <div className="action">
                <Actions />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
