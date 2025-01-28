import { BrainCircuit, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

const AIAssistant = () => {
  return (
    <div className="w-80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border flex flex-col animate-fade-in">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
            <BrainCircuit className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-semibold">AI Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-lg p-4 transition-all duration-300 hover:bg-secondary/70 hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary animate-glow" />
              <h3 className="font-medium">Suggestions</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Consider adding error handling to improve code robustness.
            </p>
          </div>

          <Separator className="animate-fade-in" />

          <div className="space-y-2 animate-fade-in">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <h3 className="font-medium">Chat</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ask me anything about your code!
            </p>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border animate-fade-in">
        <Button className="w-full transition-all duration-300 hover:scale-105">
          <MessageSquare className="w-4 h-4 mr-2" />
          New Chat
        </Button>
      </div>
    </div>
  );
};

export default AIAssistant;