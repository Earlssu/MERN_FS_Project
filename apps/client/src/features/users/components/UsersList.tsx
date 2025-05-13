import UserItem from '@/features/users/components/UserItem.tsx';
import { UserType } from '@/features/users/types/users.ts';

interface UsersListProps {
  users: UserType[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className={'flex flex-col gap-8'}>
      {users.length == 0 ? (
        <div className={'p-8'}>
          <h2 className={'text-2xl mb-2 place-self-center'}>No Users Found</h2>
        </div>
      ) : (
        <div>
          <h2 className={'text-2xl font-bold mt-4 mx-4'}>UsersList</h2>
          {users.map((user) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      )}
    </div>
  );
};

export default UsersList;
