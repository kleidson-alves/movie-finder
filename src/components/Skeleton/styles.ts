import styled, { keyframes } from 'styled-components';

interface Props {
  width: string;
  height: string;
}

export const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`;

export const LoadingSkeleton = styled.div<Props>`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${props => props.width};
  height: ${props => props.height};
  animation: ${KeyFrameLoading} 500ms infinite alternate;
`;
