export default function Navbar({ user }) {
  return (
    <div className='flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow'>
      <h1 className='text-xl'>Dashboard</h1>
      <div>{user && <span>{user.username}</span>}</div>
    </div>
  );
}
