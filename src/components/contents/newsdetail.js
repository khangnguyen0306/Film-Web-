import { Link, useParams } from 'react-router-dom'
import { listofnews } from '../share/ListOfFilms';
import Header from '../header/header';
import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import './newsdetail.scss';

import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import '../contents/about.scss'

export default function NewsDetail() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
            color: theme.palette.action.disabled,
        },
    }));
    
    const customIcons: {
        [index: string]: {
            icon: React.ReactElement;
            label: string;
        };
    } = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon color="error" />,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentDissatisfiedIcon color="error" />,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon color="warning" />,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon color="success" />,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon color="success" />,
            label: 'Very Satisfied',
        },
    };
    
    function IconContainer(props: IconContainerProps) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }
    useEffect(() => {
        fetch('https://653216574d4c2e3f333d9291.mockapi.io/news')
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setNewsData(data);
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
    const News = newsData.find((obj) => obj.id === newsid.id);

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

    if (!News) {

        return <div>Films not found</div>;
    }

    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px',fontFamily:'montserrat, sans-serif' }} className='newsdetail-container'>
                <button style={{ backgroundColor: 'rgb(36, 186, 239)', border: 'none', color: '#fff', padding: '8px 15px', marginLeft: '50px', borderRadius: '5px' }}>
                    <Link to={"/newspage"} style={{ textDecoration: 'none', color: '#fff' }}>Back</Link></button>

                <div className='product-card'>
                  
                    <div className='product-tumb' style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={News.img} alt='' style={{borderRadius:'3px'}}/>
                    </div>
                    <div className='product-details' style={{color:'#fff'}}>
                        <h1 className='' style={{ textAlign: 'center', padding: '30px 0',fontWeight:'bold' }}>{News.title}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <p style={{ width: '70%', textAlign: 'justify', display: 'flex', justifyContent: 'center' }}>{News.info}</p>
                            <div className=''></div>
                        </div>
                    </div>
                </div>
                <div className='centered-rating' style={{padding:'50px 0',color:'white',backgroundColor:'rgba(255,255,255,0.3)'}}>
                        <StyledRating
                            name="highlight-selected-only"
                            defaultValue={2}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value: number) => customIcons[value].label}
                            highlightSelectedOnly
                            margin="20px 0"
                        />
                    </div>
            </div>
        </>
    )
}