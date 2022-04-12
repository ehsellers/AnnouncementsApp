import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as BackArrow } from '../assets/back-arrow.svg'
//import {ScrollBox, ScrollAxes, FastTrack} from 'react-scroll-box';
 

function Events({ match, history }) {
    let noteId = match.params.id
    const location = useLocation()
    let des = location.state
    let n = match.params.Name
    let [note, setNote] = useState(null)
    //ScrollBox = require('react-scroll-box').ScrollBox; 

    useEffect(() => {
        let getNote = async () => {
            if(noteId === 'new') return
            
            let noteData = {"id": 0, "Name": n, "Description": des};
            //setNote(noteData);
            //let response = await fetch(`https://script.google.com/macros/s/AKfycbyp2Df6JaTX845alLGEHv3Q0EOr2i2YISnXnDUfcxlkXGUzpAUgBBr2tSld3ezQLItd/exec`)
            //let data = await response.json()
            //noteData = data[noteId];
            
            setNote(noteData)
        }

        getNote()
    }, [noteId, des, n])

    let handleSubmit = () => {
        history.push('/')
    }
    /*<ScrollBox style={{height: '200px'}} axes={ScrollAxes.Y} fastTrack={FastTrack.PAGING}>
                <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.Name + "\n\n" + note?.Description}></textarea>
            </ScrollBox>*/
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