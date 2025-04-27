
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Index from "./pages/Index";
import Fundamentals from "./pages/Fundamentals";
import NotFound from "./pages/NotFound";
import FoodGroups from "./pages/FoodGroups";
import FoodLabel from "./pages/FoodLabel";
import DietaryGuidelines from "./pages/DietaryGuidelines";
import Resources from "./pages/Resources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fundamentals" element={<Fundamentals />} />
            <Route path="/food-groups" element={<FoodGroups />} />
            <Route path="/food-label" element={<FoodLabel />} />
            <Route path="/dietary-guidelines" element={<DietaryGuidelines />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
