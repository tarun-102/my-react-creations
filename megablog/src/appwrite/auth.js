import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid)
        this.account = new Account(this.client);

    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //call anoter method
                return this.login({email,password});
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }
    async getcurrentuser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions('current')
        } catch (error) {
            console.log("appwrite service :: getcurrentuser :: error", error)
        }
    }
}

const authService = new AuthService();

export default authService;
