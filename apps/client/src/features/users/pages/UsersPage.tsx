import UsersList from '@/features/users/components/UsersList.tsx';
import { UserType } from '@/features/users/types/types.ts'; // TODO: Delete when data is fetched

// TODO: Delete when data is fetched
const DUMMY_USERS: UserType[] = [
  {
    id: '001',
    name: 'Evan',
    imageUrl: 'https://picsum.photos/id/42/300/300',
    placeCount: 3,
  },
  {
    id: '002',
    name: 'Mark',
    imageUrl: 'https://picsum.photos/id/71/300/300',
    placeCount: 7,
  },
  {
    id: '003',
    name: 'John',
    imageUrl: 'https://picsum.photos/id/125/300/300',
    placeCount: 2,
  },
  {
    id: '004',
    name: 'Jane',
    imageUrl: 'https://picsum.photos/id/221/300/300',
    placeCount: 4,
  },
];

const UsersPage = () => {
  return (
    <div>
      <UsersList users={DUMMY_USERS} />
    </div>
  );
};

export default UsersPage;
