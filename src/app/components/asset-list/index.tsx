import { FC } from 'react';
import { MdBarChart as BarChart } from "react-icons/md";

import { getAssets } from "@/src/lib/assets";
import { AssetType } from "@/src/types";
import { Card } from "@/src/components/ui";

type Props = {
  type?: AssetType;
  criteria?: string;
};

export const AssetList: FC<Props> = async ({ type, criteria }) => {
  const assets = await getAssets(type, criteria);

  return (
    <div className="grid gap-4 grid-cols-2">
      {assets.map((asset) => (
        <Card
          key={asset.id}
          icon={<BarChart size={48} />}
          title={asset.name}
          description={asset.description}
          date={asset.updatedAt}
        />
      ))}
    </div>
  );
};
