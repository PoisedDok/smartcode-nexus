import { Terminal as TerminalIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const Terminal = () => {
  return (
    <div className="h-48 bg-background border-t border-border">
      <div className="flex items-center justify-between bg-secondary/50 px-4 py-2 border-b border-border">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Terminal</span>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100%-36px)]">
        <div className="p-4">
          <pre className="font-mono text-sm text-muted-foreground">
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