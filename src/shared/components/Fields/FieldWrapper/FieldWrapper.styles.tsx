import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-areas:
    'label label'
    'input input'
    'error error';
  grid-template-rows: 50px 60px 50px;
  grid-template-columns: 1fr;
`;

export const Content = styled.div`
  grid-area: input;
`;

export const FieldWrapper = styled.div`
  display: block;
`;
