import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../contents/newpage.scss'
import { Link } from 'react-router-dom';
import Navbar from '../header/header';
import axios from 'axios';
const NewsPage = () => {
    const [Films, setFilms] = useState([]);
    const getAllNews = async () => {
        const res = await axios.get('https://653216574d4c2e3f333d9291.mockapi.io/news');
        if (res && res.data) {
            setFilms(res.data);
        }
    };


    useEffect(() => {
        getAllNews();
    }, []);

    return (
        <>
            <Navbar />
            <Container maxWidth="md" style={{ marginTop: '150px' }}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom>
                        News
                    </Typography>
                    <List>
                        {Films.map((news, index) => (
                            <Link to={`newsdetail/${news.id}`} style={{textDecoration:'none'}}>
                                <ListItem key={index}>
                                    <div className='news-c'>
                                        <img alt={`News ${index + 1}`} src={news.img} />
                                        <ListItemText
                                            className='ct-n'
                                            primary={news.title}
                                            secondary={news.shortinfo}
                                        />
                                    </div>

                                </ListItem>
                            </Link>
                        ))}

                    </List>
                </Paper>
            </Container >
        </>
    );
};

export default NewsPage;
