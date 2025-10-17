import { ThemeType } from '../../../../../shared/types/themes.ts';
import ThemeItem from '@/features/themes/components/ThemeItem.tsx';
import Button from '@/shared/components/FormElements/Button.tsx';
import Card from '@/shared/components/UIElements/Card.tsx';
import { useContext } from 'react';
import { AuthContext } from '@/shared/context/authContext.ts';

interface ThemeListProps {
  themes: ThemeType[];
}

const ThemeList: React.FC<ThemeListProps> = ({ themes }) => {
  const auth = useContext(AuthContext);

  return (
    <div className={'flex flex-col gap-8'}>
      {themes.length == 0 ? (
        <div className={'flex-1 flex justify-center items-center min-h-screen'}>
          <Card className={'w-5/6 max-w-[600px] min-w-[250px]'}>
            <h2 className={'text-2xl mb-2 place-self-center'}>등록된 테마가 없습니다.</h2>
            {auth.isLoggedIn ?? <Button to={'/themes/new'}>테마 등록하기</Button>}
          </Card>
        </div>
      ) : (
        <div>
          <h2 className={'text-2xl font-bold mt-8 text-center'}>추천 테마 리스트</h2>
          <div className={'flex flex-col items-center gap-4 py-8'}>
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
