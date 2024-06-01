import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';

const SignUpForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        fullName: '',
        role: '',
        address: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/users/register', form);
            setSuccess('Registration successful!');
            setForm({
                email: '',
                password: '',
                fullName: '',
                role: '',
                address: ''
            });
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Registration failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
                    {success && <Typography color="primary" sx={{ mt: 2 }}>{success}</Typography>}
                    <Box sx={{ mt: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : 'Sign Up'}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default SignUpForm;
