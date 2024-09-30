export interface ThemeInterface {
  fontColor: string;
  background: string;
}

export interface ThemeContextInterface {
  theme: ThemeInterface;
  toggleTheme: () => void;
}
