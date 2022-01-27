import React, { useState, useEffect } from 'react'
import ListEvents from '../components/ListEvents'

const EventsPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('https://script.google.com/macros/s/AKfycbxE_I6nUHJWdnV2C4YftCMVti04k6DGHakr12UzYFqM50YGmryXhILhg5pas_NumEjO/exec')
        let data = await response.json()

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