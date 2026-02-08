'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from '@/components/ui/Card';

interface UserPieChartProps {
    data: any[];
}

const COLORS = ['#94a3b8', '#3b82f6', '#6366f1']; // Slate, Blue, Indigo

export function UserPieChart({ data }: UserPieChartProps) {
    return (
        <Card className="h-[400px] flex flex-col">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    User Distribution
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    By subscription tier
                </p>
            </div>

            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#0f172a',
                                borderColor: '#334155',
                                borderRadius: '8px',
                                color: '#f8fafc'
                            }}
                            itemStyle={{ color: '#e2e8f0' }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}