import * as React from 'react';
import { useState } from 'react';
import { GoalType } from '@/pages/landing/types.ts';

interface NewGoalProps {
  setCourseGoals: React.Dispatch<React.SetStateAction<GoalType[]>>;
}

const NewGoal: React.FC<NewGoalProps> = ({ setCourseGoals }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = enteredGoalText.trim();
    if (!trimmed) return; // 빈값 방지

    const newGoal: GoalType = {
      id: crypto.randomUUID(), // 고유 ID 생성
      text: trimmed,
    };

    setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
    setEnteredGoalText(''); // input 초기화
  };

  return (
    <form className={'my-2 flex gap-4'} onSubmit={handleSubmit}>
      <input
        className={'border border-black pl-2 rounded-sm flex-4'}
        type={'text'}
        value={enteredGoalText}
        onChange={(e) => setEnteredGoalText(e.target.value)}
      />
      <button type={'submit'} className={'border p-2 rounded-sm flex-1 hover:cursor-pointer'}>
        Add Goal
      </button>
    </form>
  );
};

export default NewGoal;
