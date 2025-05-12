import { ThemeType } from '@/features/themes/types/themes.ts';
import ThemeList from '@/features/themes/components/ThemeList.tsx';
import { useParams } from 'react-router-dom';
import { DUMMY_USER_THEMES } from '@/features/themes/dummyThemes.ts';

const UserThemes = () => {
  const userId = useParams().uid;

  const themes: ThemeType[] = DUMMY_USER_THEMES[userId ?? ''] ?? [];
  // const themes: ThemeType[] = [];

  return (
    <div>
      <ThemeList themes={themes} />
    </div>
  );
};

export default UserThemes;
