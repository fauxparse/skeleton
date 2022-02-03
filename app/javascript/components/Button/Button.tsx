import React, { ElementType, forwardRef, ReactElement } from 'react';
import classNames from 'clsx';
import { PolymorphicRef } from '../../types/polymorphic';
import { ButtonComponent, ButtonSize, ButtonProps } from './types';

const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    {
      as,
      size = ButtonSize.Medium,
      text,
      className,
      children,
      'aria-label': label,
      ...props
    }: ButtonProps<T>,
    ref: PolymorphicRef<T>
  ): ReactElement => {
    const Component = as || 'button';
    return (
      <Component
        ref={ref}
        className={classNames('button', className)}
        data-size={size}
        role="button"
        aria-label={label}
        {...props}
      >
        {text && <span className="button__text">{text}</span>}
        {children}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
