import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/module/auth/actions';

import logo from '../../assets/images/fastfeet-logo2x.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <div>
        <img src={logo} alt="GoBarber" />
      </div>

      <Form onSubmit={handleSubmit} schema={schema}>
        <p>Seu e-mail</p>
        <Input name="email" type="email" placeholder="exemplo@email.com" />

        <p>Sua Senha</p>
        <Input name="password" type="password" placeholder="**********" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
