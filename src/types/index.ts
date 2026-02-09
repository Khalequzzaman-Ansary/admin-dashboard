export interface KPI {
  label: string;
  value: number | string;
  change: number; // percentage
  trend: 'up' | 'down' | 'neutral';
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any; // For flexible multiple lines/bars
}

export interface FilterState {
  dateRange: '7d' | '30d' | '12m';
  userType: 'all' | 'free' | 'premium' | 'enterprise';
}

export interface Transaction {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string; 
  };
  amount: number;
  status: 'completed' | 'processing' | 'failed';
  date: string;
}

export interface DashboardData {
  kpis: KPI[];
  revenueData: ChartDataPoint[];
  ordersData: ChartDataPoint[];
  userDistribution: ChartDataPoint[];
  recentTransactions: Transaction[];
}
