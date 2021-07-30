import styled, { css, keyframes } from 'styled-components';

interface ImageProps {
  loaded: boolean;
}

const appearFromBottom = keyframes`
 from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const Loader = styled.div`
  margin-top: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  width: 70%;
  margin: 40px auto;

  padding: 15px;

  border: 2px solid ${props => props.theme.secondary};

  animation: ${appearFromBottom} 0.7s;

  @media (min-width: 788px) and (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    border: none;
    padding: 10px;
    img {
      width: 60%;
    }
  }
`;

export const MovieImage = styled.img<ImageProps>`
  width: 30%;
  height: 75%;
  border-radius: 15px;

  ${props =>
    !props.loaded &&
    css`
      display: none;
    `}
`;

export const MovieInfo = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 1100px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 900px) {
    margin-top: 40px;
    padding: 20px;
    border: 2px solid ${props => props.theme.stroke};
  }
  @media (max-width: 550px) {
    padding: 10px;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 11px;
    }
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-top: 60px;

  @media (min-width: 1400px) and (max-width: 1600px) {
    flex-direction: column-reverse;
    align-items: flex-start;

    div + div {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1399px) {
    margin-top: 20px;
    flex-direction: column-reverse;
    align-items: flex-start;

    div + div {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 1100px) {
    div {
      h3 {
        font-size: 18px;
      }
      span,
      li {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 900px) {
    div {
      h3 {
        font-size: 14px;
      }
      span,
      li {
        font-size: 12px;
      }
    }
  }
`;

export const MovieRate = styled.div`
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${props => props.theme.stroke};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 18px;
    margin-left: 10px;
  }
`;

export const MovieGenre = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h3 {
    margin-right: 15px;
  }
`;

export const Genres = styled.ul`
  display: flex;
  justify-content: end;
  align-items: flex-end;

  li {
    padding: 5px 10px;
    text-align: center;
    margin-right: 10px;
    background: ${props => props.theme.cardBackground};
  }

  li:nth-child(2n-1) {
    background: ${props => props.theme.secondary};
  }
`;
