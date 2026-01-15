import { ID } from "appwrite";
import { account, databases } from "./appwrite";

export const signup = async ({ name, email, password }) => {
    // 1. Create user in Auth
    const user = await account.create(
        ID.unique(),
        email,
        password,
        name
    );

    // 2. Save user in Database
    const result = await databases.createDocument({
        databaseId: "69446de70017e90090fc",
        collectionId: "6967837f0036d2876346",
        documentId: ID.unique(),
        data: {
            userId: user.$id,
            name,
            email
        }
    });

    return result;
};
