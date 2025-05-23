import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const router = useRouter();

  const register = async () => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push('/auth/login');
    else alert('Register gagal');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Register</h2>
      <input placeholder="Username" className="mb-2 p-2 border" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" className="mb-4 p-2 border" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={register} className="px-4 py-2 bg-cyan-500 text-white rounded">Register</button>
    </div>
  );
}
