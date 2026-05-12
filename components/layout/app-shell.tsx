import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={150}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-30 flex h-12 items-center gap-3 border-b hairline bg-background/80 backdrop-blur px-4 font-ui">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Common · open-source legal architecture
            </span>
          </header>
          <div>{children}</div>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
