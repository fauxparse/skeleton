import React, { useEffect, useState } from 'react';

interface DarkModeProps {
  default?: boolean;
  onChange: (darkMode: boolean) => void;
}

const DarkMode: React.FC<DarkModeProps> = ({
  default: defaultValue,
  onChange,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(defaultValue);

  useEffect(() => {
    if (defaultValue !== undefined || !window.matchMedia) {
      setDarkMode(defaultValue);
      return;
    }

    const match = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(match.matches);

    const listener = () => setDarkMode(match.matches);
    match.addEventListener('change', listener);

    return () => {
      match.removeEventListener('change', listener);
    };
  }, [defaultValue]);

  useEffect(() => {
    if (onChange && darkMode !== undefined) {
      onChange(darkMode);
    }
  }, [darkMode, onChange]);

  return null;
};

export default DarkMode;
