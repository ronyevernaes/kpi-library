import { FC, ReactNode } from 'react';

import { formatDate } from '@/src/lib/date';

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  date?: Date;
  className?: string;
}

export const Card: FC<Props> = ({
  icon,
  title,
  description,
  date,
  className,
}) => {
  return (
    <div
      className={`flex gap-4 border border-slate-400 p-4 rounded-md bg-slate-50 ${className}`}
    >
      <div className="flex justify-center items-center p-4 rounded-md bg-slate-200">
        {icon}
      </div>

      <div className="flex flex-col">
        <div className="font-bold">{title}</div>
        <div className="">{description}</div>
        {date && (<div className="text-slate-500">{formatDate(date)}</div>)}
      </div>
    </div>
  );
};
