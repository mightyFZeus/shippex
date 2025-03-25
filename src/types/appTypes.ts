import {ReactNode} from 'react';
import {TextInputProps} from 'react-native';

export type textSizes =
  | 'THIN'
  | 'SEMI_THIN'
  | 'XXXXS'
  | 'XXXS'
  | 'XXS'
  | 'XS'
  | 'S'
  | 'L'
  | 'XL'
  | 'XXL'
  | 'XXXL'
  | 'XXXXL';

export type fontWeightType = 'bold' | 'medium' | 'regular';

export type fontType = 'sf_pro';

export const SF_PRO = 'sf_pro';

export type iconType =
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Ionicons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'AntDesign'
  | 'Entypo'
  | 'SimpleLineIcons'
  | 'Octicons'
  | 'Foundation'
  | 'EvilIcons'
  | 'Fontisto'
  | 'FontAwesome6';

export interface AppInputProps extends TextInputProps {
  error?: boolean | '';
  errorText?: string;
  label?: null | string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  pinLength?: number;
  required?: boolean;
  prefix?: string;
  loading?: boolean;
  success?: boolean;
  successText?: string;
  hot?: boolean;
  networkComponent?: ReactNode;
  transparentBgColor?: boolean;
  height?: number;
  smallLabel?: string;
}

export type animationIn = 'zoomIn' | 'slideInUp';
export type animationOut = 'zoomOut' | 'slideOutDown';

export interface BottomTabIconProps {
  color: string;
  focused: boolean | undefined;
  size?: number;
}
