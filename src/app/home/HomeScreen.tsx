"use client";
import React from 'react'
import ContextProvider from './ContextProvider';
import { SidebarHome } from '@/components/home/Sidebar';
import HomeContent from './HomeContent';

function HomeScreen() {
  return (
    <ContextProvider>
        <main className='h-[100vh] flex'>
            <SidebarHome/>
            <HomeContent/>
        </main>
    </ContextProvider>
  )
}

export default HomeScreen