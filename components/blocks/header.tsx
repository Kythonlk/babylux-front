import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

const navData = {
  menuItems: [
    {
      label: "Products",
      href: "./products",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Promotional ware",
      href: "#",
    },
  ],
  subMenuItems: [
    {
      label: "Branded ware",
      href: "#",
    },
    {
      label: "Promotional ware",
      href: "#",
    },
    {
      label: "Mens wear",
      href: "#",
    },
    {
      label: "Womens wear",
      href: "#",
    },
    {
      label: "Couple T shirts",
      href: "#",
    },
  ],
  accountActions: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Sign up",
      href: "/signup",
    },
  ],
  shoppingCart: {
    label: "Shopping cart",
    href: "/cart",
  },
};

export default function Header() {
  return (
    <div>
      <span className="text-sm bg-black text-white w-full flex text-center py-1 justify-center">
        Free shipping worldwide
      </span>
      <header className="sticky top-0 z-10 bg-white shadow dark:shadow-lg">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          <Link className="flex-col pr-4 md:pr-8" href="/">
            <p className="text-xl md:text-2xl font-bold">Crizalapparel</p>
          </Link>
          <nav className="hidden space-x-8 md:flex flex-1 min-w-0 items-center text-sm font-medium">
            {navData.menuItems.map((item) => (
              <Link
                className="flex items-center"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex flex-1  min-w-0">
            <form className="w-full flex md:ml-4">
              <Input
                className="max-w-[400px] flex-1 md:mr-2"
                placeholder="Search for products..."
                type="search"
              />
              <Button type="submit" variant="outline">
                <SearchIcon className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            {navData.accountActions.map((action) => (
              <Link
                className="text-sm font-medium"
                href={action.href}
                key={action.label}
              >
                {action.label}
              </Link>
            ))}
            <Link
              className="rounded-lg flex items-center justify-center"
              href={navData.shoppingCart.href}
            >
              <ShoppingCartIcon className="h-6 w-6 hover:bg-gray-100 bg-gray-100 rounded-lg" />
              <Badge className="ml-auto mb-4">2</Badge>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
