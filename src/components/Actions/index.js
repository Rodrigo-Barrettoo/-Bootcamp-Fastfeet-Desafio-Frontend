import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Badge, ListActions, Div } from './styles';
import Modal from '../Modal';

export default function Actions({ none }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={24} />
      </Badge>

      <ListActions visible={visible}>
        <Div none={none}>
          <Modal />
        </Div>

        <Div>
          <Link to="/problems">
            <MdEdit size={18} color="#4D85EE" />
            <span>Editar</span>
          </Link>
        </Div>
        <Div>
          <MdDeleteForever size={18} color="#DE3B3B" />
          <span>Excluir</span>
        </Div>
      </ListActions>
    </Container>
  );
}
