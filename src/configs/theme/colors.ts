// src/theme/colors.ts
// Define brand colors separately to use throughout the application

// Base brand colors
export const brandColors = {
    primary: '#CA3C75',
    secondary: '#6A1B9A',
    success: '#1FAA59',
    warning: '#FFC107',
    error: '#E53935',
    info: '#29B6F6'
};

// Derived colors (lighter/darker variants)
export const derivedColors = {
    primaryHover: '#B82C66',
    primaryActive: '#A91E57',
    primaryLight: '#F8D7E3',
    secondaryHover: '#5A148C',
    secondaryActive: '#4A1077',
    secondaryLight: '#E6D7F8'
};

// Light theme specific colors
export const lightColors = {
    textBase: '#212121',
    textHeading: '#1A1A1A',
    textSecondary: '#616161',
    textTertiary: '#888888',
    textQuaternary: '#AAAAAA',

    bgBase: '#F5F5F5',
    bgContainer: '#FFFFFF',
    bgElevated: '#FFFFFF',
    bgLayout: '#F0F2F5',
    bgSpotlight: '#F8F8F8',

    border: '#DDDDDD',
    borderSecondary: '#EEEEEE',

    shadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    shadowSecondary: '0 1px 4px rgba(0, 0, 0, 0.08)'
};

// Dark theme specific colors
export const darkColors = {
    textBase: '#FFFFFF',
    textHeading: '#FAFAFA',
    textSecondary: '#B0B0B0',
    textTertiary: '#888888',
    textQuaternary: '#666666',

    bgBase: '#1E1E1E',
    bgContainer: '#2A2A2A',
    bgElevated: '#2A2A2A',
    bgLayout: '#141414',
    bgSpotlight: '#222222',

    border: '#444444',
    borderSecondary: '#333333',

    shadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    shadowSecondary: '0 1px 4px rgba(0, 0, 0, 0.2)'
};