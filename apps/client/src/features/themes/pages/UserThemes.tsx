import { RATE_RECOMMENDATION, THEME_GENRE, ThemeType } from '@/features/themes/types/types.ts';
import ThemeList from '@/features/themes/components/ThemeList.tsx';

const DUMMY_THEMES: ThemeType[] = [
  {
    id: 'plc_001',
    bookingUrl:
      'https://xdungeon.net/layout/res/home.php?rev_days=2025-04-22&s_zizum=1&go=rev.main',
    imageUrl: 'https://xdungeon.net/file/theme/1/1_4586195611.png',
    title: '화생설화',
    genre: THEME_GENRE.Story,
    rate: RATE_RECOMMENDATION.StronglyRecommend,
    description:
      '조선식 테마 / 스토리 / 문제가 만났다. 진짜 설화 속에 들어온 것 같고 감성을 자극하는 인테리어가 매우 취향에 맞음.',
  },
  {
    id: 'plc_02',
    bookingUrl:
      'https://xdungeon.net/layout/res/home.php?rev_days=2025-04-22&s_zizum=1&go=rev.main',
    imageUrl:
      'https://naverbooking-phinf.pstatic.net/20240510_100/17153155641363UDo9_PNG/%C6%F7%BD%BA%C5%CD.png?type=f750_420_60_sharpen',
    title: '퀴즈카페',
    genre: THEME_GENRE.Problems,
    rate: RATE_RECOMMENDATION.LifeTheme,
    description:
      '모노룸 문제방의 정석. 비싸지만 돈이 하나도 아깝지 않은, 그야말로 방부르게 만드는 최고의 문제방 테마',
  },
];

const UserThemes = () => {
  return (
    <div>
      <ThemeList themes={DUMMY_THEMES} />
    </div>
  );
};

export default UserThemes;
