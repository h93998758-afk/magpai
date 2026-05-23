import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { NavigationTabs } from "@/components/NavigationTabs";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState } from "react";
import ChatAI from "./pages/ChatAI";
import Goals from "./pages/Goals";
import Tutor from "./pages/Tutor";
import FlowTeach from "./pages/FlowTeach";
import Notebook from "./pages/Notebook";

function App() {
  const [activeTab, setActiveTab] = useState("chat");

  const renderPage = () => {
    switch (activeTab) {
      case "chat":
        return <ChatAI />;
      case "goals":
        return <Goals />;
      case "tutor":
        return <Tutor />;
      case "flowteach":
        return <FlowTeach />;
      case "notebook":
        return <Notebook />;
      default:
        return <ChatAI />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <div className="flex flex-col h-screen bg-background">
          <Header />
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex-1 overflow-hidden">
            {renderPage()}
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
