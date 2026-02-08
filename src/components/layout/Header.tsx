import { Bell, Menu, UserCircle } from 'lucide-react';

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm dark:bg-slate-900 dark:border-slate-800">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg dark:text-slate-300 dark:hover:bg-slate-800"
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    Overview
                </h2>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full dark:text-slate-400 dark:hover:bg-slate-800">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-950" />
                </button>
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center dark:bg-slate-800">
                    <UserCircle size={24} className="text-slate-500" />
                </div>
            </div>
        </header>
    );
}