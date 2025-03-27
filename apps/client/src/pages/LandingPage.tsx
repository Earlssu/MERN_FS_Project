const LandingPage = () => {
  return (
    <div className={'m-4'}>
      <h2 className={'text-2xl font-bold mb-2'}>Course Goals</h2>
      <ul className={'flex flex-col gap-2'}>
        <li className={'p-2 border rounded-sm'}>Finish the Course</li>
        <li className={'p-2 border rounded-sm'}>Learn all about the Course Main Topic</li>
        <li className={'p-2 border rounded-sm'}>Help other students in the Course Q&A</li>
      </ul>
    </div>
  );
};

export default LandingPage;
