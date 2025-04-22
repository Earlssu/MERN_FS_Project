export type ThemeType = {
  id: string;
  imageUrl: string;
  bookingUrl: string;
  title: string;
  genre: THEME_GENRE;
  rate: RATE_RECOMMENDATION;
  description: string;
};

export enum THEME_GENRE {
  Problems = '문제방',
  Adventure = '모험',
  Fantasy = '판타지',
  Sneak = '잠입',
  Story = '스토리',
  Humor = '코믹',
  Thriller = '스릴러',
  Horror = '공포',
}

export enum RATE_RECOMMENDATION {
  LifeTheme = '인생테마',
  StronglyRecommend = '강력 추천',
  UniqueRecommend = '특이 테마 추천',
}
