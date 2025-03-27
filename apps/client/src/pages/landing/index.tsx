import GoalList from '@/pages/landing/GoalList.tsx';

const LandingPage = () => {
  return (
    <div className={'m-4'}>
      <h2 className={'text-2xl font-bold mb-2 place-self-center'}>Course Goals</h2>
      <GoalList />
    </div>
  );
};

export default LandingPage;
