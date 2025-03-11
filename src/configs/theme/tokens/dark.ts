// src/theme/tokens/dark.ts
// Dark theme token configuration

import { darkColors } from '../colors';
import { commonTokens } from './common';

// Dark theme token configuration
export const darkTokens = {
  ...commonTokens,
  
  // 🖋️ Text Colors
  colorTextBase: darkColors.textBase,
  colorTextHeading: darkColors.textHeading,
  colorTextSecondary: darkColors.textSecondary,
  colorTextTertiary: darkColors.textTertiary,
  colorTextQuaternary: darkColors.textQuaternary,
  
  // 🎨 Background Colors
  colorBgBase: darkColors.bgBase,
  colorBgContainer: darkColors.bgContainer,
  colorBgElevated: darkColors.bgElevated,
  colorBgLayout: darkColors.bgLayout,
  colorBgSpotlight: darkColors.bgSpotlight,
  
  // 🖼️ Border Colors
  colorBorder: darkColors.border,
  colorBorderSecondary: darkColors.borderSecondary,
  
  // 🌓 Shadow
  boxShadow: darkColors.shadow,
  boxShadowSecondary: darkColors.shadowSecondary
};