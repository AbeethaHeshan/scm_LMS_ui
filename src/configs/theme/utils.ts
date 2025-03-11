import { Theme } from 'antd/es/config-provider/context';
import { brandColors, derivedColors } from './colors';
import { fontSizes, fontFamilies } from './thypography';
import { lightTheme, darkTheme } from './index';

// Extended token interface that includes our custom properties
export interface CustomToken extends Theme {
    customColors: {
        secondary: string;
        secondaryHover: string;
        secondaryActive: string;
        secondaryLight: string;
    };
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

// Helper functions to access theme values
export const getSecondaryColor = (isDarkMode: boolean = false): string => {
    return brandColors.secondary;
};

// Create a theme context helper (can be used with React Context)
export const createThemeContext = (isDarkMode: boolean = false) => {
    const theme = isDarkMode ? darkTheme : lightTheme;

    return {
        theme,
        colors: {
            ...brandColors,
            ...derivedColors
        },
        fontSizes,
        fontFamilies,
    };
};

// CSS Variables generator for use outside of Ant Design components
export const generateCSSVariables = (isDarkMode: boolean = false) => {
    const theme = isDarkMode ? darkTheme : lightTheme;

    return `
    :root {
      --color-primary: ${brandColors.primary};
      --color-secondary: ${brandColors.secondary};
      --color-success: ${brandColors.success};
      --color-warning: ${brandColors.warning};
      --color-error: ${brandColors.error};
      --color-info: ${brandColors.info};
      
      --color-primary-hover: ${derivedColors.primaryHover};
      --color-primary-active: ${derivedColors.primaryActive};
      --color-primary-light: ${derivedColors.primaryLight};
      --color-secondary-hover: ${derivedColors.secondaryHover};
      --color-secondary-active: ${derivedColors.secondaryActive};
      --color-secondary-light: ${derivedColors.secondaryLight};
      
      --color-text-base: ${theme.token?.colorTextBase};
      --color-text-secondary: ${theme.token?.colorTextSecondary};
      --color-bg-base: ${theme.token?.colorBgBase};
      --color-bg-container: ${theme.token?.colorBgContainer};
      --color-border: ${theme.token?.colorBorder};
      
      --font-family-primary: ${fontFamilies.primary};
      --font-family-secondary: ${fontFamilies.secondary};
      
      --font-size-xs: ${fontSizes.xs}px;
      --font-size-sm: ${fontSizes.sm}px;
      --font-size-md: ${fontSizes.md}px;
      --font-size-lg: ${fontSizes.lg}px;
      --font-size-xl: ${fontSizes.xl}px;
      --font-size-xxl: ${fontSizes.xxl}px;
      
      --border-radius-sm: 2px;
      --border-radius-md: ${theme.token?.borderRadius}px;
      --border-radius-lg: 8px;
    }
  `;
};

// Helper to apply theme to styled-components if used
export const themeToStyledComponents = (isDarkMode: boolean = false) => {
    const theme = isDarkMode ? darkTheme : lightTheme;

    return {
        colors: {
            primary: brandColors.primary,
            secondary: brandColors.secondary,
            success: brandColors.success,
            warning: brandColors.warning,
            error: brandColors.error,
            info: brandColors.info,

            text: theme.token?.colorTextBase,
            textSecondary: theme.token?.colorTextSecondary,
            background: theme.token?.colorBgBase,
            container: theme.token?.colorBgContainer,
            border: theme.token?.colorBorder,
        },
        fonts: fontFamilies,
        fontSizes,
        borderRadius: {
            small: 2,
            medium: theme.token?.borderRadius,
            large: 8,
        },
    };
};