import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import Instruments from "./pages/Instruments";
import Philosophy from "./pages/Philosophy";
import Workshop from "./pages/Workshop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.PROD ? "/dittmann-crafted-harmony" : "/"}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/instrumente" element={<Instruments />} />
            <Route path="/philosophie" element={<Philosophy />} />
            <Route path="/werkstatt" element={<Workshop />} />
            <Route path="/ueber" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
