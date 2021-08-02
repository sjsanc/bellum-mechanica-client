import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
