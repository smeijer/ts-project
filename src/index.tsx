import React, { HTMLAttributes, ReactNode } from 'react';
import css from './index.module.css';

export interface ThingProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactNode;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A custom Thing component. Neat!
 */
export function Thing({ children }: ThingProps) {
  if (__DEV__) {
    console.log(`I'll only be printed in dev envs`);
  }

  return (
    <div className={css.thing}>
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
}
