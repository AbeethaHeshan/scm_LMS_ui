import { ThemeConfig } from 'antd';
import { Theme } from 'antd/es/config-provider/context';

export interface CustomToken extends Theme {
  borderRadius: number;
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  fontFamily: {
    primary: string;
    secondary: string;
  };
}

// Light theme configuration
export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: '#A020F0', // Primary color
    colorSuccess: '#52c41a', // Success color
    colorWarning: '#faad14', // Warning color
    colorError: '#ff4d4f',   // Error/danger color
    colorInfo: '#1677ff',    // Info color
    colorTextBase: '#000000', // Base text color
    colorBgBase: '#ffffff',  // Base background color
    
    // Secondary colors
   // colorSecondary: '#722ed1', // Purple as secondary
    
    // Fonts
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 14,
    
    // Border radius
    borderRadius: 4,
  },
  components: {
    Button: {
      borderRadius: 4,
      controlHeight: 36,
    },
    Card: {
      borderRadius: 8,
    },
    // Add component-specific overrides as needed

  },
};

// Dark theme configuration
export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: '#177ddc', // Primary color for dark mode
    colorSuccess: '#49aa19', // Success color for dark mode
    colorWarning: '#d89614', // Warning color for dark mode
    colorError: '#a61d24',   // Error/danger color for dark mode
    colorInfo: '#177ddc',    // Info color for dark mode
    colorTextBase: '#ffffff', // Base text color for dark mode
    colorBgBase: '#141414',  // Base background color for dark mode
    
    // Secondary colors
   // colorSecondary: '#9254de', // Purple as secondary for dark mode
    
    // Same font configuration
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 14,
    
    // Border radius
    borderRadius: 4,
  },
  components: {
    Button: {
      borderRadius: 4,
      controlHeight: 36,
    },
    Card: {
      borderRadius: 8,
    },
    // Add component-specific overrides as needed
  },
};

// Custom font sizes for global usage
export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
};

// Custom font families for global usage
export const fontFamilies = {
  primary: "'Roboto', sans-serif",
  secondary: "'Open Sans', sans-serif",
};