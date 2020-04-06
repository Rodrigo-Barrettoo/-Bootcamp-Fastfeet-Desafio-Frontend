import React, { useState } from 'react';
import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, ListActions, Options } from './styles';

export default function Actions({ children }) {
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
        <Options>{children}</Options>
      </ListActions>
    </Container>
  );
}
