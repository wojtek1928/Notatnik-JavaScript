import React from "react"
import './Notes.css'
import Note from './Note/Note'
import NewNote from "./NewNote/NewNote"
import Modal from 'react-modal'
import EditNote from "./EditNote/EditNote"

class Notes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [
                {
                    id: '2323',
                    title: 'Wykąpać psa',
                    body: 'Pamiętaj aby wykąpać pas specjalnym szamponem.'
                },
                {
                    id: '4234',
                    title: 'Zrobić zakupy',
                    body: 'Kupić: mleko, masło ,likier'
                }
            ],
            showEditModal: false,
            editNote: {}
        };
    }

    deleteNote(id) {
        console.log('Usuwanie notatki: ', id)
        const notes = [...this.state.notes].filter(note => note.id !== id);
        this.setState({ notes });
    }

    addNote(note) {
        const notes = [...this.state.notes]
        notes.push(note)
        this.setState({ notes });
    }

    editNote(note) {
        const notes = [...this.state.notes]
        const index = notes.findIndex(item => item.id === note.id)
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
                        id={this.state.editNote.id}
                        title={this.state.editNote.title}
                        body={this.state.editNote.body}
                        onEdit={note => this.editNote(note)} />

                    <button onClick={() => this.toggleModal()}>Anuluj edytowanie</button>
                </Modal>

                {this.state.notes.map(note => (
                    <Note
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        onEdit={(note) => this.editNoteHandler(note)}
                        onDelete={(id) => this.deleteNote(id)} />
                )
                )}
            </div>
        )
    }
}

export default Notes