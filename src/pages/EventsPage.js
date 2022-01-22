import React, { useState, useEffect } from 'react'
import ListEvents from '../components/ListEvents'

const EventsPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('https://script.google.com/macros/s/AKfycbydIiiUyhAeP4Y-Hr2aAPR15gOKMC0X4_UsfQ7nR1PYPcgsZsF1-O9t8vVbhyPkq_gT/exec')
        let data = await response.json()

        setNotes(data)
    }

    return (
        <div className="notes">

            <div className="notes-header">
                <h2 className="notes-title">&#9782; Announcements</h2>
                <p className="notes-count">{notes.length}</p>
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