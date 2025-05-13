import React, { useEffect, useReducer } from 'react';
import { InputAction, InputState } from '@/shared/types/input.ts';
import { validate } from '@/shared/utils/validators.ts';
import { Validator } from '@/shared/types/validator.ts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  element?: 'input' | 'textarea';
  rows?: number;
  errorText: string;
  validators: Validator[];
  onInputChange: (id: string, value: string, isValid: boolean) => void;
  initialValue?: string;
  initialValidity?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  element = 'input',
  rows,
  errorText = 'Please enter a valid value',
  validators,
  onInputChange,
  initialValue,
  initialValidity,
  ...rest
}) => {
  const inputReducer = (state: InputState, action: InputAction) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val, action.validators),
        };
      case 'TOUCH':
        return {
          ...state,
          isTouched: true,
        };
      default:
        return state;
    }
  };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isValid: initialValidity || false,
    isTouched: false,
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: 'CHANGE', val: event.target.value, validators });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid, onInputChange]);

  return (
    <div className={`flex flex-col gap-2`}>
      <label htmlFor={id}>{label}</label>
      {element === 'input' ? (
        <input
          className={`max-w-1/2 p-2 border rounded-sm ${
            inputState.isTouched && !inputState.isValid ? 'border-red-400' : 'border-slate-400'
          }`}
          id={id}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
          {...rest}
        />
      ) : (
        <textarea
          className={`p-2 border rounded-sm ${
            inputState.isTouched && !inputState.isValid ? 'border-red-400' : 'border-slate-400'
          }`}
          id={id}
          rows={rows || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
      {!inputState.isValid && inputState.isTouched && <p className={'text-red-400'}>{errorText}</p>}
    </div>
  );
};

export default Input;
