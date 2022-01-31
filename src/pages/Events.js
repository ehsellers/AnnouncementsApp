import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BackArrow } from '../assets/back-arrow.svg'

function Events({ match, history }) {
    let noteId = match.params.id

    let [note, setNote] = useState(null)

    useEffect(() => {
        let getNote = async () => {
            if(noteId === 'new') return
            
            let noteData = {"id": 0, "Name": "", "Description": ""};
            setNote(noteData);
            let response = await fetch(`https://script.google.com/macros/s/AKfycbyp2Df6JaTX845alLGEHv3Q0EOr2i2YISnXnDUfcxlkXGUzpAUgBBr2tSld3ezQLItd/exec`)
            let data = await response.json()
            noteData = data[noteId];
            setNote(noteData)
        }

        getNote()
    }, [noteId])

    let handleSubmit = () => {
        history.push('/')
    }
    
    return (
        <div className="note">

            <div className="note-header">
                <h3>
                    <Link to="/">
                        <BackArrow onClick={handleSubmit} />
                    </Link>
                </h3>
            </div>

            <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.Name + "\n\n" + note?.Description}></textarea>
            
        </div>
    )
}

export default Events;