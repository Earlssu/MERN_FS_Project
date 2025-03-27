import GoalList from '@/pages/landing/GoalList.tsx';
import NewGoal from '@/pages/landing/NewGoal.tsx';
import { useEffect, useState } from 'react';
import { GoalType } from '@/pages/landing/types.ts';

const LandingPage = () => {
  const [CourseGoals, setCourseGoals] = useState<GoalType[]>([]);

  useEffect(() => {
    setCourseGoals([
      { id: 'cg1', text: 'Finish The Course' },
      { id: 'cg2', text: 'Learn all about the Course Main Topic' },
      { id: 'cg3', text: 'Help other students in the Course Q&A' },
    ]);
  }, []);

  return (
    <div className={'m-4'}>
      <h2 className={'text-2xl font-bold mb-2 place-self-center'}>Course Goals</h2>
      <NewGoal setCourseGoals={setCourseGoals} />
      <GoalList goals={CourseGoals} />
    </div>
  );
};

export default LandingPage;
