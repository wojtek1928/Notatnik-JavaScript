import React from "react"
import './Notes.css'
import Note from './Note/Note'
import NewNote from "./NewNote/NewNote"
import Modal from 'react-modal'
import EditNote from "./EditNote/EditNote"
import axios from "../../axios"

class Notes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            showEditModal: false,
            editNote: {}
        };
    }

    componentDidMount() {
        this.fetchNotes();
        Modal.setAppElement('body');
    }

    async fetchNotes() {
        const res = await axios.get('/notes')
        this.setState({ notes: res.data })
    }

    async deleteNote(_id) {
        const notes = [...this.state.notes].filter(note => note._id !== _id);
        await axios.delete(`/notes/${_id}`)
        this.setState({ notes });
    }

    async addNote(note) {
        const notes = [...this.state.notes]
        // add to backend
        const res = await axios.post('/notes', note)
        const newNote = res.data
        // add to frontend
        notes.push(newNote)
        this.setState({ notes });
    }

    async editNote(note) {
        //edit backend
        await axios.put(`/notes/${note._id}`, note)
        //edit frontend
        const notes = [...this.state.notes]
        const index = notes.findIndex(item => item._id === note._id)
        if (index > -1) {
            notes[index] = note
            this.setState({ notes });
        }
        this.toggleModal()
    }

    toggleModal() {
        this.setState({ showEditModal: !this.state.showEditModal })
    }

    editNoteHandler(note) {
        this.toggleModal()
        this.setState({ editNote: note })
    }

    render() {
        return (
            <div className="App" >
                <p>Moje notatki:</p>

                <NewNote onAdd={(note) => this.addNote(note)} />
                <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel="Edytuj notatkę" >

                    <EditNote
                        _id={this.state.editNote._id}
                        title={this.state.editNote.title}
                        body={this.state.editNote.body}
                        onEdit={note => this.editNote(note)} />

                    <button onClick={() => this.toggleModal()}>Anuluj edytowanie</button>
                </Modal>

                {this.state.notes.map(note => (
                    <Note
                        key={note._id}
                        _id={note._id}
                        title={note.title}
                        body={note.body}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(_id) => this.deleteNote(_id)} />
                )
                )}
            </div>
        )
    }
}

export default Notes