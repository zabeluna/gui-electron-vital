import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SideBarMenu } from '@/components/sections/sidebar-menu';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search } from '@/components/sections/search';
import { Dashboard } from '@/components/sections/dashboard';

export default function App({ children }: { children: React.ReactNode }) {
  return (

    <SidebarProvider>
      <SideBarMenu />
      <main>
        <SidebarTrigger />
        <Search/>
        <Dashboard/>
        {children}
      </main>
    </SidebarProvider>
  );
}
