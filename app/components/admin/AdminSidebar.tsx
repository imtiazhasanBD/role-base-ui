export const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Dashboard</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Users</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Reports</li>
        </ul>
      </nav>
    </div>
  );
};