import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  width: 160px;
  margin-top: 10px;
  outline: none;
  &:focus {
    border: 3px solid skyblue;
  }
`;
