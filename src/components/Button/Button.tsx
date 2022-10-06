import React, { FC, Fragment } from 'react';
import { BUTTON_TYPE_CLASSES } from '../../constants/enums';
import { ButtonProps } from '../../types/types';
import { AddButton, RemoveButton, CompleteButton } from './styles';

const getButton = (buttonType = BUTTON_TYPE_CLASSES.add): typeof AddButton =>
  ({
    [BUTTON_TYPE_CLASSES.add]: AddButton,
    [BUTTON_TYPE_CLASSES.remove]: RemoveButton,
    [BUTTON_TYPE_CLASSES.complete]: CompleteButton,
  }[buttonType]);

const Button: FC<ButtonProps> = ({ buttonType, children, ...options }) => {
  const CustomButton = getButton(buttonType);

  return (
    <>
      <CustomButton {...options}>{children}</CustomButton>
    </>
  );
};

export default Button;
