


const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">Admin Stats 1</div>
        <div className="bg-white p-6 rounded-lg shadow">Admin Stats 2</div>
        <div className="bg-white p-6 rounded-lg shadow">Admin Stats 3</div>
      </div>
    </div>
  );
};

page.getLayout = (page: React.ReactElement) => {
  return <>{page}</>;
};

export default page;