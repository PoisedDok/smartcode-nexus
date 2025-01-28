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
    <SidebarComponent className="futuristic-panel border-r border-primary/20">
      <div className="flex items-center justify-between p-4 glass-effect border-b border-primary/20">
        <h2 className="text-foreground font-semibold neon-text">Project Explorer</h2>
        <SidebarTrigger>
          <Menu className="h-5 w-5 text-primary" />
        </SidebarTrigger>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary/80">Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {files.map((file) => (
                <SidebarMenuItem key={file.name}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 hover:bg-primary/10 neon-border"
                    >
                      <file.icon className="h-4 w-4 text-primary" />
                      <span>{file.name}</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-primary/80">Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-primary/10 neon-border">
                    <Search className="h-4 w-4 text-primary" />
                    <span>Search</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-primary/10 neon-border">
                    <GitBranch className="h-4 w-4 text-primary" />
                    <span>Source Control</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-primary/10 neon-border">
                    <Settings className="h-4 w-4 text-primary" />
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