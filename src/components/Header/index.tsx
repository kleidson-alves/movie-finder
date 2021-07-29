import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="MovieFinder" />
        </Link>
        <ul>
          <Link to="/">
            <li>Início</li>
          </Link>
          <Link to="/movies">
            <li>Filmes</li>
          </Link>
        </ul>
      </Content>
    </Container>
  );
};

export default Header;
