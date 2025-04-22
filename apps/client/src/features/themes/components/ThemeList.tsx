import { ThemeType } from '@/features/themes/types/types.ts';
import ThemeItem from '@/features/themes/components/ThemeItem.tsx';

interface ThemeListProps {
  themes: ThemeType[];
}

const ThemeList: React.FC<ThemeListProps> = ({ themes }) => {
  return (
    <div className={'flex flex-col gap-8'}>
      {themes.length == 0 ? (
        <div className={'p-8'}>
          <h2 className={'text-2xl mb-2 place-self-center'}>등록된 테마가 없습니다.</h2>
        </div>
      ) : (
        <div>
          <h2 className={'text-2xl font-bold mt-4 mx-4'}>추천 테마 리스트</h2>
          {themes.map((theme) => {
            return <ThemeItem key={theme.id} theme={theme} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeList;
