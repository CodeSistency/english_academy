"use client";
import React from "react";
import ContextProvider from "./ContextProvider";
import { SidebarHome } from "@/components/home/Sidebar";
import HomeContent from "./HomeContent";
import Navbar from "@/components/hero/Navbar";
import Footer from "@/components/hero/Footer";

function HomeScreen() {
  return (
    <ContextProvider>
      <main className="h-[100vh]">
        <div className="w-full flex h-full">
        <SidebarHome />
          <div className="w-full relative">
          <Navbar />
          <HomeContent />
          <Footer />
          </div>
          
        </div>
        
        
        
        
       
      </main>
    </ContextProvider>
  );
}

export default HomeScreen;
