import { useState } from 'react'
import './App.css'
import { Flex } from './components/style/Flex_styled'
import axios from 'axios';
import styled from 'styled-components';


const Div = styled.div`
  background-color:#FFFFFF;
  padding: 5px 5px !important;
 text-align: center;
 .label{
  text-align: center;
 }
`;

function App() {
  const [count, setCount] = useState(0)

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


  return (
    <>
 <Flex row>
    <h1>Welcome to Login Page</h1>
    
  </Flex>
  <Flex row>
  <div>
        {step === 1 ? (
            <form onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <Flex row>
                  <Div>
                  <label>User Name</label>
                  
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                  </Div>
                  </Flex>
                  <Flex row>
                  <div>
                  <label>Password</label>
              
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
                  </div>
                  </Flex>
                  
            
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
  </Flex>
    </>
  )
}

export default App
