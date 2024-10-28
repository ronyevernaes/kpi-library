const sql = require('better-sqlite3');

const db = sql('../assets.db');

const kpis = [
  {
    name: 'Sales',
    description: 'Monthly sales for the last 6 months',
    type: 'KPI',
    labels: 'sales',
    targetValue: 50000,
    currentValue: 48000,
    targetDate: new Date('2024-12-31'),
    currentDate: new Date('2024-09-30'),
  },
  {
    name: 'Profit Margin',
    description: 'Current profit margin as a percentage',
    type: 'KPI',
    labels: 'profit_margin',
    targetValue: 20,
    currentValue: 18,
    targetDate: new Date('2024-12-31'),
    currentDate: new Date('2024-09-30'),
  },
  {
    name: 'Expenses',
    description: 'Annual expenses for the company',
    type: 'KPI',
    labels: 'expenses',
    targetValue: 100000,
    currentValue: 80000,
    targetDate: new Date('2024-12-31'),
    currentDate: new Date('2024-09-30'),
  },
  {
    name: 'Revenue',
    description: 'Annual revenue for the company',
    type: 'KPI',
    labels: 'revenue',
    targetValue: 2000000,
    currentValue: 1800000,
    targetDate: new Date('2024-12-31'),
    currentDate: new Date('2024-09-30'),
  }
]

db.prepare(`
  CREATE TABLE IF NOT EXISTS assets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL,
    labels TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    targetValue REAL, -- For KPIs only
    currentValue REAL, -- For KPIs only
    targetDate DATETIME, -- For KPIs only
    currentDate DATETIME, -- For KPIs only
    dataVizType TEXT, -- For DataVizs only
    kpis TEXT, -- For Layouts only
    layoutId TEXT, -- For Storyboards only
    insights TEXT -- For Storyboards only
  )
`).run();

async function initKpis() {
  const stmt = db.prepare(`
    INSERT INTO assets (
      name,
      description,
      type,
      labels,
      targetValue,
      currentValue,
      targetDate,
      currentDate
    ) VALUES (
      @name,
      @description,
      @type,
      @labels,
      @targetValue,
      @currentValue,
      @targetDate,
      @currentDate
    )
`);

  for (const kpi of kpis) {
    stmt.run({
      ...kpi,
      labels: kpi.labels,
      targetDate: kpi.targetDate.toISOString(),
      currentDate: kpi.currentDate.toISOString(),
    });
  }
}

// initKpis();
