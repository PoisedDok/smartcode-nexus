import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";
import AIAssistant from "@/components/AIAssistant";
import Terminal from "@/components/Terminal";

const Index = () => {
  return (
    <div className="flex h-screen bg-editor-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <Editor />
          <AIAssistant />
        </div>
        <Terminal />
      </div>
    </div>
  );
};

export default Index;