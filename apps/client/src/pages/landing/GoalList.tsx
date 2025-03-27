interface GoalListProps {
  goals: { id: string; text: string }[];
}

const GoalList: React.FC<GoalListProps> = ({ goals }) => {
  return (
    <ul className={'flex flex-col gap-2'}>
      {goals.map((goal) => {
        return (
          <li key={goal.id} className={'p-2 border rounded-sm'}>
            {goal.text}
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;
