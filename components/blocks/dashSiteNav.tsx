"use client";

import Link from "next/link";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  LineChart,
  FileText,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";

export default function DashSideNav() {
  const router = usePathname();

  const isActive = (href: string) =>
    router === href
      ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary";

  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <Link href="/dashboard" className={isActive("/dashboard")}>
          <Home className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/dashboard/orders"
          className={isActive("/dashboard/orders")}
        >
          <ShoppingCart className="h-4 w-4" />
          Orders
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge>
        </Link>
        <Link
          href="/dashboard/products"
          className={isActive("/dashboard/products")}
        >
          <Package className="h-4 w-4" />
          Products
        </Link>
        <Link
          href="/dashboard/customers"
          className={isActive("/dashboard/customers")}
        >
          <Users className="h-4 w-4" />
          Customers
        </Link>
        <Link
          href="/dashboard/analytics"
          className={isActive("/dashboard/analytics")}
        >
          <LineChart className="h-4 w-4" />
          Analytics
        </Link>
        <Link
          href="/dashboard/invoice"
          className={isActive("/dashboard/invoice")}
        >
          <FileText className="h-4 w-4" />
          Invoice
        </Link>
      </nav>
    </div>
  );
}
