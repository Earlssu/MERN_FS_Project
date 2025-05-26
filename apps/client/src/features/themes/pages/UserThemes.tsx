import { ThemeType } from '../../../../../shared/types/themes.ts';
import ThemeList from '@/features/themes/components/ThemeList.tsx';
import { useParams } from 'react-router-dom';
import { DUMMY_USERS_THEMES } from '../../../../../shared/const/dummyThemes.ts';

const UserThemes = () => {
  const userId = useParams().uid;

  const themes: ThemeType[] = DUMMY_USERS_THEMES[userId ?? ''] ?? [];

  return (
    <div>
      <ThemeList themes={themes} />
    </div>
  );
};

export default UserThemes;
