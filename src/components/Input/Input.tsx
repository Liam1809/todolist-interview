import React, { FC, Fragment } from 'react';
import { InputProps } from '../../types/types';
import { InputContainer } from './styles';

const Input: FC<InputProps> = ({ placeholder, ...options }) => {
  return (
    <Fragment>
      <InputContainer placeholder={placeholder} required {...options} />
    </Fragment>
  );
};

export default Input;
