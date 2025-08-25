import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FarmerPage from "./pages/FarmerPage";
import DistributorPage from "./pages/DistributorPage";
import RetailerPage from "./pages/RetailerPage";
import ServicePage from "./pages/ServicePage";
import CustomerPage from "./pages/CustomerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/farmer" element={<FarmerPage />} />
          <Route path="/distributor" element={<DistributorPage />} />
          <Route path="/retailer" element={<RetailerPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/customer" element={<CustomerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
