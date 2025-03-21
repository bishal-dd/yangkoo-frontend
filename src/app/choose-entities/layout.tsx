import { NavigationBar } from "@/widgets/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-5">
      <NavigationBar />
      {children}
    </main>
  );
}
