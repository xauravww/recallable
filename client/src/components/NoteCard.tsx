import { type Note } from "../types/Note";
import Markdown from 'react-markdown'
export const NoteCard = ({note}:{note:Note})=>{
return (
    <div className="container bg-red-500 p-4">
        <h2 className="text-4xl font-bold">{note.name}</h2>
        <p className="mt-4"><Markdown>{note.markdown_content}</Markdown></p>
    </div>
)
}
