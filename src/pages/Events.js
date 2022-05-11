import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as BackArrow } from '../assets/back-arrow.svg'
 

function Events({ match, history }) {
    let noteId = match.params.id
    const location = useLocation()
    let des = location.state
    let n = match.params.Name
    let [note, setNote] = useState(null)

    useEffect(() => {
        let getNote = async () => {
            if(noteId === 'new') return
            
            let noteData = {"id": 0, "Name": n, "Description": des};
            
            setNote(noteData)
        }

        getNote()
    }, [noteId, des, n])

    let handleSubmit = () => {
        history.push('/announcements')
    }

    return (
        <div className="note">

            <div className="note-header">
                <h3>
                    <Link to="/announcements">
                        <BackArrow onClick={handleSubmit} />
                    </Link>
                </h3>
            </div>
 
            <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.Name + "\n\n" + note?.Description}></textarea>
            
        </div>
    )
}

export default Events;