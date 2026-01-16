import { Client, ID, TablesDB } from "appwrite";

export default function CreateingRow() {
    const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const tablesDB = new TablesDB(client);

const promise = tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: import.meta.env.VITE_APPWRITE_COLLECTION_ID_NOTES,
    rowId: ID.unique(),
    data: { title: "Hamlet" }
});

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

}