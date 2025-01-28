import { useState, useEffect } from "react";
import { BrainCircuit, MessageSquare, Sparkles, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";

interface Message {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const analyzeCode = async () => {
      setIsAnalyzing(true);
      try {
        const analysis = "Analyzing current codebase...";
        setMessages(prev => [...prev, {
          type: 'assistant',
          content: analysis,
          timestamp: new Date()
        }]);
        
        toast({
          title: "Analysis Complete",
          description: "AI has finished analyzing your code",
        });
      } catch (error) {
        console.error("Analysis error:", error);
        toast({
          variant: "destructive",
          title: "Analysis Failed",
          description: "Unable to analyze code at this time",
        });
      }
      setIsAnalyzing(false);
    };

    const interval = setInterval(analyzeCode, 30000);
    analyzeCode();

    return () => clearInterval(interval);
  }, [toast]);

  return (
    <div className="w-80 futuristic-panel animate-fade-in">
      <div className="p-4 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center neon-border">
            <BrainCircuit className={`w-5 h-5 text-primary ${isAnalyzing ? 'animate-pulse' : ''}`} />
          </div>
          <h2 className="font-semibold neon-text">AI Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.type === 'assistant' 
                  ? 'glass-effect' 
                  : 'bg-primary/10'
              } rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] animate-fade-in neon-border`}
            >
              <div className="flex items-center gap-2 mb-2">
                {message.type === 'assistant' ? (
                  <Sparkles className="w-4 h-4 text-primary animate-glow" />
                ) : (
                  <MessageSquare className="w-4 h-4 text-primary" />
                )}
                <span className="text-xs text-primary/80">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm text-foreground">{message.content}</p>
            </div>
          ))}

          {isAnalyzing && (
            <div className="glass-effect rounded-lg p-4 animate-pulse neon-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 animate-spin text-primary" />
                <span className="text-sm neon-text">Analyzing code...</span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <Separator className="animate-fade-in bg-primary/20" />

      <div className="p-4 border-t border-primary/20">
        <Button 
          className="w-full transition-all duration-300 hover:scale-105 neon-border bg-primary/20 hover:bg-primary/30"
          onClick={() => {
            setMessages(prev => [...prev, {
              type: 'user',
              content: "Requesting new analysis...",
              timestamp: new Date()
            }]);
            setIsAnalyzing(true);
          }}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Request Analysis
        </Button>
      </div>
    </div>
  );
};

export default AIAssistant;