import { BrainCircuit } from "lucide-react";

const AIAssistant = () => {
  return (
    <div className="w-80 bg-editor-sidebar border-l border-editor-line h-screen overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-editor-accent flex items-center justify-center animate-glow">
            <BrainCircuit className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-editor-text font-semibold">AI Assistant</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-editor-bg rounded-lg p-4">
            <h3 className="text-editor-accent font-medium mb-2">Suggestions</h3>
            <p className="text-editor-text text-sm">
              Consider adding error handling to improve code robustness.
            </p>
          </div>
          
          <div className="bg-editor-bg rounded-lg p-4">
            <h3 className="text-editor-purple font-medium mb-2">Debug Info</h3>
            <p className="text-editor-text text-sm">
              No errors detected in current file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;