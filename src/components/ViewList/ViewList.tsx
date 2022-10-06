import React, { FC, Fragment, useContext, useEffect } from 'react';
import {
  completeTodoItem,
  getTodoItems,
  deleteTodoItem,
} from '../../actions/actions';
import { BUTTON_TYPE_CLASSES } from '../../constants/enums';
import { StateContext } from '../../contextProvider/ContextProvider';
import { TodoItem } from '../../types/types';
import Button from '../Button/Button';
import { ViewListContainer, BoxContainer, NoteContainer } from './styles';

const ViewList: FC = () => {
  // retrieve root data
  const {
    state: { todos },
    dispatch,
  } = useContext(StateContext);

  useEffect(() => {
    dispatch(getTodoItems());
    // eslint-disable-next-line
  }, []);

  // handle remote a note from the list
  const handleRemoveNote = (id: string) => {
    dispatch(deleteTodoItem(id));
  };

  // handle update complete of a note from the list
  const handleCompleteNote = (note: TodoItem) => {
    dispatch(completeTodoItem(note));
  };

  // generatte todosArr
  const todosArr = todos.map(item => (
    <BoxContainer key={item.id}>
      <NoteContainer completed={item.completed}>{item.note}</NoteContainer>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.remove}
        onClick={() => handleRemoveNote(item.id)}
      >
        Remove
      </Button>
      {!item.completed && (
        <Button
          type="button"
          buttonType={BUTTON_TYPE_CLASSES.complete}
          onClick={() => handleCompleteNote({ ...item, completed: true })}
        >
          Complete
        </Button>
      )}
    </BoxContainer>
  ));
  return (
    <Fragment>
      <ViewListContainer>{todosArr}</ViewListContainer>
    </Fragment>
  );
};

export default ViewList;
