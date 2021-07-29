import Slider from 'react-slick';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;
export const MovieSection = styled.section`
  width: 70%;
  margin: 20px 0;

  h2 {
    font-weight: bold;
    ::after {
      content: '';
      display: block;
      width: 150px;
      height: 5px;
      margin-top: 10px;
      background-color: ${props => props.theme.stroke};
    }
  }

  border-bottom: 1px solid ${props => props.theme.secondary};
`;

export const Loader = styled.div`
  margin-top: 40px;
`;

export const Carousel = styled(Slider)`
  margin: 10px 0;
  padding: 15px 0;

  .slick-slide {
    margin: 0 10px;
  }
`;
