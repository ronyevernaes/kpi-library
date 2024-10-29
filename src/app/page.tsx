import { NavBar, SearchInput } from "./components";
import { AssetList } from "./components/asset-list";
import { AssetType } from "../types";

type Props = {
  searchParams: { type?: AssetType };
};

export default function Home({ searchParams  }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <h1>Library</h1>

      <p className="text-center">Browse for assets needed to report and present analysis</p>

      <SearchInput />

      <NavBar />

      <AssetList type={searchParams.type} />
    </div>
  );
};

