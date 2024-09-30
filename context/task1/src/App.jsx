import React, { createContext, useState } from 'react';
import ThemedButton from './ThemedButton';

const themes = {
  dark: {
    fontColor: '#ffffff',
    background: '#222222',
  },
  light: {
    fontColor: '#000000',
    background: '#eeeeee',
  },
};

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
        <ThemedButton />
      </ThemeContext.Provider>
      <button
        style={{
          background: themes.dark.background,
          color: themes.dark.fontColor,
        }}
        onClick={toggleTheme}
        className="btn"
      >
        Default Theme
      </button>
    </div>
  );
};

export default App;

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
