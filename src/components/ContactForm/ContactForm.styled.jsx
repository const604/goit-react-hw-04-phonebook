import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  width: 300px;
  padding: 20px;
  border: 1px solid black;
`;

export const Input = styled.input`
  width: 140px;
  outline: none;
  margin-bottom: 10px;
  &:focus {
    border: 3px solid skyblue;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 2px;
  background-color: #fff;
`;
