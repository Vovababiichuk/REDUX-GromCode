import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemedButton from './ThemedButton';
import { ThemeInterface } from './interface';

const themes: { [key: string]: ThemeInterface } = {
  dark: {
    fontColor: '#ffffff',
    background: '#222222',
  },
  light: {
    fontColor: '#000000',
    background: '#eeeeee',
  },
};

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
        <ThemedButton />
      </ThemeContext.Provider>
      <button onClick={toggleTheme} className="btn">
        Default Theme
      </button>
    </div>
  );
}

export default App;
