import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as BackArrow } from '../assets/back-arrow.svg'

function Events({ match, history }) {
    let noteId = match.params.id

    let [note, setNote] = useState(null)

    useEffect(() => {
        let getNote = async () => {
            if(noteId === 'new') return
    
            let response = await fetch(`https://script.google.com/macros/s/AKfycbydIiiUyhAeP4Y-Hr2aAPR15gOKMC0X4_UsfQ7nR1PYPcgsZsF1-O9t8vVbhyPkq_gT/exec`)
            let data = await response.json()
            let noteData = data[noteId];
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