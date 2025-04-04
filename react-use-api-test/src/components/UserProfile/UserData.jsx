import { use } from "react";
import { ThemeContext } from "../../App";

function UserData({ userPromise }) {
  const userData = use(userPromise);

  const theme = use(ThemeContext);

  return (
    <div className={`user-data ${theme}`}>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Role:</strong> {userData.role}
      </p>
      <p>
        <strong>Join Date:</strong> {userData.joinDate}
      </p>
    </div>
  );
}

export default UserData;
