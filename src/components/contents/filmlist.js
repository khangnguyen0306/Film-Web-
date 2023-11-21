
import '../contents/content.scss';
import React, { useState, useEffect } from 'react';
import '../contents/popup.scss';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Filmss() {

    const [Films, setFilms] = useState([]);
    const getAllFilms = async () => {
        const res = await axios.get('https://653216574d4c2e3f333d9291.mockapi.io/film');
        if (res && res.data) {
            setFilms(res.data);
        }
    };

    useEffect(() => {
        getAllFilms();
    }, []);

    const limitedSlides = Films.slice(0, 12);
    const [page, setPage] = useState(0);
    const perPage = 5;

    const startIndex = page * perPage;
    const endIndex = startIndex + perPage;
    const currentFilms = Films.filter(f => f.categorie.includes("Action")).slice(startIndex, endIndex);


    return (
        <>
            <div className='container-films-list'>
                <div style={{ display: 'flex' }}>
                    <div className='header-filmlist'>
                        <h3>
                            Popular Movies to Watch Now
                        </h3>
                        <span>Most watched movies by days</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                        {limitedSlides.slice(0, 5).map((Filmm) => (
                            <div key={Filmm.id} className='card-container-film'>
                                <Link to={`detail/${Filmm.id}`} style={{ textDecoration: 'none' }} >
                                    <Card className='card'>
                                        <img src={Filmm.img} alt={Filmm.title} />
                                        <div className='card-c'>
                                            <p style={{ color: 'grey' }}>
                                                <span> {Filmm.year}  ,  {Filmm.categorie}</span>
                                            </p>

                                            <a className='name-film'>{Filmm.name}</a>

                                        </div>
                                    </Card>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                    {limitedSlides.slice(5, 12).map((Filmm) => (
                        <Link to={`detail/${Filmm.id}`} style={{ textDecoration: 'none' }}>
                            <div key={Filmm.id} className='card-container-film'>
                                <Card className='card' style={{ marginTop: '10px' }}>
                                    <img src={Filmm.img} alt={Filmm.title} />
                                    <div className='card-c'>
                                        <p style={{ color: 'grey' }}>
                                            <span> {Filmm.year}  ,  {Filmm.categorie}</span>
                                        </p>


                                        <a className='name-film' >{Filmm.name}</a>

                                    </div>
                                </Card>
                            </div>
                        </Link>
                    ))}
                </div>
            </div >

            <div className='container-films-list2' style={{ backgroundColor: '#f5f5f5' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                        {currentFilms.map((Filmm) => (
                            <div key={Filmm.id} className='card-container-film2'>
                                <Link to={`detail/${Filmm.id}`} style={{ textDecoration: 'none' }} >
                                    <Card className='card2'>
                                        <img src={Filmm.img} alt={Filmm.title} />
                                        <div className='card-2c'>
                                            <p style={{ color: 'grey' }}>
                                                <span> {Filmm.year}  ,  {Filmm.categorie}</span>
                                            </p>

                                            <a className='name-film2'>{Filmm.name}</a>

                                        </div>
                                    </Card>
                                </Link>
                            </div>

                        ))}
                    </div>
                    <div className='header-filmlist2'>
                        <h3>
                            Action Movies for you
                        </h3>
                        <span>Most watched movies by days</span>
                        <div className='btn-previous' style={{ display: 'flex', marginTop: '50px' }}>
                            <button onClick={() => setPage(page - 1)} disabled={page <= 0} class="bi bi-arrow-left-circle " style={{ display: 'block', height: 'fit-content', borderRadius: '50%', color: 'none', marginRight: '50px' }}>

                            </button>

                            <button onClick={() => setPage(page + 1)} disabled={endIndex >= currentFilms.length + 5} className='bi bi-arrow-right-circle' style={{ display: 'block', height: 'fit-content', borderRadius: '50%', color: 'none' }}>

                            </button>
                        </div>
                    </div>
                </div>
            </div >



            <div className='container-films-list'>
                <div style={{ display: 'flex' }}>
                    <div className='header-filmlist'>
                        <h3>
                            Popular TV Series Right Now
                        </h3>
                      
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                        {Films.filter(f => f.categorie.includes("Comedy")).slice(0, 5).map((Filmm) => (
                            <div key={Filmm.id} className='card-container-film'>
                                <Link to={`detail/${Filmm.id}`} style={{ textDecoration: 'none' }} >
                                    <Card className='card'>
                                        <img src={Filmm.img} alt={Filmm.title} />
                                        <div className='card-c'>
                                            <p style={{ color: 'grey' }}>
                                                <span> {Filmm.year}  ,  {Filmm.categorie}</span>
                                            </p>

                                            <a className='name-film'>{Filmm.name}</a>

                                        </div>
                                    </Card>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
