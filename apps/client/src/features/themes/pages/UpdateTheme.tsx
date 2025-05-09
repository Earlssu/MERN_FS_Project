import { useParams } from 'react-router-dom';
import { DUMMY_THEMES } from '@/features/themes/dummyThemes.ts';

const UpdateTheme = () => {
  const themeId = useParams().tid;

  const identifiedPlace = DUMMY_THEMES.find((t) => t.id == themeId);

  if (!identifiedPlace) {
    return <div>COULD NOT FIND A THEME!</div>;
  }

  return <div>UPDATE THEME HERE</div>;
};

export default UpdateTheme;
