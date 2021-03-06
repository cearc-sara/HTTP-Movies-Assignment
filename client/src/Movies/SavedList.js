import React from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';

function SavedList({ list }) {
  const history = useHistory()
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <Link to="/">Home</Link>
      </div>
      <div className='add-button' onClick={() => history.push('/add-movie')}>Add New Movie</div>
    </div>
  );
}

export default SavedList;
