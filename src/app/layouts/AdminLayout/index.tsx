import { Navbar } from "@/components/Navbar";
import { AdminSidebar } from "./AdminSidebar";
import { Footer } from "@/components/Footer";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex flex-row">
      <AdminSidebar />
      <div className="flex flex-col w-full py-2 px-4">
        <Navbar />
        <div className="py-4 flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
