import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIChatbot from "@/components/ui/ai-chatbot";
import Index from "./pages/Index";
import Pengenalan from "./pages/Pengenalan";
import Organisasi from "./pages/Organisasi";
import Aktiviti from "./pages/Aktiviti";
import HubungiKami from "./pages/HubungiKami";
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
          <Route path="/pengenalan" element={<Pengenalan />} />
          <Route path="/organisasi" element={<Organisasi />} />
          <Route path="/aktiviti" element={<Aktiviti />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
