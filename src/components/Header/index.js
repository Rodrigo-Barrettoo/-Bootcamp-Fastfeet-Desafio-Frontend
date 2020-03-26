import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '../../assets/images/logolayout.png';

export default function Header() {
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
            <strong>Rodrigo</strong>
            <Link to="/">Sair do sistema</Link>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
