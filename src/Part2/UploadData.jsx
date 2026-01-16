import { useEffect, useState } from "react";
import { databases } from "../appwrite/appwrite";
import { Databases } from "appwrite";

function UploadData() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID_NOTES
        );
        setNotes(response.documents);
        console.log(response.documents);
    }

    return <div>
        <div>
            {notes.map((note) => (
                <div key={note.$id}>{note.tasks}</div>
            ))}
        </div>
    </div>
}

export default UploadData;