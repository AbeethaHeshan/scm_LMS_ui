import { brandColors, derivedColors, lightColors } from '../colors';
import { commonComponents } from './common';

// Light theme component overrides
export const lightComponents = {
  ...commonComponents,
  Card: {
    ...commonComponents.Card,
    colorBgContainer: lightColors.bgContainer,
    colorBorder: lightColors.border,
    boxShadow: lightColors.shadow
  },
  Input: {
    ...commonComponents.Input,
    colorText: lightColors.textBase,
    colorBgContainer: lightColors.bgContainer,
    colorBorder: lightColors.border,
    colorTextPlaceholder: lightColors.textTertiary,
    activeBorderColor: brandColors.primary,
    hoverBorderColor: derivedColors.primaryHover
  },
  Table: {
    colorBgContainer: lightColors.bgContainer,
    colorBgHeader: '#FAFAFA',
    colorBorder: lightColors.border,
    colorTextHeading: lightColors.textHeading
  },
  Tabs: {
    colorBgContainer: lightColors.bgContainer,
    colorPrimary: brandColors.primary,
    colorBorderSecondary: lightColors.borderSecondary
  }
};