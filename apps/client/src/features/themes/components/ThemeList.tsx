import { ThemeType } from '@/features/themes/types/themes.ts';
import ThemeItem from '@/features/themes/components/ThemeItem.tsx';
import Button from '@/shared/components/FormElements/Button.tsx';
import Card from '@/shared/components/UIElements/Card.tsx';

interface ThemeListProps {
  themes: ThemeType[];
}

const ThemeList: React.FC<ThemeListProps> = ({ themes }) => {
  return (
    <div className={'flex flex-col gap-8'}>
      {themes.length == 0 ? (
        <Card className={'mt-4 mx-4'}>
          <h2 className={'text-2xl mb-2 place-self-center'}>등록된 테마가 없습니다.</h2>
          <Button>테마 등록하기</Button>
        </Card>
      ) : (
        <div>
          <h2 className={'text-2xl font-bold mt-8 text-center'}>추천 테마 리스트</h2>
          <div className={'flex flex-col gap-4 py-8'}>
            {themes.map((theme) => {
              return <ThemeItem key={theme.id} theme={theme} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeList;
