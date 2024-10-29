const kpis = [
  {
    name: 'Sales',
    description: 'Monthly sales for the last 6 months',
    type: 'KPI',
    labels: 'sales',
    isFavorite: true,
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
  },
];

const layouts = [
  {
    name: 'Sales Dashboard',
    description: 'A dashboard for displaying sales data',
    type: 'LAYOUT',
    labels: 'sales',
    kpis: '[1,2]',
  },
  {
    name: 'Expenses Dashboard',
    description: 'A dashboard for displaying expenses data',
    type: 'LAYOUT',
    labels: 'expenses',
    isFavorite: true,
    kpis: '[3]',
  },
  {
    name: 'Profit Margin Dashboard',
    description: 'A dashboard for displaying profit margin data',
    type: 'LAYOUT',
    labels: 'profit_margin',
    kpis: '[2]',
  },
];

const storyboards = [
  {
    name: 'Sales Storyboard',
    description: 'A storyboard for displaying sales data',
    type: 'STORYBOARD',
    labels: 'sales',
    layoutId: 1,
    insights: "['Sales trends over time', 'Top 5 sales performers']",
  },
  {
    name: 'Expenses Storyboard',
    description: 'A storyboard for displaying expenses data',
    type: 'STORYBOARD',
    labels: 'expenses',
    layoutId: 2,
    insights: "['Expenses trends over time', 'Top 5 expenses contributors']",
  },
  {
    name: 'Profit Margin Storyboard',
    description: 'A storyboard for displaying profit margin data',
    type: 'STORYBOARD',
    labels: 'profit_margin',
    isFavorite: true,
    layoutId: 3,
    insights: "['Profit margin trends over time', 'Top 5 profit margin leaders']",
  },
];

const data = [...kpis, ...layouts, ...storyboards];

export default data;

