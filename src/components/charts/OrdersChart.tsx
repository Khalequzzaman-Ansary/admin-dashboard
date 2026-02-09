'use client';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui/Card';

interface OrdersChartProps {
    data: any[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
                <p className="text-slate-300 text-sm font-medium mb-1">{label}</p>
                <p className="text-indigo-400 text-lg font-bold">
                    {payload[0].value} Orders
                </p>
            </div>
        );
    }
    return null;
};

export function OrdersChart({ data }: OrdersChartProps) {
    return (
        <Card className="h-100 flex flex-col">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Orders Overview
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Monthly order volume
                </p>
            </div>

            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ fill: '#334155', opacity: 0.2 }}
                        />
                        <Bar
                            dataKey="value"
                            fill="#6366f1"
                            radius={[4, 4, 0, 0]}
                            barSize={30}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}