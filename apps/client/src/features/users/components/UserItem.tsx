interface UserItemProps {
  name: string;
}

const UserItem: React.FC<UserItemProps> = ({ name }) => {
  return (
    <div className={'border-b-1 border-gray-300 p-4'}>
      <h3 className={'text-xl mb-2 text-indigo-500'}>User {name}</h3>
      <div>This is User Item.</div>
    </div>
  );
};

export default UserItem;
