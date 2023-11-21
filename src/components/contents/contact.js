import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import Navbar from '../header/header';
import '../contents/contact.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactPage = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        // You can handle form submission here
        console.log(values);
        resetForm();
    };

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '100px', backgroundColor: '#131722',height:'100vh' }}>
                <Container maxWidth="sm" className="contact-container">
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            Contact Us
                        </Typography>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <Field
                                    as={TextField}
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    helperText={<ErrorMessage name="name" />}
                                />
                                <Field
                                    as={TextField}
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    helperText={<ErrorMessage name="email" />}
                                />
                                <Field
                                    as={TextField}
                                    name="message"
                                    label="Message"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    variant="outlined"
                                    helperText={<ErrorMessage name="message" />}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    style={{ marginTop: '20px' }}
                                >
                                    Send
                                </Button>
                            </Form>
                        </Formik>
                    </Paper>
                </Container>
            </div>
        </>
    );
};

export default ContactPage;
