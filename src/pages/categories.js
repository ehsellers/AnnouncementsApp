import React, {useEffect, useState} from 'react';
import ListEvents from '../components/ListEvents'

let info;
const categories = (props) => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes()
    }, [])
    
    let getNotes = async () => {
        let data =[];
        if(info == null){
            let response = await fetch('https://script.google.com/macros/s/AKfycbw-cJgkrvw4YvSKfJb7Yxwo4fNlLJ7em48wlFAghP5sUjosw5UQHLOwWg-bdVPz--3X/exec')
            data = await response.json();
            info = data;
        }
        setNotes(info)
    }

    return (
        <div className="notes">

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListEvents key={index} note={note} />
                ))}
            </div>
        </div>
    )
}

export default categories;