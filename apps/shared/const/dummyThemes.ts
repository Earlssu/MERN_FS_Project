// TODO: Remove this file after hooking the api with backend
import { RATE_RECOMMENDATION, THEME_GENRE, ThemeType, UpdateThemeType } from '../types/themes';
import { UserType } from '../types/users';

export let DUMMY_USERS: UserType[] = [
  {
    id: 'user_001',
    name: 'Min',
    email: 'mshim@gmail.com',
    password: '123456',
  },
  {
    name: 'DAHEE',
    id: 'user_002',
    email: 'vyoun@gmail.com',
    password: '123456',
  },
];

export let DUMMY_USERS_THEMES: { [userId: string]: ThemeType[] } = {
  user_001: [
    {
      id: 'thm_001',
      bookingUrl:
        'https://xdungeon.net/layout/res/home.php?rev_days=2025-04-22&s_zizum=1&go=rev.main',
      imageUrl: 'https://xdungeon.net/file/theme/1/1_4586195611.png',
      title: '화생설화',
      genre: THEME_GENRE.Story,
      rate: RATE_RECOMMENDATION.StronglyRecommend,
      description:
        '조선식 테마 / 스토리 / 문제가 만났다. 진짜 설화 속에 들어온 것 같고 감성을 자극하는 인테리어가 매우 취향에 맞음.',
      store_info: {
        name: '비트포비아 홍대던전',
        placeId: 'ChIJHS3Y3MKZfDURpQy84h6xiuY',
        coordinates: {
          lat: 37.549823,
          lng: 126.91724,
        },
      },
    },
    {
      id: 'thm_002',
      bookingUrl: 'https://booking.naver.com/booking/12/bizes/1105850',
      imageUrl:
        'https://naverbooking-phinf.pstatic.net/20240510_100/17153155641363UDo9_PNG/%C6%F7%BD%BA%C5%CD.png?type=f750_420_60_sharpen',
      title: '퀴즈카페',
      genre: THEME_GENRE.Problems,
      rate: RATE_RECOMMENDATION.LifeTheme,
      description:
        '모노룸 문제방의 정석. 비싸지만 돈이 하나도 아깝지 않은, 그야말로 방부르게 만드는 최고의 문제방 테마',
      store_info: {
        name: '찰리이스케이프',
        placeId: 'ChIJAeLnXAClfDUREWWcf4-VYxY',
        coordinates: {
          lat: 37.510603,
          lng: 127.084991,
        },
      },
    },
  ],
  user_002: [
    {
      id: 'thm_003',
      bookingUrl: 'https://roomsa.co.kr/',
      imageUrl:
        'https://playtheworld-opengame.s3.ap-northeast-2.amazonaws.com/reservation/roomsa/%E1%84%90%E1%85%A6%E1%84%86%E1%85%A1%E1%84%91%E1%85%A2%E1%86%A8%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5.jpg',
      title: '테마팩토리',
      genre: THEME_GENRE.Problems,
      rate: RATE_RECOMMENDATION.LifeTheme,
      description: '히든 문제 다 내꺼!!',
      store_info: {
        name: '룸즈에이 강남점',
        placeId: 'ChIJUcrwP1OhfDURsr2L3FgudAU',
        coordinates: {
          lat: 37.49631,
          lng: 127.030729,
        },
      },
    },
    {
      id: 'thm_004',
      bookingUrl: 'https://m.secretgardenescape.com/reservation.html?k_shopno=4',
      imageUrl: 'https://www.secretgardenescape.com/pimages/Product/Pr_1565771355.jpg',
      title: '슈퍼플레이어:PLAYER1',
      genre: THEME_GENRE.Adventure,
      rate: RATE_RECOMMENDATION.UniqueRecommend,
      description: '지금까지 이런 방탈출은 없었다.',
      store_info: {
        name: '비밀의 화원 혜화점',
        placeId: 'ChIJ6dYa0AKjfDURZDNoI1PVS20',
        coordinates: {
          lat: 37.583007,
          lng: 127.002116,
        },
      },
    },
  ],
};

