import { instance, cookie, privateInstance } from "./instance";

class UserApi {
    public static async login(email: string, password: string) {
        try {
            const {data} = await instance.post("auth/login", {
                email, password
            }, { withCredentials: true });
            cookie.set("token", data.token, {
                sameSite: "strict",
                secure: true,
                expires: new Date(Date.now() + 2_419_200_000)
            });
            return {...data};
        }
        catch(e: any) {
            console.log(e.response?.data?.message);
        }
        
    }

    public static async logout(){

    }

    public static async register(email: string, password: string): Promise<any> {
        try {
            const {data} = await instance.post("auth/register", {
                email, password,
            });
            cookie.set("token", data.token, {
                sameSite: "strict",
                secure: true,
                expires: new Date(Date.now() + 2_419_200_000)
            });
            return {...data}
        }
        catch(e) {
            console.error(e);
        }
    }
    public static async isAuth() {
        try {
            const token = cookie.get("token");
            if(!token) return false;
            const data = await privateInstance.get("/user/me");
            console.log(data);
            return data;
        }
        catch(e: any) {
            console.error(e);
        }
    }
}

export default UserApi;