import { RATE_RECOMMENDATION, THEME_GENRE } from '@/features/themes/types/types.ts';

interface ThemeItemProps {
  id?: string;
  title: string;
  imageUrl: string;
  bookingUrl: string;
  genre: THEME_GENRE;
  rate: RATE_RECOMMENDATION;
  description: string;
}

const ThemeItem: React.FC<{ theme: ThemeItemProps }> = ({ theme }) => {
  const getRateColor = (rate: RATE_RECOMMENDATION) => {
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

  return (
    <div className={'flex gap-4 border-b-1 border-gray-300 p-4'}>
      <div>
        <img
          src={theme.imageUrl}
          alt={theme.title}
          className={'w-32 h-32 rounded-lg object-cover'}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <h3 className={'font-bold text-xl text-slate-800 hover:text-amber-400'}>
          <a href={theme.bookingUrl} target={'_blank'}>
            {theme.title}
          </a>
        </h3>
        <div>
          추천도:{' '}
          <span className={`rounded-2xl text-center px-2 py-1 text-sm ${getRateColor(theme.rate)}`}>
            {theme.rate}
          </span>
        </div>
        <div>
          장르:{' '}
          <span className={'rounded-2xl bg-zinc-400 text-center px-2 py-1 text-sm text-white'}>
            {' '}
            {theme.genre}
          </span>
        </div>
        <div>{theme.description}</div>
      </div>
    </div>
  );
};

export default ThemeItem;
