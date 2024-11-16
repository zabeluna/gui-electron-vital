import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SideBarMenu } from '@/components/sections/sidebar-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search } from '@/components/sections/search';
import { Dashboard } from '@/components/sections/dashboard';
import { GraphicsCard } from '@/components/sections/graphics-card';
import { Component } from '@/components/sections/test-graphic';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SideBarMenu />
      <main>
        <SidebarTrigger />
        <Search />
        <div className='grid grid-cols-2 ml-'>
        <Dashboard />

        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
