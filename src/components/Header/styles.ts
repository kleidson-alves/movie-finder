import styled from 'styled-components';

import bg from '../../assets/search-area-bg.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 200px;

  background: linear-gradient(rgba(0, 0, 40, 0.5), rgba(0, 0, 40, 0.6) 100%),
    url(${bg}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  width: 70%;

  img {
    width: 200px;
    height: 200px;
  }

  ul {
    display: flex;

    font-size: 24px;
    li {
      margin: 0 25px;
    }
  }

  ul a {
    text-align: center;
    color: ${props => props.theme.textColor};
    ::after {
      content: '';
      display: block;
      width: 80%;
      height: 5px;
      margin: 0 auto;
      margin-top: 2px;
    }
    :hover {
      ::after {
        background-color: ${props => props.theme.stroke};
      }
    }
  }
`;
