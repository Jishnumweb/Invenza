import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      {/* <main className="ml-64 w-full p-6 bg-gray-50 min-h-screen"> */}
        <Outlet />
      {/* </main> */}
    </div>
  );
};

export default UserLayout;
