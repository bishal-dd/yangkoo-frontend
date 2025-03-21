import { Footer } from "@/widgets/footer/Footer";
import { NavigationBar } from "@/widgets/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <NavigationBar />
      {children}
      <Footer />
    </main>
  );
}
