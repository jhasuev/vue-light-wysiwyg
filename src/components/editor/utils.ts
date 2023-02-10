import { TProcessedStyles, TSettingStyles } from './types';

export const parseStyles = (props: TSettingStyles): TProcessedStyles => {
  const styles: TProcessedStyles = {};

  if (props.fontSize) {
    styles.fontSize = `${props.fontSize}px`;
  }

  if (props.textAlign) {
    styles.textAlign = props.textAlign;
  }

  return styles;
};
