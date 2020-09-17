import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'


const initialValue = {
    id: '',
    director:'',
    title: '',
    metascore:'',
    stars: '',
}

function MovieForm ({movieList, setMovieList}) {
const [formValues, setFormValues] = useState(initialValue)
const {id} = useParams()
const history = useHistory()

const inputChange = e => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault()
    axios
    .put(`http://localhost:5000/api/movies/${id}`, formValues)
    .then(res => {
        setMovieList(movieList.map((item) => {
            if(item.id == id){
                return formValues
            }else{
                return item
            }
        }))
        history.push('/')
    })
    .catch(err => {
        console.log(err)
    })
}
useEffect(() => {
    axios
    .get(`http://localhost:5000/api/movies/${id}`)
    .then(res => {
        setFormValues(res.data)
    })
    .catch(err => {
        console.log(err)
    })
},[id])

    return(
        <div>
            <h2>Update Movie</h2>
        <form onSubmit={handleSubmit}>
            <label>Title&nbsp;</label>
            <input
            name='title'
            type='text'
            value={formValues.title}
            onChange={inputChange}
            placeholder='movie title'
            />
            <label>Director&nbsp;</label>
            <input
            name='director'
            type='text'
            value={formValues.director}
            onChange={inputChange}
            placeholder='director'
            />
            <label>Metascore&nbsp;</label>
            <input
            name='metascore'
            type='text'
            value={formValues.metascore}
            onChange={inputChange}
            placeholder='metascore'
            />
            <button className='submit-button'>Submit</button>
        </form>
        </div>
    )
}
export default MovieForm