
import React, { useState } from 'react';
import axios from 'axios';

export const Home = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [step, setStep] = useState(1); // 1: Login, 2: Verification

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulate sending login request
            const response = await axios.post('/api/login', { username, password });
            if (response.status === 200) {
                setStep(2); // Move to verification step
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleVerificationSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulate sending verification code request
            const response = await axios.post('/api/verify', { username, verificationCode });
            if (response.status === 200) {
                // Simulate biometric verification
                const biometricResponse = await axios.get(`/api/biometric-verify?username=${username}`);
                if (biometricResponse.status === 200) {
                    setIsVerified(true);
                }
            }
        } catch (error) {
            console.error('Verification failed', error);
        }
    };

    if (isVerified) {
        return <h1>Login Successful! Welcome, {username}.</h1>;
    }


    return <div>
        {step === 1 ? (
            <form onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        ) : (
            <form onSubmit={handleVerificationSubmit}>
                <h2>Verification</h2>
                <input
                    type="text"
                    placeholder="Verification Code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                />
                <button type="submit">Verify</button>
            </form>
        )}
    </div>
}