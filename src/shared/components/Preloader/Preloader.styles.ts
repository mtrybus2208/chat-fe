import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
`;

export const Preloader = styled.div`
  position: absolute;
  height: fit-content;
  margin: auto;
  border: none;
  outline: none;
  border-radius: 0;
  padding: 20px;
  max-width: 540px;
  max-height: 400px;
  top: 0;
  left: 0;
  z-index: 100;
  right: 0;
  bottom: 0;
`;

export const Title = styled.h2`
  margin-top: 30px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
