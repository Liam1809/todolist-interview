import styled from 'styled-components';

export const AddButton = styled.button`
  width: auto;
  font-size: 20px;
  background-color: blue;
  color: white;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const RemoveButton = styled(AddButton)`
  background-color: red;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const CompleteButton = styled(AddButton)`
  background-color: green;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
