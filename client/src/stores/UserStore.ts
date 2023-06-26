import {makeAutoObservable} from "mobx";
import jwtDecode from "jwt-decode";
import { IUser } from "../interfaces/entities/IUser";
import UserApi from "../api/user-api";
import { cookie } from "../api/instance";

class UserStore {
    user: IUser | null = null;

    rootStore: unknown;

    constructor(rootStore: unknown) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    setUser(user: IUser | null) {
        this.user = user;
    }

    async login(email: string, password: string): Promise<boolean> {
        try {
            const data = await UserApi.login(email, password);
            if(data) {
                this.setUser({id: data.id, email: data.email});
                return true;
            }
            else {
                this.setUser(null);
                return false;
            }
        }
        catch(e) {
            console.error(e);
        }
        finally {
            return false;
        }
    }

    isAuth() {
        try {
            const token = cookie.get("token");
            console.log(token);
            if(!token) {
                this.setUser(null);
                return false;
            }
            else {
                let decoded: IUser = jwtDecode(token);
                this.setUser({id: decoded?.id, email: decoded?.email});
                return true;
            }
        }
        catch(e) {
            console.error(e);
        }
    }
}

export default UserStore;