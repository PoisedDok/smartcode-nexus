import { Terminal as TerminalIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const Terminal = () => {
  return (
    <div className="h-48 futuristic-panel animate-fade-in">
      <div className="flex items-center justify-between glass-effect px-4 py-2 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium neon-text">Terminal</span>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 transition-all duration-300 hover:scale-105 neon-border">
          <X className="h-4 w-4 text-primary" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100%-36px)] glass-effect">
        <div className="p-4">
          <pre className="font-mono text-sm text-primary/80">
            <code>$ npm start
Starting development server...
Ready on http://localhost:3000</code>
          </pre>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Terminal;