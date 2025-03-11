// src/theme/components/dark.ts
// Dark theme component configurations

import { brandColors, derivedColors, darkColors } from '../colors';
import { commonComponents } from './common';

// Dark theme component overrides
export const darkComponents = {
  ...commonComponents,
  Card: {
    ...commonComponents.Card,
    colorBgContainer: darkColors.bgContainer,
    colorBorder: darkColors.border,
    boxShadow: darkColors.shadow
  },
  Input: {
    ...commonComponents.Input,
    colorText: darkColors.textBase,
    colorBgContainer: darkColors.bgContainer,
    colorBorder: darkColors.border,
    colorTextPlaceholder: darkColors.textTertiary,
    activeBorderColor: brandColors.primary,
    hoverBorderColor: derivedColors.primaryHover
  },
  Table: {
    colorBgContainer: darkColors.bgContainer,
    colorBgHeader: '#222222',
    colorBorder: darkColors.border,
    colorTextHeading: darkColors.textHeading
  },
  Tabs: {
    colorBgContainer: darkColors.bgContainer,
    colorPrimary: brandColors.primary,
    colorBorderSecondary: darkColors.borderSecondary
  }
};