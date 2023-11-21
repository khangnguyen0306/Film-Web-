import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import '../contents/news.scss'
import axios from 'axios';
const News = () => {
  const [News, setNews] = useState([]);
  const getAllNews = async () => {
    const res = await axios.get('https://653216574d4c2e3f333d9291.mockapi.io/news');
    if (res && res.data) {
      setNews(res.data);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);
  return (

    <Paper elevation={3} style={{ padding: '16px', marginTop: '100px' }}>
      <Typography variant="h5" gutterBottom >
        <span style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', marginBottom: '30px' }} > Phim Anime</span >
      </Typography>
      {News.map((film, index) => (
        <div key={index} style={{ marginBottom: '20px' }} className='contai-c'>
          <img src={film.img} alt={film.title} style={{ maxWidth: '100%', borderRadius: '3px' }} />
          <Typography variant="h6" style={{ textAlign: 'center' }}>{film.title}</Typography>
        </div>
      ))}
    </Paper>

  );
};

export default News;
