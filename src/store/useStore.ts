import { create } from 'zustand';
import { FilterState, DashboardData } from '@/types';
import { fetchDashboardData } from '@/services/api';

interface DashboardState {
  filters: FilterState;
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setFilter: (key: keyof FilterState, value: any) => void;
  fetchData: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  filters: { dateRange: '30d', userType: 'all' },
  data: null,
  isLoading: false,
  error: null,

  setFilter: (key, value) => {
    set((state) => ({ filters: { ...state.filters, [key]: value } }));
    get().fetchData(); // Auto-refetch on filter change
  },

  fetchData: async () => {
    set({ isLoading: true, error: null });
    try {
      const filters = get().filters;
      const data = await fetchDashboardData(filters);
      set({ data, isLoading: false });
    } catch (err) {
      set({ error: (err as Error).message, isLoading: false });
    }
  },
}));