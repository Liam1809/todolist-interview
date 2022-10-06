import styled from 'styled-components';

export const ViewListContainer = styled.div`
  width: 100%;
`;

type NoteContainerProps = {
  completed: boolean;
};

export const BoxContainer = styled.div`
  max-width: 600px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
`;

export const NoteContainer = styled.div<NoteContainerProps>`
  display: block;
  padding-left: 20px;
  ${({ completed }) =>
    completed &&
    `
  text-decoration: line-through;
  `}
`;
