import React, {
  FC,
  Fragment,
  useState,
  useContext,
  FormEvent,
  ChangeEvent,
} from 'react';
import { addTodoItem } from '../../actions/actions';
import { BUTTON_TYPE_CLASSES } from '../../constants/enums';
import { StateContext } from '../../contextProvider/ContextProvider';
import Button from '../Button/Button';
import Input from '../Input/Input';

import { FormContainer } from './styles';

const FormInput: FC = () => {
  const { dispatch } = useContext(StateContext);
  const [inputField, setInputField] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputField === '') return;

    dispatch(
      addTodoItem({
        id: new Date().getTime().toString(),
        note: inputField,
        active: true,
        completed: false,
      })
    );
    setInputField('');
  };

  const handleInputFieldOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputField(event.target.value.slice(0, 50));
  };
  return (
    <Fragment>
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Input
            type="text"
            onChange={handleInputFieldOnChange}
            value={inputField}
          />
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.add}>
            Add
          </Button>
        </FormContainer>
      </form>
    </Fragment>
  );
};

export default FormInput;
