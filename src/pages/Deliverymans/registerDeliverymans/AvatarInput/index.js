import React from 'react';

import { Container } from './styles';
import default_img from '../../../../assets/images/default-img.png';

export default function AvatarInput() {
  return (
    <Container>
      <label htmlFor="avatar">
        <img src={'' || default_img} alt="" />
        <input type="file" id="avatar" accept="image/*" />
      </label>
    </Container>
  );
}
