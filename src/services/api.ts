import { DashboardData } from '@/types';
import { MOCK_DATA } from './mockData'; // You will create this file next

const SIMULATED_DELAY = 1000; // 1 second delay to show skeleton loading

export const fetchDashboardData = (filters: any): Promise<DashboardData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Logic to filter MOCK_DATA based on 'filters' arg would go here
      // For now, we return the data successfully
      if (Math.random() > 0.95) {
        reject(new Error("Simulated Server Error")); // Random error for robustness testing
      } else {
        resolve(MOCK_DATA);
      }
    }, SIMULATED_DELAY);
  });
};