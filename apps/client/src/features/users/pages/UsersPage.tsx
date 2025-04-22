import UsersList from '@/features/users/components/UsersList.tsx';
import { UserType } from '@/features/users/types/types.ts'; // TODO: Delete when data is fetched

// TODO: Delete when data is fetched
const DUMMY_USERS: UserType[] = [
  {
    id: 'user_001',
    name: '레플리카',
    imageUrl: 'https://picsum.photos/id/42/300/300',
    placeCount: 311,
    lifeTheme: '화생설화',
    lifeThemeUrl:
      'https://xdungeon.net/layout/res/home.php?rev_days=2025-04-01&s_zizum=1&go=rev.main',
    lastUpdated: '2025-03-01',
  },
  {
    id: 'user_002',
    name: '푸딩',
    imageUrl: 'https://picsum.photos/id/71/300/300',
    placeCount: 278,
    lifeTheme: '테마팩토리',
    lifeThemeUrl: 'https://roomsa.co.kr/',
    lastUpdated: '2025-03-01',
  },
  {
    id: 'user_003',
    name: '박타스',
    imageUrl: 'https://picsum.photos/id/125/300/300',
    placeCount: 531,
    lifeTheme: '먹루마블',
    lifeThemeUrl: 'https://booking.naver.com/booking/12/bizes/999864',
    lastUpdated: '2025-03-27',
  },
  {
    id: 'user_004',
    name: '여울',
    imageUrl: 'https://picsum.photos/id/221/300/300',
    placeCount: 457,
    lifeTheme: '바야흐로, 여름이었다',
    lifeThemeUrl: 'https://booking.naver.com/booking/12/bizes/843881',
    lastUpdated: '2025-03-22',
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
