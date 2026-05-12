"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Building2,
  FileText,
  Globe2,
  LayoutGrid,
  ScrollText,
  Signpost,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

type Item = { label: string; href: string; icon: LucideIcon; badge?: string };

const NAV: { label: string; items: Item[] }[] = [
  {
    label: "Manifesto",
    items: [{ label: "The case for Common", href: "/", icon: ScrollText }],
  },
  {
    label: "The architecture",
    items: [
      { label: "PASE entity", href: "/entity", icon: Building2 },
      { label: "Country acts", href: "/acts", icon: Globe2 },
      { label: "Startup Passport", href: "/passport", icon: Signpost, badge: "Soon" },
      { label: "AU Model Law", href: "/model-law", icon: FileText, badge: "Draft" },
    ],
  },
  {
    label: "Browse",
    items: [
      { label: "Topics", href: "/topics", icon: LayoutGrid },
      { label: "Signatories", href: "/signatories", icon: Users },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link
          href="/"
          className="no-underline flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center"
        >
          <div
            className="size-8 shrink-0 rounded-md bg-foreground text-background grid place-items-center font-semibold tracking-tight"
            aria-hidden
          >
            C
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <div className="text-sm font-semibold tracking-tight leading-none">Common</div>
            <div className="text-xs text-muted-foreground mt-1 leading-none">
              A legal architecture for Africa
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="font-ui">
        {NAV.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.href)}
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                        {item.badge && (
                          <Badge
                            variant="outline"
                            className="ml-auto h-5 text-[10px] font-normal group-data-[collapsible=icon]:hidden"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="font-ui">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Sign the manifesto"
              className="bg-foreground text-background hover:bg-foreground/90 hover:text-background data-[active=true]:bg-foreground data-[active=true]:text-background"
            >
              <Link href="/sign">
                <BookOpen />
                <span>Sign the manifesto</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
