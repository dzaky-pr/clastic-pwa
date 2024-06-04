import * as React from 'react';

import clsxm from '@/lib/clsxm';

export enum TypographyVariant {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'sm',
}

enum FontVariant {
  'Inter',
}

enum FontWeight {
  'thin',
  'extralight',
  'light',
  'regular',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
}

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  font?: keyof typeof FontVariant;
  variant?: keyof typeof TypographyVariant;
  children: React.ReactNode;
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight = 'regular',
  className,
  font = 'Inter',
  variant = 'p',
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || 'p';
  return (
    <Component
      className={clsxm(
        // *=============== Font Type ==================
        'text-black',
        [
          font === 'Inter' && [
            'font-inter',
            [
              weight === 'regular' && 'font-normal',
              weight === 'medium' && 'font-medium',
              weight === 'bold' && 'font-bold',
            ],
          ],
        ],
        // *=============== Font Variants ==================
        [
          variant === 'h1' && ['text-[28px]  '],
          variant === 'h2' && ['text-[24px] '],
          variant === 'h3' && ['text-[20px]  '],
          variant === 'h4' && ['text-[18px]  '],
          variant === 'h5' && ['text-[16px]  '],
          variant === 'h6' && ['text-[14px]  '],
          variant === 'p' && ['text-[12px]  '],
          variant === 'sm' && ['text-[10px]  '],
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
