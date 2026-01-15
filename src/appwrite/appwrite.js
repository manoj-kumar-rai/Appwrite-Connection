import { Client, Account, Databases} from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID

const account = new Account(client);
const databases = new Databases(client);
export { client, account, databases };