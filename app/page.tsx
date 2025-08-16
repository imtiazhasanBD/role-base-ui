import React, { Suspense } from "react";
import UserList from "./components/UserList";
import { getProfile, getUsers } from "./lib/utils";

const page = () => {
  const usersPromise = getUsers();
  const profilePromise = getProfile();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-10 text-center">Users List</h1>
      <Suspense fallback={<p className="text-center">Loading....</p>}>
        <UserList usersPromise={usersPromise} profilePromise={profilePromise}/>
      </Suspense>
    </div>
  );
};

export default page;
