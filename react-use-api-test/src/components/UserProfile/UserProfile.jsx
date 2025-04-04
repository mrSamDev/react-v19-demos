import { Suspense, useEffect } from "react";
import UserData from "./UserData";

function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
        role: userId % 2 === 0 ? "Admin" : "User",
        joinDate: new Date().toLocaleDateString(),
      });
    }, 1000);
  });
}

function UserProfile({ userId }) {
  const userDataPromise = fetchUserData(userId);

  useEffect(() => {}, [userId]);

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <Suspense fallback={<div>Loading user data...</div>}>
        <UserData userPromise={userDataPromise} />
      </Suspense>
    </div>
  );
}

export default UserProfile;
