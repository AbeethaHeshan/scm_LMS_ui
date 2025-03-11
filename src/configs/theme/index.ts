import { ThemeConfig } from 'antd';
import { lightTokens } from './tokens/light';
import { darkTokens } from './tokens/dark';
import { lightComponents } from './components/light';
import { darkComponents } from './components/dark';

//Light Theme Configs
export const lightTheme: ThemeConfig = {
    token: lightTokens,
    components: lightComponents,
    //algorithm: 'defaultAlgorithm' // Explicitly set the algorithm
};

//Dark Theme Configs
export const darkTheme: ThemeConfig = {
    token: darkTokens,
    components: darkComponents,
    // algorithm: 'darkAlgorithm' // Explicitly set the algorithm
};

// Export other theme-related items
export * from './colors';
export * from './thypography';
export * from './utils';

export default {
    light: lightTheme,
    dark: darkTheme
};