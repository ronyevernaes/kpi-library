import sql from 'better-sqlite3';
import { Asset, AssetType } from '../types';

const db = sql('assets.db');

type getAssetsParams = {
  type?: AssetType;
  criteria?: string;
}

export const getAssets = async <T extends Asset>(
  type?: AssetType,
  criteria: string = '',
) => {
  return db.prepare<getAssetsParams, T>(`
    SELECT *
    FROM assets
    WHERE (type = @type OR @type IS NULL AND isFavorite = 1)
  `).all({ type, criteria });
};

