import { ReactNode } from 'react';
import './globals.css';
import { getUserRole } from './lib/auth';
import { UserSidebar } from './components/user/UserSidebar';
import { AdminHeader } from './components/AdminHeader';
import { UserHeader } from './components/UserHeader';
import { AdminSidebar } from './components/admin/AdminSidebar';


export default async function RootLayout({ children }: { children: ReactNode }) {
  const role = await getUserRole();

  return (
    <html lang="en">
      <body>
        {role === 'admin' ? (
          <div className="flex min-h-screen">
            <div className="w-64 bg-gray-800 text-white">
              <AdminSidebar />
            </div>
            <div className="flex-1">
              <AdminHeader />
              <main className="p-4">{children}</main>
            </div>
          </div>
        ) : role === 'user' ? (
          <div className="flex min-h-screen">
            <div className="w-64 bg-blue-800 text-white">
              <UserSidebar />
            </div>
            <div className="flex-1">
              <UserHeader />
              <main className="p-4">{children}</main>
            </div>
          </div>
        ) : (
          <main className="p-4">{children}</main>
        )}
      </body>
    </html>
  );
}
