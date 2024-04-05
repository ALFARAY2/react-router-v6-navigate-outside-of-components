import { observer } from "mobx-react-lite";
import { userStore } from "../store";

function Profile() {
  const { user, logout } = userStore;
  return (
    <div>
      user is: {user}
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default observer(Profile);
