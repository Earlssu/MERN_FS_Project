interface UserItemProps {
  name: string;
  imageUrl: string;
  placeCount: number;
}

const UserItem: React.FC<UserItemProps> = ({ name, imageUrl, placeCount }) => {
  return (
    <div className={'border-b-1 border-gray-300 p-4'}>
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className={'w-32 h-32 rounded-lg object-cover'}
      />
      <h3 className={'text-xl my-2 text-indigo-500 h-full'}>User {name}</h3>
      <div>Places: {placeCount}</div>
    </div>
  );
};

export default UserItem;
