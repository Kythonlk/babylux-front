"use client";

import DashLogo from "@/components/blocks/dashLogo";
import DashSiteNav from "@/components/blocks/dashSiteNav";
import { Button } from "@/components/ui/button";
import DashHeader from "@/components/blocks/dashHeader";

export default function Dashboard() {
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
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
