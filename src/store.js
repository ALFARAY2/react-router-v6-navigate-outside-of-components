import { makeAutoObservable } from "mobx";
import { history } from "./history";
class User {
  constructor() {
    makeAutoObservable(this);
    this.user = null;
  }
  login = () => {
    this.user = "john doe";
    history.push("/profile");
  };
  logout = () => {
    this.user = null;
    history.push("/");
  };
}

export const userStore = new User();
