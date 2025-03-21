"use client";
import { House, Bath, Ruler, ShowerHead } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/hotel",
    icon: House,
  },
  {
    title: "Rooms / Suites",
    url: "/hotel/rooms",
    icon: Bath,
  },
  {
    title: "Hotel Policy",
    url: "/hotel/policy",
    icon: Ruler,
  },
  {
    title: "Hotel Amenities",
    url: "/hotel/amenity",
    icon: ShowerHead,
  },
];

export function HotelSideBar() {
  const { openMobile, setOpenMobile } = useSidebar();

  const handleClickMobile = () => {
    if (openMobile) {
      setOpenMobile(false);
    }
  };
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Yangkoo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={handleClickMobile}>
                    <Link href={item.url}>
                      <item.icon className="text-primary" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  );
}
