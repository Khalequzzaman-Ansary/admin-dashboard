'use client';

import { useEffect } from 'react';
import { useDashboardStore } from '@/store/useStore';
import { KPICard } from '@/components/dashboard/KPICard';
import { DashboardFilter } from '@/components/dashboard/DashboardFilter';
import { UserPieChart } from '@/components/charts/UserPieChart';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { OrdersChart } from '@/components/charts/OrdersChart';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { Download } from 'lucide-react';

export default function DashboardPage() {
  const { data, isLoading, fetchData, error } = useDashboardStore();

  // Initial Fetch
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return (
      <div className="flex h-96 items-center justify-center text-red-500 bg-red-50 rounded-xl border border-red-200">
        Error: {error}. Try refreshing.
      </div>
    );
  }

  const handleExport = () => {
    if (!data) return;

    // 1. Convert JSON to CSV string
    const headers = ['ID', 'User', 'Amount', 'Status', 'Date'];
    const rows = data.recentTransactions.map(t =>
      [t.id, t.user.name, t.amount, t.status, t.date].join(',')
    );
    const csvContent = [headers.join(','), ...rows].join('\n');

    // 2. Trigger Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'dashboard_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Overview of your business metrics.</p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <Download size={16} /> {/* Import Download from lucide-react */}
          Export
        </button>
      </div>

      {/* Filters */}
      <DashboardFilter />

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading || !data ? (
          // Simple Skeleton for KPIs
          Array(4).fill(0).map((_, i) => (
            <div key={i} className="h-32 bg-slate-200 dark:bg-slate-700 rounded-xl animate-pulse" />
          ))
        ) : (
          data.kpis.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))
        )}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {isLoading || !data ? (
          // Skeleton for Charts
          <>
            <div className="h-100 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
            <div className="h-100 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
          </>
        ) : (
          <>
            <RevenueChart data={data.revenueData} />
            <OrdersChart data={data.ordersData} />
          </>
        )}
      </div>

      {/* Bottom Section (Pie Chart + maybe a table later) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Pie Chart takes up 1 column */}
        <div className="lg:col-span-1">
          {isLoading || !data ? (
            <div className="h-100 bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
          ) : (
            <UserPieChart data={data.userDistribution} />
          )}
        </div>

        {/* Recent Orders Table */}
        <div className="lg:col-span-2 h-100">
          {isLoading || !data ? (
            <div className="h-full bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse" />
          ) : (
            <RecentTransactions transactions={data.recentTransactions} />
          )}
        </div>
      </div>
    </div>
  );
}