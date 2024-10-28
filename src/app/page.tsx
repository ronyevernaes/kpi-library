import Link from "next/link";

import { SearchInput } from "./components";
import { AssetList } from "./components/asset-list";
import { AssetType } from "../types";

type Props = {
  searchParams: { type?: AssetType };
};

const LINKS = [
  { label: "Favorite", href: "/" },
  { label: "KPIs", href: `/?type=${AssetType.KPI}` },
  { label: "Layouts", href: `/?type=${AssetType.LAYOUT}` },
  { label: "Storyboards", href: `/?type=${AssetType.STORYBOARD}` },
];

export default function Home({ searchParams  }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <h1>Library</h1>

      <p>Browse for assets needed to report and present analysis</p>

      <SearchInput />

      <div className="flex justify-between gap-2">
        {LINKS.map(({ label, href }) => (
          <Link key={label} className="button grow text-center" href={href}>{label}</Link>
        ))}
      </div>

      <AssetList type={searchParams.type} />
    </div>
  );
};

