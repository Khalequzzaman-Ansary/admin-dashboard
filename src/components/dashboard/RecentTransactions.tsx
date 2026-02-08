import { Card } from '@/components/ui/Card';
import { Transaction } from '@/types';
import { cn } from '@/lib/utils';

export function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
    return (
        <Card className="h-full flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Recent Transactions
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                    View All
                </button>
            </div>

            <div className="overflow-auto flex-1 -mx-6 px-6">
                <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                    <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 sticky top-0">
                        <tr>
                            <th className="py-3 px-2">User</th>
                            <th className="py-3 px-2">Status</th>
                            <th className="py-3 px-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {transactions.map((trx) => (
                            <tr key={trx.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">

                                {/* User Column */}
                                <td className="py-3 px-2">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                                            {trx.user.avatar}
                                        </div>
                                        <div>
                                            <div className="font-medium text-slate-900 dark:text-slate-100">
                                                {trx.user.name}
                                            </div>
                                            <div className="text-xs text-slate-500 hidden sm:block">
                                                {trx.user.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* Status Column */}
                                <td className="py-3 px-2">
                                    <span className={cn(
                                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize",
                                        trx.status === 'completed' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                                        trx.status === 'processing' && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                                        trx.status === 'failed' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                                    )}>
                                        {trx.status}
                                    </span>
                                </td>

                                {/* Amount Column */}
                                <td className="py-3 px-2 text-right font-medium text-slate-900 dark:text-slate-100">
                                    ${trx.amount.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}