import { Navbar } from "@/components/Navbar";
import { AdminSidebar } from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row">
        <AdminSidebar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
