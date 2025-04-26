import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  element?: 'input' | 'textarea';
  rows?: number;
}

const Input: React.FC<InputProps> = ({ id, label, element = 'input', rows, ...rest }) => {
  return (
    <div className={'flex flex-col gap-2'}>
      <label htmlFor={id}>{label}</label>
      {element === 'input' ? (
        <input className={'border border-slate-400 max-w-1/2 p-2'} id={id} {...rest} />
      ) : (
        <textarea
          className={'border border-slate-400 max-w-1/2 p-2'}
          id={id}
          rows={rows || 3}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
    </div>
  );
};

export default Input;
