import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Navbar from '../header/header';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import '../contents/about.scss'
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

const AboutPage = () => {

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '100px', backgroundColor: '#131722' }}>
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h4" gutterBottom className='content-element'>
                        About Our Film Website
                    </Typography>
                    <Typography variant="body1" className='content-element'>
                        Welcome to our film website, your ultimate destination for all things cinema! We are
                        passionate about movies and are dedicated to providing you with the latest information
                        about your favorite films, actors, and directors.
                    </Typography>
                  
                    <Typography variant="body1" className='content-element'>
                        Our mission is to bring the magic of the silver screen to your fingertips. Whether you're
                        a cinephile, a casual moviegoer, or just curious about the world of film, we've got you
                        covered. Explore our extensive collection of films, read reviews, watch trailers, and stay
                        up-to-date with the latest releases.
                    </Typography>
                    <Typography variant="body1" className='content-element'>
                        We are committed to creating a vibrant community of film enthusiasts. Join our forums to
                        discuss your favorite films, share your thoughts, and connect with fellow movie lovers.
                        Our goal is to foster a sense of belonging among film aficionados from all walks of life.
                    </Typography>
                    <Typography variant="body1" className='content-element'>
                        Thank you for choosing our film website as your go-to source for cinematic entertainment.
                        We hope you have an enjoyable and immersive experience exploring the world of movies with
                        us.
                    </Typography>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.215509019063!2d106.6754012!3d10.7688246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edfe2a3180b%3A0x3986871d90d9086b!2zTmjDoCBWxINuIGjDs2EgU2luaCB2acOqbg!5e0!3m2!1svi!2s!4v1696552815837!5m2!1svi!2s"
                        width="100%" height="400"
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        style={{marginTop:'30px'}}
                        >

                    </iframe>
                    <div className='centered-rating'>
                        <StyledRating
                            name="highlight-selected-only"
                            defaultValue={2}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value: number) => customIcons[value].label}
                            highlightSelectedOnly
                        />
                    </div>
                </Paper>
            </Container>
            </div>
        </>
    );
};

export default AboutPage;
