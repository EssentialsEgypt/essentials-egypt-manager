import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: 'Essentials Egypt Manager',
  description: 'Manage your ads, competitors, and performance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-100 text-black font-sans">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}