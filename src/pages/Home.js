import { observer } from "mobx-react-lite";
import { userStore } from "../store";

function Home() {
  const { login } = userStore;
  return (
    <div>
      Home
      <button onClick={login}>login</button>
    </div>
  );
}

export default observer(Home);
