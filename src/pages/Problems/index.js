import React from 'react';

import { Container, Table } from './styles';
import Actions from '../../components/Actions';

export default function Problems() {
  return (
    <Container>
      <h1>Problemas na entrega</h1>

      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th className="acoes">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Houve um problema com a entrega destinatario nao encontrado</td>
            <td>
              <div className="action">
                <Actions />
              </div>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Houve um problema com a entrega destinatario nao encontrado</td>
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
