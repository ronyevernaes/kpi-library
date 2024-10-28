export enum AssetType {
  KPI = 'KPI',
  LAYOUT = 'LAYOUT',
  DATA_VIZ = 'DATA_VIZ',
  STORYBOARD = 'STORYBOARD',
}

export interface Asset {
  id: number;
  name: string;
  description: string;
  type: AssetType;
  labels?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Kpi extends Asset {
  targetValue: number;
  currentValue: number;
  targetDate: Date;
  currentDate: Date;
}

export enum DataVizType {
  BAR = 'BAR',
  LINE = 'LINE',
  PIE = 'PIE',
  SCATTER = 'SCATTER',
  HEATMAP = 'HEATMAP',
}

export interface DataViz extends Asset {
  dataVizType: DataVizType;
}

export interface Layout extends Asset {
  kpis: [Kpi, DataViz][];
}

export interface Storyboard extends Asset {
  layout: Layout;
  insights: string[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  area: Area;
  favoriteAssets: Asset[];
  accessRequests: AccessRequest[];
}

export interface Area {
  id: string;
  name: string;
  allowedKpiIds: string[];
}

export enum AccessRequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DENIED = 'DENIED',
}

export interface AccessRequest {
  user: User;
  message: string;
  asssets: Asset;
}
