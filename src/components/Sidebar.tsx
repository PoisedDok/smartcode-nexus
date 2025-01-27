import { 
  FileIcon, 
  FolderIcon, 
  Settings, 
  GitBranch, 
  Search,
  Menu
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const files = [
  { name: "src", type: "folder", icon: FolderIcon },
  { name: "index.tsx", type: "file", icon: FileIcon },
  { name: "styles.css", type: "file", icon: FileIcon },
];

const Sidebar = () => {
  return (
    <SidebarComponent>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-foreground font-semibold">Project Explorer</h2>
        <SidebarTrigger>
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {files.map((file) => (
                <SidebarMenuItem key={file.name}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2"
                    >
                      <file.icon className="h-4 w-4" />
                      <span>{file.name}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Search className="h-4 w-4" />
                    <span>Search</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <GitBranch className="h-4 w-4" />
                    <span>Source Control</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;