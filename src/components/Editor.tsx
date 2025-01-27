import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Save } from "lucide-react";

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
    <div className="flex-1 flex flex-col bg-background border-x border-border">
      <div className="flex items-center justify-between p-2 border-b border-border">
        <span className="text-sm text-muted-foreground">index.tsx</span>
        <div className="flex gap-2">
          <Button size="sm" variant="ghost">
            <Save className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <Play className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <pre className="font-mono text-sm">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default Editor;