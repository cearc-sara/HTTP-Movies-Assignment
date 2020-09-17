import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'

const initialFormValue = {
    id: '',
    director: '',
    title: '',
    metascore: '',
    stars: [],
}

function AddMovieForm ({setMovieList}) {
    const [formValues, setFormValues] = useState(initialFormValue)
    const history = useHistory()

    const inputChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const postNewMovie = (e) => {
        e.preventDefault()
        const newMovie = {
            id: formValues.id,
            title: formValues.title,
            director: formValues.director,
            metascore: formValues.metascore,
            stars: formValues.stars
        }

        axios
        .post('http://localhost:5000/api/movies', newMovie)
        .then(res => {
            setMovieList(res.data)
            history.push('/')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={postNewMovie}>
                
                <input
                name='title'
                value={formValues.title}
                type='text'
                onChange={inputChange}
                placeholder='movie title'
                />
                
                <input
                name='director'
                value={formValues.director}
                type='text'
                onChange={inputChange}
                placeholder='director'
                />
                 
                <input
                name='metascore'
                value={formValues.metascore}
                type='text'
                onChange={inputChange}
                placeholder='metascore'
                />
                 
                <input
                name='stars'
                value={formValues.stars}
                type='text'
                onChange={inputChange}
                placeholder='stars'
                />
                <button className='add-button'>Add Movie</button>
            </form>
        </div>
    )
}
export default AddMovieForm