## AdminDash ⚡️

**`AdminDash`** is a high-performance, responsive, and modular admin dashboard template built for modern enterprise applications. Leveraging the power of **`Next.js 16`** (App Router) and **`React 19`**, it features a fully strictly typed **`TypeScript`** architecture, state management via **`Zustand`**, and data visualization using **`Recharts`**.

The UI is crafted with **Tailwind CSS v4** for a sleek, dark-mode-ready aesthetic that remains performant at scale.

## 🚀 Key Features

- **Modern Tech Stack:** Built on the bleeding edge with `Next.js 16`, `React 19`, and `Tailwind CSS 4`.

- **Interactive Data Visualization:** Beautiful, responsive charts (Area, Bar, Pie) powered by `Recharts`.

- **Modular Architecture:** Component-based structure separating charts, dashboard widgets, and layout elements for maximum maintainability.

- **Global State Management:** Lightweight and performant state handling using `zustand`.

- **Responsive Layout:** Collapsible sidebar and mobile-optimized navigation with smooth transitions.

- **Utility-First Styling:** Custom `cn` utility for conflict-free Tailwind class merging (`clsx + tailwind-merge`).

- **Dark Mode Ready:** Built-in semantic color classes supporting light and dark themes out of the box.

## 🛠️ Tech Stack

| Category      | Technology                                     | Description                                          |
| :------------ | :--------------------------------------------- | :--------------------------------------------------- |
| **Framework** | [Next.js 16](https://nextjs.org)               | App Router, Server Components, TurboPack             |
| **Language**  | [TypeScript](https://www.typescriptlang.org)   | Static typing for enterprise reliability             |
| **Styling**   | [Tailwind CSS v4](https://tailwindcss.com)     | Utility-first CSS framework                          |
| **State**     | [Zustand](https://github.com/pmndrs/zustand)   | Small, fast, and scalable barebones state management |
| **Charts**    | [Recharts](https://recharts.org)               | Composable charting library for React                |
| **Icons**     | [Lucide React](https://lucide.dev)             | Consistent, lightweight icons                        |
| **Utils**     | [Date-fns](https://date-fns.org)               | Modern JavaScript date utility library               |
| **Animation** | [Framer Motion](https://www.framer.com/motion) | Production-ready animation library                   |

## 📂 Project Structure

The project follows a scalable **`"feature-folder"`** pattern:

```
admin-dashboard/
├── .git/                          # Git repository
├── .gitignore                     # Git ignore rules
├── .next/                         # Next.js build output
├── node_modules/                  # Project dependencies
├── public/                        # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── (dashboard)/           # Dashboard route group
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Home page
│   │   └── favicon.ico
│   │
│   ├── components/                # Reusable React components
│   │   ├── charts/                # Data visualization components
│   │   │   ├── OrdersChart.tsx
│   │   │   ├── RevenueChart.tsx
│   │   │   └── UserPieChart.tsx
│   │   │
│   │   ├── dashboard/             # Dashboard-specific widgets
│   │   │   ├── DashboardFilter.tsx
│   │   │   ├── KPICard.tsx
│   │   │   └── RecentTransactions.tsx
│   │   │
│   │   ├── layout/                # Global layout components
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   │
│   │   └── ui/                    # Atomic UI components
│   │       └── Card.tsx
│   │
│   ├── hooks/                     # Custom React hooks
│   │
│   ├── lib/                       # Utility functions
│   │   └── utils.ts               # Helper utilities (cn, etc.)
│   │
│   ├── services/                  # API and data services
│   │   ├── api.ts                 # API client
│   │   └── mockData.ts            # Mock data adapters
│   │
│   ├── store/                     # Global state management (Zustand)
│   │   └── useStore.ts            # Global store
│   │
│   └── types/                     # TypeScript type definitions
│       └── index.ts               # Central type exports
│
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── next-env.d.ts                  # Next.js type definitions
├── package.json                   # Project dependencies and scripts
├── package-lock.json              # Locked dependency versions
├── postcss.config.mjs             # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## ⚡️ Getting Started

**Prerequisites**

- `Node.js 18+ (LTS recommended)`
- `npm or yarn`

**Installation**

1. **Clone the repository:**

```
git clone (https://github.com/Khalequzzaman-Ansary/admin-dashboard.git)

cd admin-dashboard
```

2. **Install dependencies:**

```
npm install
```

3. **Run the development server:**

```
npm run dev
```

4. **Open your browser:** Navigate to (http://localhost:3000) to view the dashboard.
