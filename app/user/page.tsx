


const UserDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>Your recent activities...</p>
      </div>
    </div>
  );
};

UserDashboard.getLayout = (page: React.ReactElement) => {
  return <>{page}</>;
};

export default UserDashboard;