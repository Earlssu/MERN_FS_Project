import UserItem from '@/features/users/components/UserItem.tsx';
import { UserType } from '@/features/users/types/types.ts';

interface UsersListProps {
  users: UserType[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className={'flex flex-col gap-8'}>
      {users.length == 0 ? (
        <div>
          <h3 className={'text-xl mb-2 '}>No Users Found.</h3>
        </div>
      ) : (
        <div>
          <h2 className={'text-2xl font-bold mt-4 mx-4'}>UsersList</h2>
          {users.map((user) => {
            return <UserItem key={user.id} name={user.name} />;
          })}
        </div>
      )}
    </div>
  );
};

export default UsersList;
