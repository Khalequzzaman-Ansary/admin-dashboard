'use client';

import { useDashboardStore } from '@/store/useStore';

export function DashboardFilter() {
    const { filters, setFilter } = useDashboardStore();

    return (
        <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 mb-6">

            {/* Date Range Selector */}
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase">
                    Time Range
                </label>
                <select
                    value={filters.dateRange}
                    onChange={(e) => setFilter('dateRange', e.target.value)}
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                >
                    <option value="7d">Last 7 Days</option>
                    <option value="30d">Last 30 Days</option>
                    <option value="12m">Last 12 Months</option>
                </select>
            </div>

            {/* User Type Selector */}
            <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase">
                    User Segment
                </label>
                <select
                    value={filters.userType}
                    onChange={(e) => setFilter('userType', e.target.value)}
                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white"
                >
                    <option value="all">All Users</option>
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                </select>
            </div>
        </div>
    );
}