interface UserItemProps {
  id?: string;
  name: string;
  imageUrl: string;
  placeCount: number;
  lifeTheme: string;
  lifeThemeUrl: string;
  lastUpdated: string;
}

import { useNavigate } from 'react-router-dom';

const UserItem: React.FC<{ user: UserItemProps }> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-4 border-b border-gray-300 p-4 hover:bg-amber-50 cursor-pointer"
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <div>
        <img
          src={user.imageUrl}
          alt={`${user.name}'s profile`}
          className="w-32 h-32 rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl text-slate-800 h-full">{user.name}</h3>
        <div>방탈출 횟수: {user.placeCount}회</div>
        <div>
          인생테마:{' '}
          <a
            href={user.lifeThemeUrl}
            className="text-indigo-500"
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            {user.lifeTheme}
          </a>
        </div>
        <div>마지막 방탈출: {user.lastUpdated}</div>
      </div>
    </div>
  );
};

export default UserItem;
