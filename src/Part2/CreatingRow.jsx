import { Client, ID, TablesDB } from "appwrite";

export default function CreateingRow() {
    const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const tablesDB = new TablesDB(client);

const data = {
    name: "Rahul Rai",
        email: "iamrahulrai123@gmail.com",
        password: "poptato@1234"
}

const promise = tablesDB.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    tableId: '6967837f0036d2876346',
    rowId: ID.unique(),
    data: data
});

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

}