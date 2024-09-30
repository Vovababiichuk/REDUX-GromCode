import { createContext } from 'react';
import { ThemeContextInterface } from './interface';

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: {
    fontColor: '#ffffff',
    background: '#222222',
  },
  toggleTheme: () => {},
});
