import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme.background,
        color: theme.fontColor,
      }}
      onClick={toggleTheme}
      className="btn"
    >
      Dynamic Theme
    </button>
  );
};

export default ThemedButton;
