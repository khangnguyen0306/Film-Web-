import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../header/header';

const UpdateNews = (props) => {
    const { show, handleClose, newsData, idToUpdate, handleUpdate } = props;
    const [formData, setFormData] = useState(newsData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.put(`https://653216574d4c2e3f333d9291.mockapi.io/news/${idToUpdate}`, formData);
            if (res) {
                toast.success('Update sucessful');
                handleUpdate();
                handleClose();
                console.log(res);
            } else {
                console.error("Error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        setFormData(newsData);
    }, [newsData]);

    return (
        <>
        <Header/>
            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Films</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Short info</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Shortinfo"
                                name="shortinfo"
                                value={formData.shortinfo}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Infomation</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Infomation"
                                name="info"
                                value={formData.info}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                     
                       
                        <Form.Group className="mb-3">
                            <Form.Label>image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Image"
                                name="img"
                                value={formData.img}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                      
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default UpdateNews;
