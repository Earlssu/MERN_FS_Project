import UsersList from '@/features/users/components/UsersList.tsx';
import { UserType } from '@/features/users/types/types.ts';

// TODO: Delete when data is fetched
const dummy_users: UserType[] = [
  {
    id: '001',
    name: 'Evan',
  },
  {
    id: '002',
    name: 'Mark',
  },
  {
    id: '003',
    name: 'John',
  },
  {
    id: '004',
    name: 'Jane',
  },
];

const UsersPage = () => {
  return (
    <div>
      <UsersList users={dummy_users} />
    </div>
  );
};

export default UsersPage;
