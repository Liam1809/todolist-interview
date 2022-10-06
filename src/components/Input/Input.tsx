import React, { FC, Fragment } from 'react';
import { InputProps } from '../../types/types';
import { InputContainer } from './styles';

const Input: FC<InputProps> = ({ ...options }) => {
  return (
    <Fragment>
      <InputContainer required {...options} />
    </Fragment>
  );
};

export default Input;
