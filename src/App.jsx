import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, DollarSign, Trophy, List, Calendar, Users, Settings, LogOut } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Change to sidebar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Payouts",
    to: "/payouts",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    title: "Competitions",
    to: "/competitions",
    icon: <Trophy className="h-4 w-4" />,
  },
  {
    title: "Leaderboard",
    to: "/leaderboard",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Affiliate",
    to: "/affiliate",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Logout",
    to: "/logout",
    icon: <LogOut className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;