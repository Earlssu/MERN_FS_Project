import React, { useReducer } from 'react';
import { InputAction, InputState } from '@/shared/types/inputs.ts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  element?: 'input' | 'textarea';
  rows?: number;
  errorText: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  element = 'input',
  rows,
  errorText = 'Please enter a valid value',
  ...rest
}) => {
  const inputReducer = (state: InputState, action: InputAction) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: true,
        };
      default:
        return state;
    }
  };

  const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: 'CHANGE', val: event.target.value });
  };

  return (
    <div className={`flex flex-col gap-2`}>
      <label htmlFor={id}>{label}</label>
      {element === 'input' ? (
        <input
          className={`border border-slate-400 max-w-1/2 p-2 ${!inputState.isValid ? 'border border-red-400' : ''}`}
          id={id}
          onChange={changeHandler}
          value={inputState.value}
          {...rest}
        />
      ) : (
        <textarea
          className={`border border-slate-400 max-w-1/2 p-2 ${!inputState.isValid ? 'border border-red-400' : ''}`}
          id={id}
          rows={rows || 3}
          onChange={changeHandler}
          value={inputState.value}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
      {!inputState.isValid && <p className={'text-red-400'}>{errorText}</p>}
    </div>
  );
};

export default Input;
