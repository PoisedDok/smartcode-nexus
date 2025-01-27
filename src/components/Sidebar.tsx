import { FolderIcon, FileIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-editor-sidebar border-r border-editor-line h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-editor-text font-semibold mb-4">Explorer</h2>
        <div className="space-y-2">
          <div className="flex items-center text-editor-text hover:bg-editor-line p-2 rounded cursor-pointer">
            <FolderIcon className="w-4 h-4 mr-2" />
            <span>src</span>
          </div>
          <div className="flex items-center text-editor-text hover:bg-editor-line p-2 rounded cursor-pointer ml-4">
            <FileIcon className="w-4 h-4 mr-2" />
            <span>index.tsx</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;