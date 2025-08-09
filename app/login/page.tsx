// app/login/page.tsx
'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn('credentials', {
      username,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <input
        className="border px-4 py-2"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border px-4 py-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
