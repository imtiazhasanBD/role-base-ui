export const UserSidebar = () => {
  return (
    <div className="w-56 bg-blue-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-semibold">User Panel</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Dashboard</li>
          <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Profile</li>
          <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Tasks</li>
        </ul>
      </nav>
    </div>
  );
};