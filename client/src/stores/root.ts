import { makeAutoObservable } from "mobx";

class RootStore{
    constructor() {
        makeAutoObservable(this);

        console.debug(this)
    }
}

export default RootStore;