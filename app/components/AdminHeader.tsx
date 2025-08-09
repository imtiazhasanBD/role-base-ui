'use client';
import { signOut } from 'next-auth/react';

export function AdminHeader() {
  return (
    <div className="bg-gray-900 p-4 text-white flex justify-between items-center">
      <span>Admin Header</span>
      <button onClick={() => signOut()} className="bg-red-600 px-3 py-1 rounded text-white">
        Logout
      </button>
    </div>
  );
}