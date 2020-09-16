import React, {useState} from 'react';

const initialValue = {
    director:'',
    title: '',
    metascore:'',
    actors:[],
}

function MovieForm () {
const [formValues, setFormValues] = useState(initialValue)

    return(
        <form>
            <label>Title&nbsp;</label>
            <input
            name='title'
            type='text'
            
            />
            <label>Director&nbsp;</label>
            <input
            name='director'
            type='text'
            
            />
            <label>Metascore&nbsp;</label>
            <input
            name='metascore'
            type='text'
            
            />
            <button>Submit Edits</button>
        </form>
        
    )
}
export default MovieForm