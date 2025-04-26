import { RATE_RECOMMENDATION } from '@/features/themes/types/types.ts';

export const getRateColor = (rate: RATE_RECOMMENDATION) => {
  switch (rate) {
    case RATE_RECOMMENDATION.LifeTheme:
      return 'bg-indigo-700 text-white';
    case RATE_RECOMMENDATION.StronglyRecommend:
      return 'bg-amber-600 text-white';
    case RATE_RECOMMENDATION.UniqueRecommend:
      return 'bg-purple-600 text-white';
    default:
      return 'bg-gray-300 text-black';
  }
};
