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
      <main>
        <Navbar />
        <SidebarHome />
        <HomeContent />
        <Footer />
      </main>
    </ContextProvider>
  );
}

export default HomeScreen;
