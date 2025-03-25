import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {fontWeightType, textSizes, fontType} from '../types/appTypes';
import {colors, colorType} from '../theme/themes';
import {FONT_FAMILY} from '../constants/scaling';
// import {fontType, fontWeightType, textSizes} from "types/appTypes";

const textSizeOptions = {
  THIN: 5,
  SEMI_THIN: 6,
  XXXXS: 7,
  XXXS: 8,
  XXS: 10,
  XS: 12,
  S: 14,
  L: 16,
  XL: 18,
  XXL: 20,
  XXXL: 24,
  XXXXL: 26,
};

export const getTextSize = (size: textSizes) => {
  return moderateScale(textSizeOptions[size], 0.3);
};
export const getTextColor = (color: colorType) => colors[color];

export const getTextFont = (
  typeOfFont: fontType,
  fontWeight: fontWeightType,
) => {
  return FONT_FAMILY[typeOfFont][fontWeight];
};

export const getSize = (size: number) => {
  return moderateScale(size, 0.3);
};
export const getVerticalSize = (size: number) => {
  return moderateVerticalScale(size, 0.3);
};

// export {getTextSize, getTextColor, getTextFont};
