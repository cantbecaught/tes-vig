import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const router = useRouter();

  const login = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push('/dashboard');
    else alert('Login gagal');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Login</h2>
      <input placeholder="Username" className="mb-2 p-2 border" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" className="mb-4 p-2 border" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={login} className="px-4 py-2 bg-cyan-500 text-white rounded">Login</button>
      <p className="mt-4">Belum punya akun? <Link href="/auth/register" className="text-cyan-500">Register</Link></p>
    </div>
  );
}
