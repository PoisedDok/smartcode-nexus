const Terminal = () => {
  return (
    <div className="h-48 bg-editor-bg border-t border-editor-line">
      <div className="flex items-center bg-editor-sidebar px-4 py-2">
        <span className="text-editor-text text-sm">Terminal</span>
      </div>
      <div className="p-4">
        <pre className="text-editor-text font-mono text-sm">
          <code>$ npm start</code>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;