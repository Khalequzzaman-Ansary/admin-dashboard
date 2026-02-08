// src/services/mockData.ts
import { DashboardData } from '@/types';

export const MOCK_DATA: DashboardData = {
  kpis: [
    {
      label: 'Total Revenue',
      value: '$54,230',
      change: 12.5,
      trend: 'up',
    },
    {
      label: 'Total Users',
      value: '1,245',
      change: -2.4,
      trend: 'down',
    },
    {
      label: 'Orders',
      value: '342',
      change: 8.1,
      trend: 'up',
    },
    {
      label: 'Conversion Rate',
      value: '4.3%',
      change: -1.2,
      trend: 'down', // e.g. lower than last month
    },
  ],
  revenueData: [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 4200 },
    { name: 'Sep', value: 5100 },
    { name: 'Oct', value: 6200 },
    { name: 'Nov', value: 7800 },
    { name: 'Dec', value: 9100 },
  ],
  ordersData: [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 25 },
    { name: 'Mar', value: 30 },
    { name: 'Apr', value: 22 },
    { name: 'May', value: 18 },
    { name: 'Jun', value: 28 },
    { name: 'Jul', value: 34 },
    { name: 'Aug', value: 42 },
    { name: 'Sep', value: 51 },
    { name: 'Oct', value: 62 },
    { name: 'Nov', value: 78 },
    { name: 'Dec', value: 85 },
  ],
  userDistribution: [
    { name: 'Free', value: 400, fill: '#94a3b8' },      // slate-400
    { name: 'Premium', value: 300, fill: '#3b82f6' },   // blue-500
    { name: 'Enterprise', value: 100, fill: '#6366f1' }, // indigo-500
  ],
  recentTransactions: [
    {
      id: 'TRX-9871',
      user: { name: 'Alex Morgan', email: 'alex@example.com', avatar: 'AM' },
      amount: 450.00,
      status: 'completed',
      date: '2023-10-24',
    },
    {
      id: 'TRX-9872',
      user: { name: 'Sarah Jones', email: 'sarah@example.com', avatar: 'SJ' },
      amount: 120.50,
      status: 'processing',
      date: '2023-10-24',
    },
    {
      id: 'TRX-9873',
      user: { name: 'Michael Brown', email: 'mike@example.com', avatar: 'MB' },
      amount: 950.00,
      status: 'completed',
      date: '2023-10-23',
    },
    {
      id: 'TRX-9874',
      user: { name: 'Emily Davis', email: 'emily@example.com', avatar: 'ED' },
      amount: 35.00,
      status: 'failed',
      date: '2023-10-22',
    },
    {
      id: 'TRX-9875',
      user: { name: 'David Wilson', email: 'david@example.com', avatar: 'DW' },
      amount: 210.25,
      status: 'completed',
      date: '2023-10-21',
    },
  ],
};