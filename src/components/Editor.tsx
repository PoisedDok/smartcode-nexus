const Editor = () => {
  return (
    <div className="flex-1 bg-editor-bg h-screen overflow-hidden">
      <div className="p-4">
        <pre className="text-editor-text font-mono">
          <code>{`// Welcome to AI Code Editor
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello, Developer!</h1>
    </div>
  );
};

export default App;`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Editor;