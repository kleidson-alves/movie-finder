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

  padding: 20px;

  border: 2px solid ${props => props.theme.secondary};

  animation: ${appearFromBottom} 0.7s;
`;

export const MovieImage = styled.img<ImageProps>`
  width: 400px;
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

  h2 {
    font-size: 36px;
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-top: 60px;
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
    margin-left: 15px;
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
