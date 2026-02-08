import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Card } from '@/components/ui/Card'; // ensure you created this in step 4D
import { cn } from '@/lib/utils';
import { KPI } from '@/types';

export function KPICard({ label, value, change, trend }: KPI) {
    const isPositive = trend === 'up';
    const isNeutral = trend === 'neutral';

    return (
        <Card>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {label}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                        {value}
                    </h3>
                </div>
                <div className={cn(
                    "p-2 rounded-full",
                    isPositive ? "bg-green-100 text-green-600 dark:bg-green-900/30" :
                        isNeutral ? "bg-slate-100 text-slate-600 dark:bg-slate-800" :
                            "bg-red-100 text-red-600 dark:bg-red-900/30"
                )}>
                    {isPositive ? <ArrowUpRight size={20} /> :
                        isNeutral ? <Minus size={20} /> :
                            <ArrowDownRight size={20} />}
                </div>
            </div>

            <div className="mt-4 flex items-center text-sm">
                <span className={cn(
                    "font-medium",
                    isPositive ? "text-green-600" :
                        isNeutral ? "text-slate-500" :
                            "text-red-600"
                )}>
                    {change > 0 ? '+' : ''}{change}%
                </span>
                <span className="text-slate-500 ml-2">from last month</span>
            </div>
        </Card>
    );
}