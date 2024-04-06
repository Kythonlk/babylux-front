import DashLogo from "@/components/blocks/dashLogo";
import DashSiteNav from "@/components/blocks/dashSiteNav";
import { Button } from "@/components/ui/button";
import DashHeader from "@/components/blocks/dashHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <DashLogo />
          <DashSiteNav />
          <div className="mt-auto p-4">
            <Button size="sm" className="w-full">
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <DashHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
