import { GoalType } from '@/pages/landing/types.ts';
import { Trash2 } from 'lucide-react';

interface GoalListProps {
  goals: GoalType[];
  onDelete: (id: string) => void;
}

const GoalList: React.FC<GoalListProps> = ({ goals, onDelete }) => {
  return (
    <ul className="flex flex-col gap-2">
      {goals.map((goal) => (
        <li key={goal.id} className="p-2 border rounded-sm flex justify-between items-center">
          <span>{goal.text}</span>
          <Trash2
            size={18}
            className="cursor-pointer hover:scale-110 transition"
            onClick={() => onDelete?.(goal.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
