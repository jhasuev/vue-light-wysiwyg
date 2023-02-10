export type TComponentName = 'Text'| 'Picture';

export type TComponentProps = {
  text?: string
  textAlign?: string
  fontSize?: number|string
  src?: string
  width?: number|string
};

export type TComponent = {
  id: number
  name: TComponentName
  props: TComponentProps
};

export type TComponents = TComponent[];
