'use client'

import { FC, ChangeEvent, InputHTMLAttributes } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputText: FC<Props> = ({
  value,
  onChange,
  ...rest
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
