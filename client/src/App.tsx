import './App.css'
import { type Note } from './types/Note'
import { NoteCard } from './components/NoteCard'
import { Sidebar } from './components/Sidebar'
function App() {
 
  const dummyNotesArray: Note[] = [
    {
      id: "note-1",
      name: "My First Note",
      created_at: "2024-01-15T10:30:00Z",
      updated_at: "2024-02-20T14:45:00Z",
      markdown_content: "# Welcome\n\nThis is a **sample note** with some content.",
      embeddings: [0.12, 0.34, 0.56]
    },
    {
      id: "note-2",
      name: "Meeting Notes",
      created_at: "2024-03-02T09:00:00Z",
      updated_at: "2024-03-02T09:30:00Z",
      markdown_content: "## Action items\n\n- [ ] Follow up with team\n- [ ] Prepare slides",
      embeddings: [0.45, 0.67, 0.89]
    },
    {
      id: "note-3",
      name: "Sprint Ideas",
      created_at: "2024-03-10T16:20:00Z",
      updated_at: "2024-03-12T11:05:00Z",
      markdown_content: "Some brainstorming for the next sprint.",
      embeddings: [0.91, 0.23, 0.44]
    }
  ]

  return (
    <div className='flex h-screen'>
  <Sidebar notesArray={dummyNotesArray} />
<NoteCard note={dummyNotesArray[0]} />
    </div>
  )
}

export default App
