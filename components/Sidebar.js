import { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? 'w-48' : 'w-16'} bg-white dark:bg-gray-900 transition-all`}>
      <button onClick={() => setOpen(!open)} className='p-4'>☰</button>
      {open && <ul>
        <li className='p-2'>Menu 1</li>
        <li className='p-2'>Menu 2</li>
      </ul>}
    </div>
  );
}
