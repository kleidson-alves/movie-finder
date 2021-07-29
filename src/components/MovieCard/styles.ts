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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  height: 380px;
  font-size: 14px;

  cursor: pointer;

  :hover {
    div {
      background-color: ${props => props.theme.stroke};
    }
  }

  animation: ${appearFromBottom} 0.7s;
`;

export const MovieImage = styled.img<ImageProps>`
  width: 100%;
  height: 75%;
  border-radius: 15px 15px 0 0;

  ${props =>
    !props.loaded &&
    css`
      display: none;
    `}
`;

export const MovieInfo = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 0 0 15px 15px;
  padding: 10px;
`;
