import React from 'react';

const ArtistsList = (props) => {
  if (!props.artists) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  const listOfArtists = props.artists.results.map((artist) => {
    return(
      <li key={artist.id}>
        {artist.image ? <img src={artist.image} /> : <div className="placeholder">No image</div>}
        <a href="#">
          <p className="artist-name">{artist.name}</p>
        </a>
      </li>
    );
  });

  return (
    <div>
      <ul className="list-of-artists">
        {listOfArtists}
      </ul>
    </div>
  );
};

export default ArtistsList;