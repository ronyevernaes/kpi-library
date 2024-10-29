'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import cn from 'classnames';

import { AssetType } from '@/src/types';

const LINKS = [
  { label: "Favorite" },
  { label: "KPIs", type: AssetType.KPI },
  { label: "Layouts", type: AssetType.LAYOUT },
  { label: "Storyboards", type: AssetType.STORYBOARD },
];

const getHref = (type?: AssetType) => type ? `/?type=${type}` : '/';

export const NavBar: FC = () => {
  const params = useSearchParams();
  const _type = params.get('type');

  return (
    <div className="flex justify-between gap-2 bg-slate-500 rounded-md">
      {LINKS.map(({ label, type }) => (
        <Link
          key={label}
          className={cn(
            "m-1 py-3 px-4 grow text-center rounded-md", {
            "text-slate-700": type != _type,
            "bg-slate-200 text-slate-900": type == _type,
          })}
          href={getHref(type)}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};