export let DUMMY_THEMES: UpdateThemeType[] = [
  {
    id: 'thm_001',
    bookingUrl:
      'https://xdungeon.net/layout/res/home.php?rev_days=2025-04-22&s_zizum=1&go=rev.main',
    imageUrl: 'https://xdungeon.net/file/theme/1/1_4586195611.png',
    title: '화생설화',
    genre: THEME_GENRE.Story,
    rate: RATE_RECOMMENDATION.StronglyRecommend,
    description:
      '조선식 테마 / 스토리 / 문제가 만났다. 진짜 설화 속에 들어온 것 같고 감성을 자극하는 인테리어가 매우 취향에 맞음.',
    store_info: {
      name: '비트포비아 홍대던전',
      placeId: 'ChIJHS3Y3MKZfDURpQy84h6xiuY',
      coordinates: {
        lat: 37.549823,
        lng: 126.91724,
      },
    },
    creator: 'user_001',
  },
  {
    id: 'thm_002',
    bookingUrl: 'https://booking.naver.com/booking/12/bizes/1105850',
    imageUrl:
      'https://naverbooking-phinf.pstatic.net/20240510_100/17153155641363UDo9_PNG/%C6%F7%BD%BA%C5%CD.png?type=f750_420_60_sharpen',
    title: '퀴즈카페',
    genre: THEME_GENRE.Problems,
    rate: RATE_RECOMMENDATION.LifeTheme,
    description:
      '모노룸 문제방의 정석. 비싸지만 돈이 하나도 아깝지 않은, 그야말로 방부르게 만드는 최고의 문제방 테마',
    store_info: {
      name: '찰리이스케이프',
      placeId: 'ChIJAeLnXAClfDUREWWcf4-VYxY',
      coordinates: {
        lat: 37.510603,
        lng: 127.084991,
      },
    },
    creator: 'user_001',
  },
  {
    id: 'thm_003',
    bookingUrl: 'https://roomsa.co.kr/',
    imageUrl:
      'https://playtheworld-opengame.s3.ap-northeast-2.amazonaws.com/reservation/roomsa/%E1%84%90%E1%85%A6%E1%84%86%E1%85%A1%E1%84%91%E1%85%A2%E1%86%A8%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5.jpg',
    title: '테마팩토리',
    genre: THEME_GENRE.Problems,
    rate: RATE_RECOMMENDATION.LifeTheme,
    description: '히든 문제 다 내꺼!!',
    store_info: {
      name: '룸즈에이 강남점',
      placeId: 'ChIJUcrwP1OhfDURsr2L3FgudAU',
      coordinates: {
        lat: 37.49631,
        lng: 127.030729,
      },
    },
    creator: 'user_002',
  },
  {
    id: 'thm_004',
    bookingUrl: 'https://m.secretgardenescape.com/reservation.html?k_shopno=4',
    imageUrl: 'https://www.secretgardenescape.com/pimages/Product/Pr_1565771355.jpg',
    title: '슈퍼플레이어:PLAYER1',
    genre: THEME_GENRE.Adventure,
    rate: RATE_RECOMMENDATION.UniqueRecommend,
    description: '지금까지 이런 방탈출은 없었다.',
    store_info: {
      name: '비밀의 화원 혜화점',
      placeId: 'ChIJ6dYa0AKjfDURZDNoI1PVS20',
      coordinates: {
        lat: 37.583007,
        lng: 127.002116,
      },
    },
    creator: 'user_002',
  },
];

export const updateDummyUsers = (newUsers: UserType[]) => {
  DUMMY_USERS = [...newUsers];
};

export const updateDummyThemes = (newTheme: UpdateThemeType[]) => {
  DUMMY_THEMES = [...newTheme];
};

export const updateDummyUsersThemes = (newUsersThemes: { [userId: string]: ThemeType[] }) => {
  DUMMY_USERS_THEMES = { ...newUsersThemes };
};
