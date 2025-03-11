import { brandColors, derivedColors } from '../colors';

// Common component configurations
export const commonComponents = {
  Button: {
    borderRadius: 4,
    controlHeight: 36,
    colorPrimary: brandColors.primary,
    colorPrimaryHover: derivedColors.primaryHover,
    colorPrimaryActive: derivedColors.primaryActive,
    
    // Define a default button type with secondary color
    // This allows you to create <Button type="secondary">
    colorTextSecondary: '#FFFFFF',
    colorBgSecondary: brandColors.secondary,
    colorBgSecondaryHover: derivedColors.secondaryHover,
    colorBgSecondaryActive: derivedColors.secondaryActive
  },
  Card: {
    borderRadius: 8,
  },
  Input: {
    borderRadius: 4,
  },
  Select: {
    borderRadius: 4,
  },
  Dropdown: {
    borderRadius: 4,
  },
  Modal: {
    borderRadius: 8,
  },
  Checkbox: {
    borderRadius: 2,
  }
};