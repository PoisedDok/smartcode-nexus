import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Save } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const Editor = () => {
  const [code, setCode] = useState(`// Welcome to AI Code Editor
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, Developer!</h1>
    </div>
  );
};

export default App;`);

  return (
    <div className="flex-1 flex flex-col futuristic-panel">
      <div className="flex items-center justify-between p-2 border-b border-primary/20 glass-effect">
        <span className="text-sm text-primary/80 font-mono neon-text">index.tsx</span>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost" className="transition-all duration-300 hover:scale-105 neon-border">
            <Save className="h-4 w-4 text-primary" />
          </Button>
          <Button size="sm" variant="ghost" className="transition-all duration-300 hover:scale-105 neon-border">
            <Play className="h-4 w-4 text-primary" />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 p-4 glass-effect">
        <pre className="font-mono text-sm">
          <code className="text-foreground transition-colors duration-300">{code}</code>
        </pre>
      </ScrollArea>
    </div>
  );
};

export default Editor;