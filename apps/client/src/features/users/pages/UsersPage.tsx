import UsersList from '@/features/users/components/UsersList.tsx';
import { DUMMY_USERS } from '../../../../../shared/const/dummyUsers.ts';

const UsersPage = () => {
  return (
    <div>
      <UsersList users={DUMMY_USERS} />
    </div>
  );
};

export default UsersPage;
