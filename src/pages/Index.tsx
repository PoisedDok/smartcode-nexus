import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";
import AIAssistant from "@/components/AIAssistant";
import Terminal from "@/components/Terminal";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex">
            <Editor />
            <AIAssistant />
          </div>
          <Terminal />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;