import { ElementType, ReactElement, ReactNode } from 'react';
import {
  PolymorphicComponentProps,
  WithDisplayName,
} from '../../types/polymorphic';
import { SingleKey } from '../../types/singleKey';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type SizedButton =
  | SingleKey<`${ButtonSize}`, boolean>
  | { size?: ButtonSize };

type BaseButtonProps = SizedButton & {
  text?: string;
  children?: ReactNode;
};

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  BaseButtonProps
>;

export type ButtonComponent = WithDisplayName<
  <C extends ElementType = 'button'>(
    props: ButtonProps<C>
  ) => ReactElement | null
>;
