export type ThemeOptions = "light" | "dark";
export interface ThemeProps {
  background: string;
  text: string;
  elementBackground: string;
  headers: string;
  colors: {
    violet: string;
    violetLight: string;
    darkBlue: string;
    black: string;
    gray: string;
    grayDark: string;
    grayLight: string;
    white: string;
  };
  font: {
    headings: string;
    fontFamily: string;
  };
  fontWeight: {
    regular: number;
    demi: number;
    bold: number;
  };
  fontSize: {
    fontSize1: string;
    fontSize2: string;
    fontSize3: string;
    fontSize4: string;
    fontSize5: string;
  };
  letterSpacing: {
    dense: string;
    tight: string;
    sparse: string;
    double: string;
  };
  lineHeight: {
    lineHeight1: string;
    lineHeight2: string;
    lineHeight3: string;
    lineHeight4: string;
    lineHeight5: string;
    lineHeightMultiplierSmall: string;
    lineHeightMultiplierMedium: string;
    lineHeightMultiplierLarge: string;
  };
  curve: {
    linear: string;
    ease: string;
    easeSlow: string;
    easeQuick: string;
    easeCalm: string;
    easeEntrance: string;
    easeExit: string;
    easeSpirited: string;
    easeEntranceSpirited: string;
    easeExitSpirited: string;
    easeInSine: string;
    easeOutSine: string;
  };
  elevation: {
    none: string;
    skim: string;
    lifted: string;
    raised: string;
    floating: string;
  };
  opacity: {
    none: string;
    opacity10: string;
    opacity13: string;
    opacity20: string;
    opacity25: string;
    opacity30: string;
    opacity33: string;
    opacity40: string;
    opacity50: string;
    opacity60: string;
    opacity70: string;
    opacity80: string;
    opacity90: string;
    opacity100: string;
    opacity03: string;
    opacity07: string;
    opacityShadow: string;
    opacityDisabled: string;
  };
  radius: {
    default: string;
    none: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    circle: string;
    pill: string;
  };
  size: Record<string, string>;
  spacing: Record<string, string>;
  duration: Record<string, string>;
}
