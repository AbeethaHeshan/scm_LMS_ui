import { brandColors, derivedColors } from '../colors';
import { fontFamilies } from '../thypography';

// Common tokens that apply to both light and dark themes
export const commonTokens = {
    // Typography
    fontFamily: fontFamilies.primary,
    fontSize: 14,

    //Border radius
    borderRadius: 4,

    //Size tokens
    controlHeight: 36,
    controlHeightLG: 44,
    controlHeightSM: 28,

    //Status Colors
    colorSuccess: brandColors.success,
    colorWarning: brandColors.warning,
    colorError: brandColors.error,
    colorInfo: brandColors.info,

    //Primary Color
    colorPrimary: brandColors.primary,
    colorPrimaryHover: derivedColors.primaryHover,
    colorPrimaryActive: derivedColors.primaryActive,
    colorPrimaryBg: derivedColors.primaryLight
};