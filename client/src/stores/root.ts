import { makeAutoObservable } from "mobx";
import UserStore from "./UserStore";
import { FilesStore } from "./FilesStore";

class RootStore{
    userStore: UserStore;
    filesStore: FilesStore;
    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore(this);
        this.filesStore = new FilesStore(this);
        console.debug(this)
    }
}

export default RootStore;