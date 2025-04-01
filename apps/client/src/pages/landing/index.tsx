import GoalList from '@/pages/landing/GoalList.tsx';
import NewGoal from '@/pages/landing/NewGoal.tsx';
import { useEffect, useState } from 'react';
import { GoalType } from '@/pages/landing/types.ts';

const LandingPage = () => {
  const [courseGoals, setCourseGoals] = useState<GoalType[]>([]);

  useEffect(() => {
    setCourseGoals([
      { id: 'cg1', text: 'Finish The Course' },
      { id: 'cg2', text: 'Learn all about the Course Main Topic' },
      { id: 'cg3', text: 'Help other students in the Course Q&A' },
    ]);
  }, []);

  const handleAddNewGoal = (newGoal: GoalType) => {
    setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: string) => {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <div className={'m-4'}>
      <h2 className={'text-2xl font-bold mb-2 place-self-center'}>Course Goals</h2>
      <NewGoal onAdd={handleAddNewGoal} />
      <GoalList goals={courseGoals} onDelete={handleDeleteGoal} />
    </div>
  );
};

export default LandingPage;
