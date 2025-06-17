import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;
    //storage;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }
    async createPost({ title, slug, content, fetureImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("appwrite service :: createPost :: error", error)
        }
    }
    async updatePost(slug, { title, content, fetureImage, status, }) {
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    fetureImage,
                    status,
                }
            );
        } catch (error) {
            console.log("appwrite service :: updatePost :: error", error)
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug

            )
            return true;
        } catch (error) {
            console.log("appwrite service :: deletePost :: error", error)
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: getPost :: error", error)
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                queries,

            )
        } catch (error) {
            console.log("appwrite service :: getPosts :: error", error)
            return false;
        }
    }
    //file upload 
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwritebucketid,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
            conf.appwritebucketid,
            fileId
        )
            return true
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error", error);
            return false;
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwritebucketid,
            fileId
        )
    }
}

const service = new Service();
export default service