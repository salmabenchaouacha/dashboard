import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { AuthContextProvider } from "./stores/auth/AuthContextProvider.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
              <App />
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
);
