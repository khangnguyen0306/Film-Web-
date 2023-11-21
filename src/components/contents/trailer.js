import React from 'react'
import { useParams } from 'react-router-dom'
import { listOfFilm } from '../share/ListOfFilms';

export default function Trailer() {

    const userName = useParams();
    const film = listOfFilm.find(obj => {
        return obj.id == userName.id;
    });


    return (
        <div className='trailer'>
            <iframe width="560" height="315" src={`${film.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    );


}
