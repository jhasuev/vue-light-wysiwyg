import {
  TComponentProps,
} from './types';

export const parseStyles = (props: TComponentProps): TComponentProps => {
  const styles: TComponentProps = {};

  if (props.fontSize) {
    styles.fontSize = `${props.fontSize}px`;
  }

  if (props.textAlign) {
    styles.textAlign = props.textAlign;
  }

  return styles;
};
