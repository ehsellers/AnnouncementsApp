import React, { useState, useEffect } from 'react'
import ListEvents from '../components/ListEvents'
import PacmanLoader from "react-spinners/PacmanLoader";

let info;
const EventsPage = (props) => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        getNotes()
    }, [])
    
    let getNotes = async () => {
        let data =[];
        if(info == null){
            let response = await fetch('https://script.google.com/macros/s/AKfycbw-cJgkrvw4YvSKfJb7Yxwo4fNlLJ7em48wlFAghP5sUjosw5UQHLOwWg-bdVPz--3X/exec');
            setLoading(false)
            data = await response.json();
            info = data;
        }
        else{
            setLoading(false)
        }
        setNotes(info)
    }

    return (
        <div className="notes">

            <div className="notes-header">
                <h2 className="notes-title">&#9782; Announcements</h2>
            </div>
            <div className="loader">
                <PacmanLoader size={20} color={"#f68657"} loading={loading} />
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