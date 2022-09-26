import React from "react"
import './Notes.css'
import Note from './Note/Note'

class Notes extends React.Component {
    constructor(props) {
        super(props)
        
        this.notes = [
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
        ]
    }
    render() {
        return (
            <div className="App" >
                <p>Moje notatki:</p>
                {this.notes.map(note => (
                    <Note
                        id={note.id}
                        title={note.title}
                        body={note.body} />
                )
                )}
            </div>
        )
    }
}

export default Notes