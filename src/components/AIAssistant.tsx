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

  // Simulate AI analysis of code
  useEffect(() => {
    const analyzeCode = async () => {
      setIsAnalyzing(true);
      try {
        // In a real implementation, this would connect to your AI service
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

    // Run analysis every 30 seconds
    const interval = setInterval(analyzeCode, 30000);
    analyzeCode(); // Initial analysis

    return () => clearInterval(interval);
  }, [toast]);

  return (
    <div className="w-80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border flex flex-col animate-fade-in">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <BrainCircuit className={`w-5 h-5 text-primary ${isAnalyzing ? 'animate-pulse' : ''}`} />
          </div>
          <h2 className="font-semibold">AI Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.type === 'assistant' 
                  ? 'bg-secondary/50' 
                  : 'bg-primary/10'
              } rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] animate-fade-in`}
            >
              <div className="flex items-center gap-2 mb-2">
                {message.type === 'assistant' ? (
                  <Sparkles className="w-4 h-4 text-primary animate-glow" />
                ) : (
                  <MessageSquare className="w-4 h-4" />
                )}
                <span className="text-xs text-muted-foreground">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm text-foreground">{message.content}</p>
            </div>
          ))}

          {isAnalyzing && (
            <div className="bg-secondary/30 rounded-lg p-4 animate-pulse">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 animate-spin" />
                <span className="text-sm">Analyzing code...</span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <Separator className="animate-fade-in" />

      <div className="p-4 border-t border-border animate-fade-in">
        <Button 
          className="w-full transition-all duration-300 hover:scale-105"
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