import GoalList from '@/pages/landing/GoalList.tsx';

const LandingPage = () => {
  const CourseGoals = [
    { id: 'cg1', text: 'Finish The Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' },
  ];

  return (
    <div className={'m-4'}>
      <h2 className={'text-2xl font-bold mb-2 place-self-center'}>Course Goals</h2>
      <GoalList goals={CourseGoals} />
    </div>
  );
};

export default LandingPage;
