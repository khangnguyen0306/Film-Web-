import { Link, useParams } from 'react-router-dom'
import '../contents/detail.scss'
import { useState, useEffect } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button } from 'react-bootstrap';
import { CircularProgress } from '@mui/material';
import Header from '../header/header';
import { Margin } from '@mui/icons-material';
import Card from '@mui/material/Card';
export default function Detail() {
    const [filmsData, setFilmsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://653216574d4c2e3f333d9291.mockapi.io/film')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setFilmsData(data);
                } else {
                    console.error('Data from API is not an array:', data);
                }
            })
            .catch((err) => {
                setError(err);
                console.error('Error fetching data:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const newsid = useParams();
    const Film = filmsData.find((obj) => obj.id === newsid.id);

    if (loading) {

        return (
            <div className="loading-container" style={{ position: 'absolute', top: '50%', left: '50%' }}>

                <CircularProgress />
            </div>
        );
    }

    if (error) {

        return <div>Error: {error.message}</div>;
    }

    if (!Film) {

        return <div>Films not found</div>;
    }

    return (
        <>
            <div style={{ backgroundColor: 'rgb(19, 23, 34)', padding: '140px 0' }}>
                <Header />
                <div style={{ display: 'flex' }}>
                    <iframe className='iframe' src={Film.link}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen >

                    </iframe>
                    <div className='detail-film-information'>
                        <img src={Film.img} />
                        <h3>{Film.name}</h3>
                        <span>{Film.year} | {Film.time} | {Film.categorie}</span>
                        <p>{Film.infomation}</p>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: '#fff', marginLeft: '90px', padding: '30px 50px' }}>You also may be like</h3>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                        {filmsData.filter(f => f.categorie.includes(`${Film.categorie}` || ("Action"))).slice(1, 8).map((Filmm) => (
                            <Link  style={{textDecoration:'none'}}>
                                <div key={Filmm.id} className='card-container-film'  >
                                    <Card className='card' style={{ marginTop: '10px' }}>
                                        <img src={Filmm.img} alt={Filmm.title} />
                                        <div className='card-c'>
                                            <p style={{ color: 'grey' }}>
                                                <span> {Filmm.year}  ,  {Filmm.categorie}</span>
                                            </p>

                                            <a className='name-film'>{Filmm.name}</a>
                                        </div>
                                    </Card>
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}