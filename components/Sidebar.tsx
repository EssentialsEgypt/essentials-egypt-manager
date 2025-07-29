import Link from "next/link";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Competitors", path: "/competitors" },
  { name: "Cash Log", path: "/cash-log" },
  { name: "Ad Performance", path: "/ad-performance" },
  { name: "Analytics", path: "/analytics" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6 space-y-4">
      <h2 className="text-xl font-bold mb-6">Essentials Egypt</h2>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} className="hover:text-yellow-400">
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}