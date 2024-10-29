// import sql from 'better-sqlite3';
import { Asset, AssetType } from '@/src/types';
import data from '@/db/data';

// const db = sql('assets.db');

type getAssetsParams = {
  type?: AssetType;
  criteria?: string;
}

export const getAssets = async <T extends Asset>(
  type?: AssetType,
  criteria: string = '',
) => {
  return data.filter(d => (
    d.type === type || type === undefined && d.isFavorite === true
  ) && (
    d.name.toLowerCase().includes(criteria.toLowerCase()) ||
    d.description.toLowerCase().includes(criteria.toLowerCase())
  ));
  // return db.prepare<getAssetsParams, T>(`
  //   SELECT *
  //   FROM assets
  //   WHERE (type = @type OR @type IS NULL AND isFavorite = 1)
  //     AND (
  //       @criteria IS NULL
  //       OR name LIKE '%' || @criteria || '%' 
  //       OR description LIKE '%' || @criteria || '%'
  //     )
  // `).all({ type, criteria });
};
