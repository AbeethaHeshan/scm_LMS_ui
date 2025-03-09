import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { lightTheme, darkTheme, fontSizes, fontFamilies } from '../../configs/theme.config';

// Define Theme Modes
type ThemeMode = 'light' | 'dark';

// Define Theme Context Type
interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  fontSizes: typeof fontSizes;
  fontFamilies: typeof fontFamilies;
}

// Create Context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom Hook to use Theme Context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Custom Hook to handle theme state and localStorage
const useThemeState = (defaultTheme: ThemeMode) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    return savedTheme ?? defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, setTheme, toggleTheme };
};

// Theme Provider Component
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, defaultTheme = 'light' }) => {
  const { theme, setTheme, toggleTheme } = useThemeState(defaultTheme);

  // Memoized Theme Configuration
  const currentTheme = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, fontSizes, fontFamilies }}>
      <ConfigProvider theme={currentTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
