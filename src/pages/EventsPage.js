import React, { useState, useEffect } from 'react'
import ListEvents from '../components/ListEvents'

const EventsPage = (props) => {

    let [notes, setNotes] = useState([])
    //console.log(notes);
    useEffect(() => {
        getNotes()
    }, [])

    
    let getNotes = async () => {
        let response = await fetch('https://script.google.com/macros/s/AKfycbyp2Df6JaTX845alLGEHv3Q0EOr2i2YISnXnDUfcxlkXGUzpAUgBBr2tSld3ezQLItd/exec')
        let data = await response.json()
        //let data = props.location.state;
        //console.log(data)
        setNotes(data)
    }

    return (
        <div className="notes">

            <div className="notes-header">
                <h2 className="notes-title">&#9782; Announcements</h2>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListEvents key={index} note={note} />
                ))}
            </div>
        </div>
    )
}

export default EventsPage