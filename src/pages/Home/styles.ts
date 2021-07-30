import { shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const appearFromTop = keyframes`
 from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px;
  margin-top: 40px;

  border-radius: 20px;
  background-color: ${props => props.theme.secondary};

  width: 50%;

  animation: ${appearFromTop} 0.7s;

  @media (min-width: 801px) and (max-width: 1150px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  margin-top: 40px;

  input {
    flex: 1;
    padding: 0 20px;
    border: none;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

    color: ${props => props.theme.stroke};

    ::placeholder {
      color: ${props => props.theme.stroke};
      opacity: 0.5;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.textColor};

    svg {
      width: 30px;
      height: 30px;
      color: ${props => props.theme.stroke};
    }

    :hover {
      ${props => css`
        background-color: ${shade(0.3, props.theme.buttonColor)};
      `}
    }
  }

  @media (max-width: 500px) {
    button {
      display: none;
    }

    input {
      padding: 20px;
      border-radius: 20px;
    }
  }
`;

export const Loader = styled.div`
  margin-top: 40px;
`;

export const MovieSection = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  gap: 20px;

  @media (min-width: 788px) and (max-width: 1150px) {
    grid-template-columns: 250px 250px 250px;
    gap: 15px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 250px 250px;
    gap: 2px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 250px;
  }
`;
