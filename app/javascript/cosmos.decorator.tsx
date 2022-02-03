import React, { useEffect } from 'react';
import { useValue } from 'react-cosmos/fixture';
import DarkMode from './styles/DarkMode';

const Decorator: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useValue<boolean>('Dark mode', {
    defaultValue: undefined,
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <DarkMode onChange={setDarkMode} />
      {children}
    </>
  );
};

export default Decorator;
