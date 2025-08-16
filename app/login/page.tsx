// app/login/page.tsx
'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
      redirect: false
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <input
        className="border px-4 py-2"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
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
