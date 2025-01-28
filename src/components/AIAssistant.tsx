import { useState, useEffect, useCallback } from "react";
import { BrainCircuit, MessageSquare, Sparkles, Terminal, Save } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { useToast } from "./ui/use-toast";
import { Input } from "./ui/input";

interface Message {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isPromptScript?: boolean;
}

interface PromptScript {
  script: string;
  analysis: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [promptScripts, setPromptScripts] = useState<PromptScript[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const analyzePromptScript = useCallback((script: string) => {
    // Simulate AI analysis of the PromptScript
    const analysis = `Analyzing PromptScript:\n${script}\nIdentified command pattern...`;
    
    setPromptScripts(prev => [...prev, {
      script,
      analysis,
      timestamp: new Date()
    }]);

    setMessages(prev => [...prev, {
      type: 'assistant',
      content: analysis,
      timestamp: new Date(),
      isPromptScript: true
    }]);

    toast({
      title: "PromptScript Analyzed",
      description: "New script has been added to the chain",
    });
  }, [toast]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentInput.startsWith('/') && currentInput.endsWith('//')) {
      const script = currentInput.slice(1, -2).trim();
      
      setMessages(prev => [...prev, {
        type: 'user',
        content: currentInput,
        timestamp: new Date(),
        isPromptScript: true
      }]);

      setIsAnalyzing(true);
      setTimeout(() => {
        analyzePromptScript(script);
        setIsAnalyzing(false);
      }, 1000);
    } else {
      setMessages(prev => [...prev, {
        type: 'user',
        content: currentInput,
        timestamp: new Date()
      }]);
    }
    
    setCurrentInput("");
  };

  useEffect(() => {
    const analyzeCode = async () => {
      setIsAnalyzing(true);
      try {
        const analysis = "Monitoring for new PromptScript commands...";
        setMessages(prev => [...prev, {
          type: 'assistant',
          content: analysis,
          timestamp: new Date()
        }]);
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

    analyzeCode();
  }, [toast]);

  return (
    <div className="w-80 futuristic-panel animate-fade-in bg-editor-bg/30 backdrop-blur-xl border border-editor-accent/20">
      <div className="p-4 border-b border-editor-accent/20 bg-editor-bg/40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-editor-accent/10 flex items-center justify-center border border-editor-accent/30">
            <BrainCircuit className={`w-5 h-5 text-editor-accent ${isAnalyzing ? 'animate-pulse' : ''}`} />
          </div>
          <h2 className="font-semibold text-editor-accent">AI Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4 h-[400px]">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.type === 'assistant' 
                  ? 'bg-editor-bg/40 border border-editor-accent/20' 
                  : 'bg-editor-purple/10 border border-editor-purple/20'
              } rounded-lg p-4 transition-all duration-300 hover:scale-[1.02] animate-fade-in backdrop-blur-lg`}
            >
              <div className="flex items-center gap-2 mb-2">
                {message.type === 'assistant' ? (
                  <Sparkles className="w-4 h-4 text-editor-accent animate-glow" />
                ) : (
                  <MessageSquare className="w-4 h-4 text-editor-purple" />
                )}
                <span className="text-xs text-editor-text/80">
                  {message.timestamp.toLocaleTimeString()}
                </span>
                {message.isPromptScript && (
                  <Save className="w-4 h-4 text-editor-accent ml-auto" />
                )}
              </div>
              <p className="text-sm text-editor-text whitespace-pre-wrap">{message.content}</p>
            </div>
          ))}

          {isAnalyzing && (
            <div className="bg-editor-bg/40 border border-editor-accent/20 rounded-lg p-4 animate-pulse backdrop-blur-lg">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 animate-spin text-editor-accent" />
                <span className="text-sm text-editor-accent">Analyzing PromptScript...</span>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <Separator className="animate-fade-in bg-editor-accent/20" />

      <form onSubmit={handleInputSubmit} className="p-4 border-t border-editor-accent/20">
        <div className="flex gap-2">
          <Input
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Type /your prompt//"
            className="flex-1 bg-editor-bg/40 border-editor-accent/20 text-editor-text placeholder:text-editor-text/50"
          />
          <Button 
            type="submit"
            className="transition-all duration-300 hover:scale-105 bg-editor-accent/20 hover:bg-editor-accent/30 border border-editor-accent/30"
          >
            <MessageSquare className="w-4 h-4 text-editor-accent" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AIAssistant;