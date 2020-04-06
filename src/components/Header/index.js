import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../store/module/auth/actions';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/images/logolayout.png';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function hamdleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />

          <NavLink to="/deliveries" activeStyle={{ color: '#444' }}>
            <span>ENCOMENDAS</span>
          </NavLink>

          <NavLink to="/deliverymans" activeStyle={{ color: '#444' }}>
            <span>ENTREGADORES</span>
          </NavLink>

          <NavLink to="/recipients" activeStyle={{ color: '#444' }}>
            <span>DESTINATÁRIOS</span>
          </NavLink>

          <NavLink to="/problems" activeStyle={{ color: '#444' }}>
            <span>PROBLEMAS</span>
          </NavLink>
        </nav>

        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <button type="button" onClick={hamdleSignOut}>
              Sair do sistema
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
