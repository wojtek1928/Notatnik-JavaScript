import React, { useState } from "react";
import Notes from "../Notes";

function Note(props) {

    const [showDesc, setShowDesc] = useState(false)
    const togggleDesc = () => {
        setShowDesc(!showDesc);
    }

    const editHandler = () => {
        props.onEdit({
            title: props.title, body: props.body, id: props.id
        })
    }

    return (
        <div className="note">
            <p onClick={togggleDesc}>{props.title}</p>
            {showDesc && (<div className="description">{props.body}</div>)}
            <button onClick={editHandler}>Edytuj</button>
            <button
                className="delete"
                onClick={() => { props.onDelete(props.id) }}>Usuń</button>
        </div>
    )
}

export default Note