interface UserItemProps {
  id?: string;
  name: string;
  imageUrl: string;
  placeCount: number;
  lifeTheme: string;
  lifeThemeUrl: string;
  lastUpdated: string;
}

const UserItem: React.FC<{ user: UserItemProps }> = ({ user }) => {
  return (
    <div className={'flex gap-4 border-b-1 border-gray-300 p-4'}>
      <div>
        <img
          src={user.imageUrl}
          alt={`${user.name}'s profile`}
          className={'w-32 h-32 rounded-lg object-cover'}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <h3 className={'text-xl text-slate-800 h-full'}>{user.name}</h3>
        <div>방탈출 횟수: {user.placeCount}회</div>
        <div>
          인생테마:
          <a href={user.lifeThemeUrl} className={'text-indigo-500'} target="_blank">
            {' '}
            {user.lifeTheme}
          </a>
        </div>
        <div>마지막 방탈출: {user.lastUpdated}</div>
      </div>
    </div>
  );
};

export default UserItem;
