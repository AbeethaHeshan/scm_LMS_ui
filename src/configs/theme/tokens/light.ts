// src/theme/tokens/light.ts
// Light theme token configuration

import { lightColors } from '../colors';
import { commonTokens } from './common';

// Light theme token configuration
export const lightTokens = {
    ...commonTokens,

    // Text Colors
    colorTextBase: lightColors.textBase,
    colorTextHeading: lightColors.textHeading,
    colorTextSecondary: lightColors.textSecondary,
    colorTextTertiary: lightColors.textTertiary,
    colorTextQuaternary: lightColors.textQuaternary,

    //Background Colors
    colorBgBase: lightColors.bgBase,
    colorBgContainer: lightColors.bgContainer,
    colorBgElevated: lightColors.bgElevated,
    colorBgLayout: lightColors.bgLayout,
    colorBgSpotlight: lightColors.bgSpotlight,

    // Border Colors
    colorBorder: lightColors.border,
    colorBorderSecondary: lightColors.borderSecondary,

    // Shadow
    boxShadow: lightColors.shadow,
    boxShadowSecondary: lightColors.shadowSecondary
};