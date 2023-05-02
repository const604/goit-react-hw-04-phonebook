import styled from 'styled-components';

export const Item = styled.li`
  width: 300px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  line-height: 1.5;
`;

export const Button = styled.button`
  margin-bottom: 5px;
  padding: 2px 15px;
  border: 1px solid grey;
  border-radius: 2px;
  font-size: 11px;
  background-color: #fff;
  &:active {
    background-color: #2f6fed;
    color: white;
  }
`;
