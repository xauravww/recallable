import {type Note} from "../types/Note"
export const Sidebar = ({notesArray}:{notesArray:Note[]})=>{

return (
    <div className="container w-64 flex flex-col bg-gray-200 p-2 text-left">
        {notesArray.map((note)=>{
            return(
                <a className="border border-gray-300" href="">{note.name}</a>
            )
        })}
    </div>
)
}
