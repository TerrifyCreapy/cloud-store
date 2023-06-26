import { makeAutoObservable } from "mobx";
import UserStore from "./UserStore";

class RootStore{
    userStore: UserStore;
    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore(this);
        console.debug(this)
    }
}

export default RootStore;