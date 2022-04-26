import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (note) => {
    return new Date(note.Date).toLocaleDateString()
}

let getHour = (note) => {
    var hours = new Date(note.Time).getHours()
    var defaultTime = "";
    var min = new Date(note.Time).getMinutes()
    var label = hours < 12 ? "am" : "pm";
    if(note.Time === "")
    {
        return defaultTime;
    }
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    min = min < 10 ? "0" + min : min;
    console.log(min);
    return "\t" + hours + ":" + min + " " + label;
}

let getTitle = (note) => {
        //split by-new lines and just get the first line
        const title = note.Name.split('\n')[0]
        if(title.length > 45) {
            return title.slice(0, 45)
        }

        return title
}
        /*<Link to={{
            path:`/${note.id}/${note.Name}`,
             state:`${note.Description}`
            }}>
            <div className='notes-list-item'>
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span>{getHour(note)}</p>
            </div>
        </Link>*/
const ListEvents = ({ note }) => {
    return (
        <Link to={{
            pathname: `/announcements/${note.id}/${note.Name}`,
            state: `${note.Description}`
        }}>
            <div className='notes-list-item'>
                <h3>{getTitle(note)}</h3>
                <p><span>{getTime(note)}</span>{getHour(note)}</p>
            </div>
        </Link>
        
    )
}

export default ListEvents
