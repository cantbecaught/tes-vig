import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/me').then(res => res.json()).then(data => {
      if (!data.id) router.push('/auth/login');
      else setUser(data);
    });
  }, []);

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1'>
        <Navbar user={user} />
        <div className='p-6'>Welcome, {user?.username}</div>
      </div>
    </div>
  );
}
