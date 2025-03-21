import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { HotelSideBar } from "@/widgets/sideBar/HotelSideBar";

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <HotelSideBar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
